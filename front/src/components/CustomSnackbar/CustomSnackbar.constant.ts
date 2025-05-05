import { AlertInfos } from "@/store/slices/alert.type";

export const SUCCESS_ALERT: AlertInfos = {
  type: "success",
  message: "success",
  active: true,
};

export const ERROR_AlERT: AlertInfos = {
  type: "error",
  message: "Un erreur est survenue",
  active: true,
};
