"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { clearAlert } from "@/store/slices/alert";
import { useEffect } from "react";
import {
  StyledAlert,
  StyledAlertTitle,
  StyledSnackBar,
} from "./CustomSnackbar.style";

function CustomSnackBar() {
  const alert = useAppSelector((state) => state.alertReducer.alert);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (alert?.active) {
      setTimeout(() => {
        dispatch(clearAlert());
      }, 3000);
    }
  }, [alert]);

  const onClose = () => {
    dispatch(clearAlert());
  };

  if (!alert) {
    return null;
  }

  return (
    <StyledSnackBar
      open={true}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      autoHideDuration={3000}
    >
      <StyledAlert
        variant="filled"
        severity={alert?.type}
        color={alert?.type}
        onClose={onClose}
        isSuccess={alert?.type === "success"}
      >
        <StyledAlertTitle>{alert?.message}</StyledAlertTitle>
      </StyledAlert>
    </StyledSnackBar>
  );
}
export default CustomSnackBar;
