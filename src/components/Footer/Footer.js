/* eslint-disable jsx-a11y/anchor-has-content */
import Box from "@mui/material/Box";
import React from "react";
import Divider from "@mui/material/Divider";
import { Link, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return ( 
        <Box>
            <Divider></Divider>
            <Box component={"div"} sx={{display : "flex", flexDireciton : "row", justifyContent : "space-between", alignItems : "center", height : "10rem", paddingX : "2rem"}}>
                <Box><Typography variant={"h5"}>© 2022 Subhan, Inc</Typography></Box>
                <Box sx={{ display : "flex", justifyContent : "space-between", alignItems: "center", width : "15rem" }}>
                    <Link sx={{color: "white"}} href="https://github.com/ssobii2" target="_blank" rel="noreferrer"><GitHubIcon fontSize={"large"} /></Link>
                    <Link sx={{color: "white"}} href="https://www.linkedin.com/in/muhammad-subhan-imran-642260228/" target="_blank" rel="noreferrer"><LinkedInIcon fontSize={"large"} /></Link>
                    <Link sx={{color: "white"}} href="https://www.facebook.com/ssobii2/" target="_blank" rel="noreferrer"><FacebookIcon fontSize={"large"}/></Link>
                    <Link sx={{color: "white"}} href="https://www.instagram.com/thunder_jaw/?hl=en" target="_blank" rel="noreferrer"><InstagramIcon fontSize={"large"}/></Link>
                </Box>
            </Box>
        </Box>
     );
}
 
export default Footer;