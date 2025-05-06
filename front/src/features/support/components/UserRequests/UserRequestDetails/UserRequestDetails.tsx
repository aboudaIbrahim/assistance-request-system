import {
  Box,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from "@mui/material";
import { UserRequestDetailsProps } from "./UserRequestDetails.type";
import { getStatusColor } from "../../ListingSupportRequests/ListingSupportRequests.helpers";
import SubmitButton from "@/components/SubmitButton/SubmitButton";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

function UserRequestDetails({
  selectedRequest,
  setSelectedRequest,
}: UserRequestDetailsProps) {
  return (
    <Dialog
      open={Boolean(selectedRequest)}
      onClose={() => setSelectedRequest(null)}
      fullWidth
      maxWidth="sm"
    >
      <SectionTitle text="Détails de la demande" sxProps={{ paddingTop: 2 }} />
      <DialogContent dividers sx={{ display: "grid", gap: 2 }}>
        <Typography>
          <strong>Title:</strong> {selectedRequest?.title}
        </Typography>
        <Typography>
          <strong>Description:</strong> {selectedRequest?.description}
        </Typography>
        <Typography>
          <strong>Category:</strong> {selectedRequest?.category}
        </Typography>
        <Box display="flex" alignItems="center" gap={1}>
          <Typography>
            <strong>Status:</strong>
          </Typography>
          <Chip
            label={selectedRequest?.status}
            color={getStatusColor(selectedRequest?.status ?? "")}
            size="small"
            sx={{ fontWeight: 500 }}
          />
        </Box>
        <Typography>
          <strong>Comment:</strong> {selectedRequest?.adminComment ?? "—"}
        </Typography>
      </DialogContent>
      <DialogActions>
        <SubmitButton
          onClick={() => setSelectedRequest(null)}
          text="Fermer"
          isCloseButton
          sxProps={{ width: "28%" }}
        />
      </DialogActions>
    </Dialog>
  );
}

export default UserRequestDetails;
