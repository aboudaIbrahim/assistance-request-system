"use client";

import { useState } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";
import { ADD_SUPPORT_REQUEST_INPUTS_CONFIG } from "../components/AddSupportRequest/AddSupportRequest.constant";
import { useCreateRequestMutation } from "../api/support.api";
import { SupportRequest } from "@/types/support";
import { useAppDispatch } from "@/store/hooks";
import {
  ERROR_AlERT,
  SUCCESS_ALERT,
} from "@/components/CustomSnackbar/CustomSnackbar.constant";
import { openAlert } from "@/store/slices/alert";
import { useRouter } from "next/navigation";

export const useAddSupportRequest = (formMethods: UseFormReturn) => {
  const dispatch = useAppDispatch();
  const [submitCount, setSubmitCount] = useState(0);
  const router = useRouter();
  const { handleSubmit, reset } = formMethods;

  const { category, description, title, urgency } =
    ADD_SUPPORT_REQUEST_INPUTS_CONFIG;

  const [createRequest, { isLoading: isCreatingRequest }] =
    useCreateRequestMutation();

  const onSubmit = handleSubmit(async (data: FieldValues) => {
    try {
      await createRequest(data as SupportRequest).unwrap();
      setSubmitCount((previousState) => previousState + 1);
      reset();
      dispatch(openAlert({ ...SUCCESS_ALERT, message: "Demande soumise" }));
      router.push("/my-requests");
    } catch (e) {
      dispatch(openAlert({ ...ERROR_AlERT }));
      console.error(e);
    }
  });
  return {
    category,
    description,
    title,
    urgency,
    submitCount,
    isCreatingRequest,
    onSubmit,
  };
};
