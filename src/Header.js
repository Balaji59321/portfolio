import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import header from "./header.jpeg";
import { ReactComponent as Bubble } from './bubble.svg';
import './App.css';

const Header = () => {
  return (
    <Box sx={{"height": "850px",position : "relative",width: "100%"}}>
    <Box sx={{backgroundColor: "black","height": "inherit",backgroundImage: `url(${header})`,backgroundRepeat: "no-repeat",backgroundSize: "cover",width: "100%",filter: "blur(5px)"}}></Box>
    <Box sx={{width: {xs: "300px",md:"600px"}}}>
    <Bubble className='image_rotate' style={{width: "inherit"}} />
    </Box>
    <Box sx={{color: "#fff",textAlign:"center",position: "absolute",top: "50%",left: "50%",transform:'translate(-50%,-50%)'}} px={{xs: 2,md:5}} py={3}>
      <Typography variant='h5' sx={{fontWeight: 500}}>Hey! My Name is Balaji Narasimhan</Typography>
      <Typography variant='h3' sx={{fontWeight: "bolder",fontSize: {xs: "35px",md: "50px"}}}>I am a Full Stack Developer</Typography>
      <Box sx={{display: "flex",justifyContent: "center",gap: 5}} m={3}>
        <a href='#projects' style={{textDecoration:"none"}} rel="noopener noreferrer"><Button variant='contained' className='btn'>Projects</Button></a>
        <a href='https://drive.google.com/file/d/1riWKS5CTyE0nJv32OZW51mfd_o_ebu9O/view?usp=share_link' target='__blank' rel="noopener noreferrer" style={{textDecoration: "none"}}><Button variant='contained' className='btn'>Resume</Button></a>
      </Box>
    </Box>
    </Box>
  )
}

export default Header
