import React from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from "@mui/material/Button";

const Contact = () => {
    return ( 
        <div style={{height : "90vh"}} id="contact">
        <Divider sx={{"&::before, &::after": {borderColor: "red"}}}><h2>Contact</h2></Divider>
        <Box component={"div"} className="contact" sx={{ display : "flex", flexDirection : "column", justifyContent : "center", alignItems : "center" }}>
            <Box sx={{ width : "50rem" }}>
                <TextField id="standard-basic" sx={{ marginY : "2rem" }} label="Full Name" fullWidth variant="standard" />
                <TextField id="standard-basic" sx={{ marginY : "2rem" }} label="Email" fullWidth variant="standard" />
                <TextField id="standard-basic" sx={{ marginY : "2rem" }} label="Message" fullWidth variant="standard" />
                <Button color="error" variant={"contained"} sx={{ marginY : "2rem" }}>Send Message</Button>
            </Box>
        </Box>
        </div>
     );
}
 
export default Contact;