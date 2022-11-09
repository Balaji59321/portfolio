import { Typography } from '@mui/material'
import React from 'react'

const Heading = (props) => {
  return (
    <div className='heading'>
    <Typography variant='h4' sx={{fontWeight: "bold",paddingTop: "5px"}}>{props.title}</Typography>
    <Typography sx={{fontWeight: 500}}>{props.description}</Typography>
  </div>
  )
}

export default Heading