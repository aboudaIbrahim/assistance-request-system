import React from "react";
import { SubmitButtonProps } from "./SubmitButton.type";
import { SubmitButtonStyle } from "./SubmitButton.style";
import { CircularProgress } from "@mui/material";

function SubmitButton({
  onClick,
  text,
  disabled,
  isLoading,
  sxProps,
  isCloseButton,
}: Readonly<SubmitButtonProps>) {
  return (
    <SubmitButtonStyle
      type="submit"
      isCloseButton={isCloseButton}
      onClick={onClick}
      disabled={disabled}
      sx={{ ...sxProps }}
    >
      {isLoading ? (
        <CircularProgress size={25} sx={{ color: "#ffffff" }} />
      ) : (
        text
      )}
    </SubmitButtonStyle>
  );
}

export default SubmitButton;
