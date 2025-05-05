import { AlertColor } from "@mui/material";

export interface AlertInfos {
  type: AlertColor;
  message: string;
  active: boolean;
}
export interface AlertState {
  alert: AlertInfos | null;
}
