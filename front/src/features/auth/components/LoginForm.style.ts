import { Box, Paper, styled } from "@mui/material";

export const LoginFormRootStyle = styled(Paper)(({ theme }) => ({
  zIndex: 2,
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  backgroundColor: "rgba(255, 255, 255, 0.95)",
  boxShadow: theme.shadows[10],
  width: 600,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  }
}));

export const LoginFormContainerStyle = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: 38,
  alignItems: "center",
  justifyContent: "center",
});
