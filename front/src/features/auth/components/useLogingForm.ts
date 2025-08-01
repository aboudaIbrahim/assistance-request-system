"use client";
import { FieldValues, UseFormReturn } from "react-hook-form";
import { useLoginMutation } from "../api/auth.api";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store/hooks";
import {
  ERROR_AlERT,
  SUCCESS_ALERT,
} from "@/components/CustomSnackbar/CustomSnackbar.constant";
import { openAlert } from "@/store/slices/alert";
import { useState } from "react";
export const useLoginForm = (formMethods: UseFormReturn) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();
  const [isLogging, setIsLogging] = useState(false);
  const loginHandler = formMethods.handleSubmit(async (values: FieldValues) => {
    try {
      setIsLogging(true);
      const { user } = await login({
        email: values.email,
        password: values.password,
      }).unwrap();
      dispatch(openAlert({ ...SUCCESS_ALERT, message: "Connexion réussie" }));
      if (user.role === "admin") {
        router.push("/requests-list");
      } else {
        router.push("/my-requests");
      }
      setIsLogging(false);
    } catch (e) {
      dispatch(openAlert({ ...ERROR_AlERT, message: "Connexion échouée" }));
      console.error(e);
      setIsLogging(false);
    }
  });

  return { loginHandler, isLogging };
};
