import { MenuItem, styled } from "@mui/material";

export const MenuItemStyle = styled(MenuItem)({
  px: 2,
  py: 1.5,
  borderRadius: 1,
  typography: "body2",
  fontWeight: 500,
  color: "text.primary",
  "&.Mui-selected": {
    backgroundColor: "primary.50",
    fontWeight: 600,
  },
  "&.Mui-selected:hover": {
    backgroundColor: "primary.100",
  },
  "&:hover": {
    backgroundColor: "grey.100",
  },
});
