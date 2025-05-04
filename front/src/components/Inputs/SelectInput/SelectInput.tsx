import React from "react";
import { SelectInputProps } from "./SelectInput.type";
import { Controller, useFormContext } from "react-hook-form";
import { StyledTextField } from "../TextFieldInput/TextFIeldInput.style";
import { InputProps } from "@mui/material";
import { MenuItemStyle } from "./SelectInput.style";

function SelectInput({
  fieldName,
  label,
  options,
  rules,
}: Readonly<SelectInputProps>) {
  const { control } = useFormContext();
  return (
    <Controller
      name={fieldName}
      control={control}
      rules={{ ...rules }}
      render={({ field, fieldState }) => (
        <StyledTextField
          {...field}
          select
          label={label}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
          value={field.value ?? ""}
          fullWidth
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
        >
          {options.map((option, index) => (
            <MenuItemStyle key={index} value={option}>
              {option}
            </MenuItemStyle>
          ))}
        </StyledTextField>
      )}
    />
  );
}
export default SelectInput;
