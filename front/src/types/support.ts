export type RequestStatus = "Pending" | "Approved" | "Rejected";

export type RequestUrgency = "Normal" | "Urgent" | "Critical";

export interface SupportRequest {
  id: string;
  title: string;
  description: string;
  category: string;
  urgency: RequestUrgency;
  status: RequestStatus;
  adminComment?: string;
}
