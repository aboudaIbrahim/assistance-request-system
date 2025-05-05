import { Button, styled } from "@mui/material";

export const SubmitButtonStyle = styled(Button, {
  shouldForwardProp: (prop) => prop !== "isCloseButton",
})(({ theme }) => ({ isCloseButton }: { isCloseButton?: boolean }) => ({
  background: isCloseButton
    ? theme.palette.error.main
    : "linear-gradient(45deg, #6a11cb, #2575fc)",
  borderRadius: "30px",
  padding: "12px 24px",
  fontSize: "16px",
  fontWeight: "600",
  color: "#fff",
  textTransform: "none",
  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease-in-out",
  width: 350,
  alignSelf: "center",
  "&:hover": {
    background: isCloseButton
      ? theme.palette.error.dark
      : "linear-gradient(45deg, #2575fc, #6a11cb)",
    boxShadow: "0 6px 30px rgba(0, 0, 0, 0.15)",
    transform: "scale(1.05)",
  },
  "&:active": {
    transform: "scale(0.98)",
  },
  "&:focus": {
    outline: "none",
  },
}));
