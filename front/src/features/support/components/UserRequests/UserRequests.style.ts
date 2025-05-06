import { Box, Card, Chip, styled, Typography } from "@mui/material";

export const UserRequestDetailsRootStyle = styled(Box)({
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  paddingTop: "2rem",
  paddingBottom: "2rem",
  overflowY: "auto",
  position: "relative",
});

export const UserRequestDetailsCardStyle = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: theme.shape.borderRadius * 2,
  padding: theme.spacing(2),
  background: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  position: "relative",
  overflow: "hidden",
  width: 350,
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    height: "4px",
    width: "100%",
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  },

  "&:hover": {
    boxShadow: theme.shadows[6],
    transform: "translateY(-6px) scale(1.02)",
  },
}));

export const StyledStatusChip = styled(Chip)({
  marginTop: 8,
  fontWeight: "bold",
  textTransform: "capitalize",
  letterSpacing: 0.3,
  padding: 1,
});

export const StyledCategorySubtitle = styled(Typography)({
  marginBottom: 8,
  display: "flex",
  gap: 8,
  alignItems: "center",
});

export const StyledDescriptionSubtitle = styled(Typography)({
  marginBottom: 8,
  fontStyle: "italic",
  maxWidth: "50%",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});
