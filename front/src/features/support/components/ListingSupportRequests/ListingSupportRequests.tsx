"use client";

import {
  Box,
  Chip,
  CircularProgress,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import RequestAction from "./ListingActions/ListingActions";
import { TableContainerStyle } from "./ListingSupportRequest.style";
import { getStatusColor } from "./ListingSupportRequests.helpers";
import TextFieldInput from "@/components/Inputs/TextFieldInput/TextFIeldInput";
import { FormProvider, useForm } from "react-hook-form";
import { useListingSupportRequest } from "./useLIstingSupportRequest";

function ListingSupportRequests() {
  const formMethods = useForm({
    mode: "onChange",
    shouldFocusError: true,
  });
  const { requests, isLoading } = useListingSupportRequest(formMethods);
  const theme = useTheme();

  return (
    <FormProvider {...formMethods}>
      <Box
        display="flex"
        flexDirection={"column"}
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        bgcolor={theme.palette.grey[100]}
        px={2}
        py={4}
        position={"relative"}
      >
        <Box
          minWidth={"40%"}
          sx={{ display: "flex", alignSelf: "center", marginBottom: 2 }}
        >
          <TextFieldInput
            fieldName="search"
            placeholder="Rechercher une demande"
            label=""
          />
        </Box>

        <Box width="100%" maxWidth="80%" minHeight={"85vh"}>
          <SectionTitle
            text="Demandes d’assistance"
            sxProps={{
              mb: 6,
              fontSize: "2rem",
              textAlign: "left",
              fontWeight: 800,
            }}
          />

          <Paper elevation={3} sx={{ borderRadius: 3, overflow: "hidden" }}>
            <TableContainerStyle>
              <Table stickyHeader size="medium">
                <TableHead>
                  <TableRow sx={{ backgroundColor: theme.palette.grey[200] }}>
                    {["Titre", "Catégorie", "Urgence", "Statut", "Actions"].map(
                      (head) => (
                        <TableCell
                          key={head}
                          sx={{
                            fontWeight: 700,
                            textTransform: "uppercase",
                            fontSize: "0.75rem",
                            backgroundColor: theme.palette.grey[100],
                            color: theme.palette.text.secondary,
                          }}
                        >
                          {head}
                        </TableCell>
                      )
                    )}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {isLoading ? (
                    <TableRow>
                      <TableCell colSpan={6} align="center" sx={{ py: 4 }}>
                        <CircularProgress />
                      </TableCell>
                    </TableRow>
                  ) : requests?.length ? (
                    requests.map((req, index) => (
                      <TableRow
                        key={req.id}
                        hover
                        sx={{
                          backgroundColor:
                            index % 2 === 0
                              ? theme.palette.grey[50]
                              : "inherit",
                          transition: "background-color 0.2s",
                        }}
                      >
                        <TableCell sx={{ minWidth: 300 }}>
                          {req.title}
                        </TableCell>
                        <TableCell sx={{ minWidth: 150 }}>
                          {req.category}
                        </TableCell>
                        <TableCell sx={{ minWidth: 150 }}>
                          {req.urgency}
                        </TableCell>
                        <TableCell sx={{ minWidth: 200 }}>
                          <Chip
                            label={req.status}
                            color={getStatusColor(req.status)}
                            size="small"
                            sx={{ padding: 2 }}
                          />
                        </TableCell>
                        <TableCell align="center">
                          <Stack
                            direction="row"
                            spacing={1}
                            justifyContent="start"
                          >
                            <RequestAction request={req} />
                          </Stack>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={6} align="center" sx={{ py: 3 }}>
                        <Typography variant="body2" color="text.secondary">
                          Aucune demande trouvée.
                        </Typography>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainerStyle>
          </Paper>
        </Box>
      </Box>
    </FormProvider>
  );
}

export default ListingSupportRequests;
