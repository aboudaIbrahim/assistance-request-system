"use client";

import { Controller, useFormContext } from "react-hook-form";
import { TextFIeldInputProps } from "./TextFieldInput.type";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, InputProps } from "@mui/material";
import { StyledTextField } from "./TextFIeldInput.style";
import { useState } from "react";

function TextFieldInput({
  label,
  fieldName,
  isTextArea = false,
  rules,
  placeholder,
  isPassword = false,
}: Readonly<TextFIeldInputProps>) {
  const { control } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);
  const inputType = isPassword ? (showPassword ? "text" : "password") : "text";
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  return (
    <Controller
      name={fieldName}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <StyledTextField
          {...field}
          type={inputType}
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
              endAdornment: isPassword ? (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={togglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ) : null,
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
