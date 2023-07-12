import Header from "../components/Header";
import {
  Container,
  Typography,
} from "@mui/material";
export default function Home() {
  return (
    <div className="bg-[#EBEBEB] flex flex-col md:flex-row">
      <Header />
      <Container maxWidth={"md"} className="px-5 py-10 space-y-2 w-full ">
        <div className="flex flex-col items-center justify-center border border-black h-full">
          <Typography
            variant="h3"
            style={{ fontWeight: "bold", marginBottom: 16 }}
          >
            C-130J Daily Shortage Updates
          </Typography>
          <div>
            
          </div>
        </div>
      </Container>
    </div>
  );
}
