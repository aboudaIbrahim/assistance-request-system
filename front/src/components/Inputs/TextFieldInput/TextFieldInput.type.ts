import { RegisterOptions } from "react-hook-form";

export interface TextFIeldInputProps {
  fieldName: string;
  label: string;
  rules?: RegisterOptions;
  isTextArea?: boolean;
}
