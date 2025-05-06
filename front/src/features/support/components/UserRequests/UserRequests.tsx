"use client";
import { Grid, CardContent, Typography, Tooltip } from "@mui/material";
import { useState } from "react";
import { SupportRequest } from "@/types/support";
import { useGetAllRequestsQuery } from "../../api/support.api";
import { getStatusColor } from "../ListingSupportRequests/ListingSupportRequests.helpers";
import NoRequestFound from "./NoRequestFound";
import UserRequestDetails from "./UserRequestDetails/UserRequestDetails";
import {
  StyledCategorySubtitle,
  StyledDescriptionSubtitle,
  StyledStatusChip,
  UserRequestDetailsCardStyle,
  UserRequestDetailsRootStyle,
} from "./UserRequests.style";
import SubmitButton from "@/components/SubmitButton/SubmitButton";
import { useRouter } from "next/navigation";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

const UserRequestCards = () => {
  const router = useRouter();
  const {
    data: requests = [],
    isLoading,
    isFetching,
  } = useGetAllRequestsQuery({ search: "" });

  const [selectedRequest, setSelectedRequest] = useState<SupportRequest | null>(
    null
  );

  return (
    <UserRequestDetailsRootStyle>
      {isLoading || isFetching ? null : requests.length === 0 ? (
        <NoRequestFound />
      ) : (
        <>
          <Grid
            container
            spacing={4}
            sx={{
              alignSelf: "center",
              paddingInline: 15,
            }}
          >
            <SectionTitle
              sxProps={{ width: "100%", textAlign: "left" }}
              text="Mes demandes"
            />
            {requests.map((req) => (
              <Grid
                sx={{ maxHeight: 250, maxWidth: 400, marginBlock: 1 }}
                item
                xs={12}
                sm={6}
                md={4}
                key={req.id}
              >
                <UserRequestDetailsCardStyle>
                  <CardContent>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        color: "text.primary",
                        lineHeight: 1.4,
                        mb: 1,
                      }}
                    >
                      {req.title}
                    </Typography>

                    <Tooltip title={req.description} arrow>
                      <StyledDescriptionSubtitle
                        variant="body2"
                        color="text.secondary"
                        noWrap
                      >
                        {req.description}
                      </StyledDescriptionSubtitle>
                    </Tooltip>

                    <StyledCategorySubtitle
                      variant="body2"
                      color="text.secondary"
                    >
                      <strong style={{ color: "#555" }}>Category:</strong>
                      {req.category}
                    </StyledCategorySubtitle>

                    <StyledStatusChip
                      label={req.status}
                      color={getStatusColor(req.status)}
                      size="small"
                    />
                  </CardContent>

                  <SubmitButton
                    text="Afficher les détails"
                    onClick={() => setSelectedRequest(req)}
                    sxProps={{ mt: 2, mb: 1, width: "80%" }}
                  />
                </UserRequestDetailsCardStyle>
              </Grid>
            ))}
          </Grid>
        </>
      )}
      <UserRequestDetails
        selectedRequest={selectedRequest}
        setSelectedRequest={setSelectedRequest}
      />
      {requests.length ? (
        <SubmitButton
          text="Ajouter votre demande"
          onClick={() => router.push("/add-support-request")}
          sxProps={{ position: "absolute", top: 35, right: 35 }}
        />
      ) : null}
    </UserRequestDetailsRootStyle>
  );
};

export default UserRequestCards;
