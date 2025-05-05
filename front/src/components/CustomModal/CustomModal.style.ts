import { Stack, styled, SxProps } from "@mui/material";

export const modalStyle: SxProps = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 350,
  backgroundColor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export const ModalActionsRootStyle = styled(Stack)({
  alignItems: "center",
  justifyContent: "center",
  paddingTop: 50,
});
