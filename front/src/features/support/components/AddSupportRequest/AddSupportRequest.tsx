"use client";
import { Stack } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import { CATEGORIES, URGENCIES } from "./AddSupportRequest.constant";
import TextFieldInput from "@/components/Inputs/TextFieldInput/TextFIeldInput";
import SelectInput from "@/components/Inputs/SelectInput/SelectInput";
import {
  AddSupportRequestFormContainerStyle,
  AddSupportRequestRootStyle,
} from "./AddSupportRequest.style";
import SubmitButton from "@/components/SubmitButton/SubmitButton";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import Image from "next/image";
import addIcon from "@/assets/add-icon.svg";
import { useAddSupportRequest } from "../../hooks/useAddSupportRequest";

function AddSupportRequest() {
  const formMethods = useForm({
    mode: "onChange",
    shouldFocusError: true,
  });

  const {
    category,
    description,
    title,
    urgency,
    submitCount,
    isCreatingRequest,
    onSubmit,
  } = useAddSupportRequest(formMethods);

  return (
    <FormProvider {...formMethods}>
      <AddSupportRequestRootStyle onSubmit={onSubmit}>
        <form onSubmit={onSubmit} key={submitCount}>
          <AddSupportRequestFormContainerStyle>
            <Stack spacing={2} sx={{ alignItems: "center" }}>
              <Image src={addIcon} alt="Add" width={75} height={75} />
              <SectionTitle text="Soumettre une demande d’assistance" />
            </Stack>

            <Stack gap={4} marginTop={5}>
              <TextFieldInput
                fieldName={title.fieldName}
                label={title.label}
                rules={{ ...title.rules }}
              />
              <TextFieldInput
                fieldName={description.fieldName}
                label={description.label}
                rules={{ ...description.rules }}
                isTextArea
              />
              <SelectInput
                fieldName={category.fieldName}
                label={category.label}
                options={CATEGORIES}
                rules={{ ...category.rules }}
              />
              <SelectInput
                fieldName={urgency.fieldName}
                label={urgency.label}
                options={URGENCIES}
                rules={{ ...urgency.rules }}
              />
              <SubmitButton
                isLoading={isCreatingRequest}
                onClick={onSubmit}
                text="Soumettre"
              />
            </Stack>
          </AddSupportRequestFormContainerStyle>
        </form>
      </AddSupportRequestRootStyle>
    </FormProvider>
  );
}

export default AddSupportRequest;
