import { styled, TableContainer } from "@mui/material";

export const TableContainerStyle = styled(TableContainer)({
  maxHeight: 700,
  overflow: "auto",
  "&::-webkit-scrollbar": {
    height: 8,
    width: 8,
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#bdbdbd",
    borderRadius: 4,
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "#9e9e9e",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "#f5f5f5",
    borderRadius: 4,
  },
  scrollbarWidth: "thin",
  scrollbarColor: "#bdbdbd #f5f5f5",
});
