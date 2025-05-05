"use client";

import React from "react";
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
import { useGetAllRequestsQuery } from "../../api/support.api";
import RequestAction from "./ListingActions/ListingActions";
import { TableContainerStyle } from "./ListingSupportRequest.style";
import { getStatusColor } from "./ListingSupportRequests.helpers";

function ListingSupportRequests() {
  const { data: requests, isLoading } = useGetAllRequestsQuery();
  const theme = useTheme();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="flex-start"
      minHeight="100vh"
      bgcolor={theme.palette.grey[100]}
      py={6}
      px={2}
    >
      <Box width="100%" maxWidth="80%">
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
                  {[
                    "Titre",
                    "Catégorie",
                    "Urgence",
                    "Statut",
                    "Commentaire",
                    "Actions",
                  ].map((head) => (
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
                  ))}
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
                          index % 2 === 0 ? theme.palette.grey[50] : "inherit",
                        transition: "background-color 0.2s",
                      }}
                    >
                      <TableCell sx={{ minWidth: 300 }}>{req.title}</TableCell>
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
                      <TableCell
                        sx={{ minWidth: 300 }}
                        title={req.adminComment || "-"}
                      >
                        <Typography variant="body2" noWrap>
                          {req.adminComment || "-"}
                        </Typography>
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
  );
}

export default ListingSupportRequests;
