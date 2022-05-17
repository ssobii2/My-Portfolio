import React from "react";
import Cards from "../Cards/Cards";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from "@mui/material/Grid";
import project1 from "../../images/project1.png";
import project2 from "../../images/project2.png";
import project3 from "../../images/project3.png";

const Projects = () => {
    return ( 
        <div style={{height : "90vh"}} id="projects">
        <Divider sx={{"&::before, &::after": {borderColor: "red"}}}><h2>Projects</h2></Divider>
        <Box component={"div"} sx={{ height : "90%",display : "flex", justifyContent : "center", alignItems : "center" }} className="projects">
            <Box sx={{display : "flex", flexDirection : "column",justifyContent : "center", alignItems : "center"}}>
                <Grid container spacing={6}>
                    <Grid item xs={12} md={6} lg={4}><Cards href="https://tenziesdicegame.vercel.app/" image={project1} text={"Tenzies Game"} description={"A simple dice game I made usin React by doing an awesome React course on Scrimba"}/></Grid>
                    <Grid item xs={12} md={6} lg={4}><Cards href="https://ninja-directory.vercel.app/" image={project2} text={"Ninja Directory"} description={"A simple directory app I made using Angular by doing an Angular course on Youtube"}/></Grid>
                    <Grid item xs={12} md={6} lg={4}><Cards href="https://meme-generator-test.vercel.app/" image={project3} text={"Meme Generator"} description={"A meme generator app I made in React by doing course on Scrimba"}/></Grid>
                </Grid>
            </Box>
        </Box>
        </div>
     );
}
 
export default Projects;