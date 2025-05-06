"use client";
import LoginForm from "@/features/auth/components/LoginForm";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const BackgroundContainer = styled(Box)({
  backgroundImage: `url(./homePageImage.jpg)`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
  },
});

export default function HomePage() {
  return (
    <BackgroundContainer>
      <LoginForm />
    </BackgroundContainer>
  );
}
