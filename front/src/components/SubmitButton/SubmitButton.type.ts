import { SxProps } from "@mui/material";

export interface SubmitButtonProps {
  text: string;
  disabled?: boolean;
  isLoading?: boolean;
  onClick: () => void;
  sxProps?: SxProps;
}
