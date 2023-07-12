import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import { Container, Typography } from "@mui/material";
import TsvTable from "../components/TsvTable";

export default function Editor() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="bg-[#EBEBEB] flex flex-col md:flex-row">
      <Header />
      <Container maxWidth={"lg"} className="px-5 py-10 space-y-2 w-full ">
        <Typography
          variant="h3"
          style={{ fontWeight: "bold", marginBottom: 16 }}
        >
          {searchParams.get("owner") + " Shortages"}
        </Typography>

        <TsvTable />
      </Container>
    </div>
  );
}
