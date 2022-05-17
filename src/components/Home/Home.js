import React from "react";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import Homeimg from "../../images/homeimg.png";
import { Link } from "@mui/material";
import "./styles.css";

const Home = () => {
    return ( 
        <div className="home" style={{height : "90vh"}} id="home">
            <Box sx={{display : "flex", flexDirection : "row", justifyContent : "center", alignItems : "center", height: "100%", paddingBottom: "10px"}}>
                <Box sx={{display : "flex", flexDirection : "column", marginLeft: "3rem"}}>
                    <Typography sx={{color: "#bd3b22"}} variant="h3">Hi! there <div className="rotate">👋</div> I am</Typography>
                    <Typography className="animation" sx={{fontFamily: "sans-serif", fontWeight: "600"}} variant="h2">SUBHAN IMRAN</Typography>
                    <Typography sx={{color: "#2C394B", fontWeight: "400", paddingRight: "20px"}} variant="h2">I want to make awesome websites</Typography>
                    <Typography sx={{fontWeight: "normal"}} variant="h6">Want to become Full stack web developer. Based in PAKISTAN</Typography>
                    <Link href="#contact" underline="none">
                        <Button sx={{width: "25%", height: "3rem", marginTop: "10px"}} color="error" variant="outlined">Get in Touch</Button>
                    </Link>
                </Box>
                <Box>
                <img src={Homeimg} alt="home" width="500px" height="400px"></img>
                </Box>
            </Box>
        </div>
     );
}
 
export default Home;
