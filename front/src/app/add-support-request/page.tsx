"use client";
import AuthGuard from "@/features/auth/components/guards/AuthGuard";
import AddSupportRequest from "@/features/support/components/AddSupportRequest/AddSupportRequest";

export default function AddSupportRequestPage() {
  return (
    <AuthGuard role="user">
      <AddSupportRequest />
    </AuthGuard>
  );
}
