import React from "react";
import { Modal, Fade, Backdrop, Stack } from "@mui/material";
import { CustomModalProps } from "./CustomModal.type";
import { ModalActionsRootStyle, modalStyle } from "./CustomModal.style";
import SubmitButton from "../SubmitButton/SubmitButton";
import SectionTitle from "../SectionTitle/SectionTitle";

function CustomModal({
  open,
  onClose,
  onConfirm,
  children,
  title,
  isLoading,
}: CustomModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Stack sx={modalStyle} alignItems={"center"}>
          <Stack width={"70%"}>
            <SectionTitle text={title} sxProps={{ paddingBottom: 5 }} />

            {children}
            <ModalActionsRootStyle direction="row" spacing={2}>
              <SubmitButton text="Fermer" onClick={onClose} isCloseButton />
              <SubmitButton
                text="Confirmer"
                onClick={onConfirm}
                isLoading={isLoading}
              />
            </ModalActionsRootStyle>
          </Stack>
        </Stack>
      </Fade>
    </Modal>
  );
}

export default CustomModal;
