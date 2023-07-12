import {
    Container,
    Typography,
    Select,
    MenuItem,
    FormControl,
    FormHelperText,
    Button,
  } from "@mui/material";
  import Header from "../components/Header";
  import { useState } from "react";
  import { useNavigate } from "react-router-dom";
  
  export default function EditSelection() {
    const [value, setValue] = useState("");
    const navigate = useNavigate();
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    const handleConfirm = () => {
      navigate(`/editor?owner=${value}`);
    };
  
    return (
      <div className="bg-[#EBEBEB] flex flex-col md:flex-row">
        <Header />
        <Container maxWidth={"md"} className="px-5 py-10 space-y-2 w-full ">
          <div className="flex flex-col items-center justify-center border border-black h-full space-y-3">
            <Typography
              variant="h3"
              style={{ fontWeight: "bold", marginBottom: 16 }}
            >
              Shortage Selection Screen
            </Typography>
            <FormControl className="w-[300px]">
              <FormHelperText>Owner</FormHelperText>
  
              <Select
                value={value}
                onChange={handleChange}
                variant="outlined"
                displayEmpty
              >
                <MenuItem value="" disabled>
                  Please Select Owner
                </MenuItem>
                <MenuItem value={"AFF"}>AFF</MenuItem>
                <MenuItem value={"SCM"}>SCM</MenuItem>
                <MenuItem value={"FAB"}>FAB</MenuItem>
              </Select>
            </FormControl>
            <Button variant='contained' disabled={!value} onClick={handleConfirm}>Confirm Selection</Button>
          </div>
        </Container>
      </div>
    );
  }
  