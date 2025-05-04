import { styled, TextField } from "@mui/material";

export const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),

  "& .MuiInputBase-root": {
    borderRadius: 8,
    padding: "10px 14px",
    backgroundColor: theme.palette.background.paper,
  },

  "& .MuiInputBase-multiline": {
    "& textarea": {
      scrollbarWidth: "thin",
      scrollbarColor: `${theme.palette.grey[400]} transparent`,
      "&::-webkit-scrollbar": {
        width: "6px",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: theme.palette.grey[400],
        borderRadius: "4px",
      },
      "&::-webkit-scrollbar-track": {
        backgroundColor: "transparent",
      },
    },
  },

  // Default label
  "& .MuiInputLabel-root": {
    top: 0,
    transform: "translate(0, -24px) scale(1)",
    color: "#6a11cb",
  },

  // Label when focused
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#6a11cb",
  },

  // Ensure shrink label stays styled
  "& .MuiInputLabel-shrink": {
    transform: "translate(0, -24px) scale(1)",
  },

  // Change border color on focus
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#6a11cb",
    },
  },
}));
