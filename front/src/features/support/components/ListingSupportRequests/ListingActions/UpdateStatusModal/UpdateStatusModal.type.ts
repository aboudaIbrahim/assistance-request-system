export interface UpdateStatusModalProps {
  open: boolean;
  onClose: () => void;
  requestId: string;
  isRequestAccepted: boolean;
}
