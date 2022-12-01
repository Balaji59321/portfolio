import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import header from "./header.jpeg";
import { ReactComponent as Bubble } from './bubble.svg';
import './App.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Header = () => {
  return (
    <Box sx={{"height": "850px",position : "relative",width: "100%"}}>
    <Box sx={{backgroundColor: "black","height": "inherit",backgroundImage: `url(${header})`,backgroundRepeat: "no-repeat",backgroundSize: "cover",width: "100%",filter: "blur(5px)"}}></Box>
    <Box sx={{width: {xs: "300px",md:"600px"}}}>
    <Bubble className='image_rotate' style={{width: "inherit"}} />
    </Box>
    <Box sx={{color: "#fff",textAlign:"center",position: "absolute",top: "50%",left: "50%",transform:'translate(-50%,-50%)'}} px={{xs: 2,md:5}} py={3}>
      <Typography variant='h5' sx={{fontWeight: 700,fontSize: {xs: "20px",md: "30px"}}}>Hi 👋, I am Balaji Narasimhan M V L</Typography>
      <Typography variant='h3' sx={{fontWeight: "bolder",fontSize: {xs: "30px",md: "50px"}}}>A Passionate Full Stack Developer</Typography>
      <Box sx={{display: "flex",justifyContent: "center",gap: 5}} m={3}>
        <a href='#projects' style={{textDecoration:"none"}} rel="noopener noreferrer"><Button variant='contained' className='btn'>Projects</Button></a>
        <a href='https://drive.google.com/file/d/1rITYS73Z1xKKdpnIIvXGrUMS3DDblpa8/view?usp=sharing' target='__blank' rel="noopener noreferrer" style={{textDecoration: "none"}}><Button variant='contained' className='btn'>Resume</Button></a>
      </Box>
      <Box sx={{display: "flex",justifyContent: "center",gap: "10px",cursor: "pointer"}}>
          <a href='https://www.linkedin.com/in/balaji-narasimhan-m-v-l-138aa4144/' target='__blank' rel="noopener noreferrer" style={{textDecoration: "none",color:"white"}}><GitHubIcon fontSize='large'/></a>
          <a href='https://github.com/Balaji59321/' target='__blank' rel="noopener noreferrer" style={{textDecoration: "none",color:"white"}}><LinkedInIcon fontSize='large' /></a>
      </Box>
    </Box>
    </Box>
  )
}

export default Header
