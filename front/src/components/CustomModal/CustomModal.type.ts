import { ReactNode } from "react";

export interface CustomModalProps {
  title: string;
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  children: ReactNode;
  isLoading?: boolean;
}
