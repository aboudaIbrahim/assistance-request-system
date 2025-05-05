"use client";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter"; // example
import { ReactNode } from "react";
import theme from "./theme";

type Props = {
  children: ReactNode;
};

export default function ClientAppProvider({ children }: Props) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppRouterCacheProvider>
  );
}
