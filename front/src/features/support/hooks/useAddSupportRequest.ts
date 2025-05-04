"use client";

import { useState } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";
import { ADD_SUPPORT_REQUEST_INPUTS_CONFIG } from "../components/AddSupportRequest/AddSupportRequest.constant";
import { useCreateRequestMutation } from "../api/support.api";
import { SupportRequest } from "@/types/support";

export const useAddSupportRequest = (formMethods: UseFormReturn) => {
  const [submitCount, setSubmitCount] = useState(0);

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
    } catch (e) {
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
