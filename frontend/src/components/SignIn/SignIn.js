import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function SignIn() {
  return (
    <>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src="../../../images/85b6ba83341340e8afe166eacf69934e.png"
      />
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <TextField id="filled-basic" label="Password" variant="outlined" />
      <Button variant="contained">SIGN IN</Button>
    </Box>
    </>
  )
}
