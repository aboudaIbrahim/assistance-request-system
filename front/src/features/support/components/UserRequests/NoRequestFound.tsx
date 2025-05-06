import SectionTitle from "@/components/SectionTitle/SectionTitle";
import SubmitButton from "@/components/SubmitButton/SubmitButton";
import { Stack } from "@mui/material";
import { useRouter } from "next/navigation";

function NoRequestFound() {
  const router = useRouter();
  return (
    <Stack
      spacing={6}
      textAlign="center"
      mt={8}
      sx={{
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SectionTitle text="Vous n'avez pas encore de demandes d'assistance." />
      <SubmitButton
        text="Ajouter votre demande"
        onClick={() => router.push("/add-support-request")}
      />
    </Stack>
  );
}

export default NoRequestFound;
