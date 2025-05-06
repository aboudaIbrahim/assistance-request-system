import { SupportRequest } from "@/types/support";
import { Dispatch, SetStateAction } from "react";

export interface UserRequestDetailsProps {
  selectedRequest: SupportRequest | null;
  setSelectedRequest: Dispatch<SetStateAction<SupportRequest | null>>;
}
