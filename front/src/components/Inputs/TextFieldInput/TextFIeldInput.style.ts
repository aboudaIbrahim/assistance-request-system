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
      maxHeight: "100px",
      overflowY: "auto",
      resize: "none",
      paddingRight: "6px",
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
    },
    scrollbarWidth: "thin",
    scrollbarColor: "#bdbdbd #f5f5f5",
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
