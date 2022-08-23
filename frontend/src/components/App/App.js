// Importing modules
import React, { useState, useRef, useEffect } from 'react'
import SignIn from '../SignIn/SignIn'
import './App.css';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { borderRadius } from '@mui/system';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#F39766",
    },
    secondary: {
      main: '#005B46',
    },
  },
});


function App() {

	return(
<Box
  display="flex"
  justifyContent="center"
  alignItems="center"
  minHeight="100vh"
  sx={{
	backgroundImage: 'url(https://source.unsplash.com/KT4dOfvtZSg)',
	backgroundRepeat: 'no-repeat',
	backgroundColor: (t) =>
	  t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
	backgroundSize: 'cover',
	backgroundPosition: 'center',
  }}
>
	<Box
	height="400px"
	width="400px"
	padding="32px"
	className='glass-box'
	sx = {{
		borderRadius: 4,
		display:"flex",
		flexDirection: "column",
		justifyContent: "space-around",
		alignItems: "center"
	}}
	>
		<Box
		component="img"
		sx={{
			height: 120,
			width: "auto",
		}}
		alt="The house from the offer."
		src={require("./Logo-modified.png")}
		/>
		<TextField id="outlined-basic" label="Email" variant="outlined"
		fullWidth
		/>
		<TextField id="filled-basic" label="Password" variant="outlined"
		fullWidth
		/>
		<Button variant="contained"
		fullWidth>
			SIGN IN
		</Button>
	</Box>
</Box>
	)
}

export default App;
