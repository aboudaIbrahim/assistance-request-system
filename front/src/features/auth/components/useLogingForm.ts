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
export const useLoginForm = (formMethods: UseFormReturn) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [login, { isLoading: isLogging }] = useLoginMutation();
  const loginHandler = formMethods.handleSubmit(async (values: FieldValues) => {
    try {
      const { user } = await login({
        email: values.email,
        password: values.password,
      }).unwrap();
      dispatch(openAlert({ ...SUCCESS_ALERT, message: "Connexion réussie" }));
      if (user.role === "admin") {
        router.push("/requests-list");
      } else {
        router.push("/add-support-request");
      }
    } catch (e) {
      dispatch(openAlert({ ...ERROR_AlERT, message: "Connexion échouée" }));
      console.error(e);
    }
  });

  return { loginHandler, isLogging };
};
