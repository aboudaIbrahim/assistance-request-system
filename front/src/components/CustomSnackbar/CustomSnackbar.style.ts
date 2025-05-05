import { Alert, AlertTitle, Snackbar, styled } from "@mui/material";

export const StyledSnackBar = styled(Snackbar)({
  width: 400,
  bottom: 20,
});

export const StyledAlert = styled(Alert, {
  shouldForwardProp: (prop) => prop !== "isSuccess",
})<{ isSuccess: boolean }>(({ theme, isSuccess }) => ({
  minHeight: 50,
  height: "auto",
  width: "100%",
  display: "flex",
  borderRadius: 8,
  alignItems: "center",
  "& .MuiAlert-icon": {
    marginRight: 5,
    marginTop: isSuccess ? -2 : 0,
  },
  "& .MuiTypography-root": {
    marginBottom: isSuccess ? 0 : 2,
  },
  "& .MuiSvgIcon-root": {
    position: "relative",
    fill: theme.palette.common.white,
  },
  "& .MuiAlert-action": {
    fill: theme.palette.common.white,
  },
}));

export const StyledAlertTitle = styled(AlertTitle)({
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "22px",
});
