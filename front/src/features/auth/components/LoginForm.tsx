"use client";
import { LoginFormRootStyle, LoginFormContainerStyle } from "./LoginForm.style";
import TextFieldInput from "@/components/Inputs/TextFieldInput/TextFIeldInput";
import SubmitButton from "@/components/SubmitButton/SubmitButton";
import { FormProvider, useForm } from "react-hook-form";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { LOGIN_FORM_INPUTS_CONFIG } from "./LoginForm.constant";
import { useLoginForm } from "./useLogingForm";

function LoginForm() {
  const formMethods = useForm({
    mode: "onChange",
    shouldFocusError: true,
  });
  const { loginHandler, isLogging } = useLoginForm(formMethods);
  return (
    <FormProvider {...formMethods}>
      <LoginFormRootStyle elevation={6}>
        <SectionTitle text="Content de te revoir" />
        <SectionTitle
          text="Veuillez vous connecter pour continuer"
          sxProps={{ fontSize: "16px", color: "#b388ff" }}
        />
        <LoginFormContainerStyle mt={2} height={400}>
          <TextFieldInput
            fieldName={LOGIN_FORM_INPUTS_CONFIG.email.fieldName}
            label={LOGIN_FORM_INPUTS_CONFIG.email.label}
            rules={LOGIN_FORM_INPUTS_CONFIG.email.rules}
          />
          <TextFieldInput
            fieldName={LOGIN_FORM_INPUTS_CONFIG.password.fieldName}
            label={LOGIN_FORM_INPUTS_CONFIG.password.label}
            rules={LOGIN_FORM_INPUTS_CONFIG.password.rules}
            isPassword
          />
          <SubmitButton
            text="Se connecter"
            onClick={loginHandler}
            isLoading={isLogging}
          />
        </LoginFormContainerStyle>
      </LoginFormRootStyle>
    </FormProvider>
  );
}
export default LoginForm;
