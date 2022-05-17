import React from "react";
import MyPic from "../../images/my-pic.jpeg";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import "./styles.css";
import { Typography } from "@mui/material";

export default function About() {
    return (
        <div style={{ height : "90vh" }} id="about">
            <Divider sx={{"&::before, &::after": {borderColor: "red"}}}><h2>About</h2></Divider>
            <Box sx={{ display : "flex", flexDirection : "column", justifyContent : "center", alignItems : "center", height : "90vh" }}>
            <Box component={"div"} sx={{ display : "flex", flexDirection : "row", justifyContent : "center", alignItems : "center", paddingX : "3rem", width : "90%", height: "90%" }} className="about">
                    <Box sx={{flex : 1}}>
                        <Typography variant={"subtitle1"} sx={{ width : "55rem", fontSize: "18px" }}>I am a student studying BSc Computer Science at University of Pecs in Hungary on Stipendium Hungaricam Scholarship. I want to become a full stack developer and make cool websites. I am currently 21 years old looking for Internships so I can complete my Bachelors degree.</Typography>
                        <Box sx={{ display : "flex", flexDirection : "row", justifyContent : "space-between", alignItems : "center", flexWrap : "wrap", width : "30rem", marginY : "1rem"}}>
                            <Button sx={{pointerEvents: "none"}} color="error" variant="contained">ReactJS</Button>
                            <Button sx={{pointerEvents: "none"}} color="error" variant="contained">AngularJS</Button>
                            <Button sx={{pointerEvents: "none"}} color="error" variant="contained">TypeScript</Button>
                            <Button sx={{pointerEvents: "none"}} color="error" variant="contained">Material UI</Button>
                            <Button sx={{marginTop : "10px", pointerEvents: "none"}} color="error" variant="contained">HTML5/CSS</Button>
                            <Button sx={{marginTop : "10px", pointerEvents: "none"}} color="error" variant="contained">JavaScript</Button>
                            <Button sx={{marginTop : "10px", pointerEvents: "none"}} color="error" variant="contained">C#</Button>
                            <Button sx={{marginTop : "10px", pointerEvents: "none"}} color="error" variant="contained">Python</Button>
                            <Button sx={{marginTop : "10px"}} color="error" variant="contained">Java</Button>
                        </Box>
                    </Box>
                    <Box>
                        <img style={{ borderRadius : "50%" }} src={MyPic} alt="my pic" width="300" height="300"></img>
                    </Box>
                </Box>
           </Box>
        </div>
    )
}