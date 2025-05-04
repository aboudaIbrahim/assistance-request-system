import { RegisterOptions } from "react-hook-form";

export interface SelectInputProps {
  fieldName: string;
  label: string;
  options: string[];
  rules?: RegisterOptions;
}
