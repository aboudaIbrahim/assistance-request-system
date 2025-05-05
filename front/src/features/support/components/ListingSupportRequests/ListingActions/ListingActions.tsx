"use client";
import { SupportRequest } from "@/types/support";
import { Button } from "@mui/material";
import { useState } from "react";
import UpdateStatusModal from "./UpdateStatusModal/UpdateStatusModal";
function RequestAction({ request }: Readonly<{ request: SupportRequest }>) {
  const [openModal, setOpenModal] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Button
        onClick={() => {
          handleOpenModal();
          setIsAccepted(true);
        }}
        color="success"
      >
        Valider
      </Button>
      <Button
        onClick={() => {
          handleOpenModal();
          setIsAccepted(false);
        }}
        color="error"
      >
        Rejeter
      </Button>
      <UpdateStatusModal
        open={openModal}
        onClose={closeModal}
        requestId={request.id}
        isRequestAccepted={isAccepted}
      />
    </>
  );
}

export default RequestAction;
