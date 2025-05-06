"use client";

import AuthGuard from "@/features/auth/components/guards/AuthGuard";
import ListingSupportRequests from "@/features/support/components/ListingSupportRequests/ListingSupportRequests";

export default function RequestsPage() {
  return (
    <AuthGuard role="admin">
      <ListingSupportRequests />
    </AuthGuard>
  );
}
