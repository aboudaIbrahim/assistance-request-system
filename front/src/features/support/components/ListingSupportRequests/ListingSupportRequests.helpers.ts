export function getStatusColor(status: string) {
  switch (status.toLowerCase()) {
    case "pending":
      return "warning";
    case "approved":
      return "success";
    case "rejected":
      return "error";
    default:
      return "default";
  }
}
