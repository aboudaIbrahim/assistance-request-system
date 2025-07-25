import { Stack, styled, SxProps } from "@mui/material";

export const modalStyle: SxProps = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  paddingBlock: 6,
};

export const ModalActionsRootStyle = styled(Stack)({
  alignItems: "center",
  justifyContent: "center",
  paddingTop: 50,
  maxWidth: 600,
});
