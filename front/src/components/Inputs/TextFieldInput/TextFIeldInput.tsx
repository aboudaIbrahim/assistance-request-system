"use client";

import { Controller, useFormContext } from "react-hook-form";
import { TextFIeldInputProps } from "./TextFieldInput.type";

import { InputProps } from "@mui/material";
import { StyledTextField } from "./TextFIeldInput.style";

function TextFieldInput({
  label,
  fieldName,
  isTextArea = false,
  rules,
  placeholder,
}: Readonly<TextFIeldInputProps>) {
  const { control } = useFormContext();

  return (
    <Controller
      name={fieldName}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <StyledTextField
          {...field}
          placeholder={placeholder}
          label={label}
          error={!!fieldState.error}
          value={field.value ?? ""}
          helperText={fieldState.error?.message}
          fullWidth
          multiline={isTextArea}
          minRows={isTextArea ? 4 : undefined}
          maxRows={isTextArea ? 8 : undefined}
          variant="outlined"
          slotProps={{
            input: {
              sx: {},
            } as InputProps,
            inputLabel: {
              shrink: false,
              sx: {
                position: "absolute",
                top: "-8px",
                fontSize: "1rem",
                fontWeight: 600,
                transition: "none",
              },
            },
          }}
        />
      )}
    />
  );
}

export default TextFieldInput;
