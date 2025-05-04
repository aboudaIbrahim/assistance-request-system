import { Box, styled } from "@mui/material";

export const AddSupportRequestRootStyle = styled(Box)(({ theme }) => ({
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(2),
  gap: theme.spacing(7),
  marginTop: theme.spacing(6),
}));

export const AddSupportRequestFormContainerStyle = styled(Box)(({ theme }) => ({
  width: 600,
  maxHeight: "80%",
  backgroundColor: "#fff",
  padding: theme.spacing(4),
  borderRadius: theme.spacing(1),
  boxShadow: theme.shadows[3],
}));
