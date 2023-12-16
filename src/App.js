/*import React from 'react'
import Header from './components/Header'
import Transaction from './components/Transaction'
import Sidebar from './components/Sidebar'
class App extends React.Component{
	render(){
		return(<div className="name">
			<Header />
			<main>
				<Transaction />
			</main>
			<aside>
				<Sidebar />
			</aside>
		</div>)
	}
}
export default App*/
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { AiFillRedditCircle } from "react-icons/ai";
import logo from './Icons/red.jpg';
import { AppBar, Container, Toolbar, Box, Typography, Button} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//import { Margin } from '@mui/icons-material';
import { Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import {DialogActions} from '@mui/material';
import Stack from '@mui/material/Stack';
import {TextField} from '@mui/material';
import { TableFooter, Grid } from '@mui/material';

const theme = createTheme({
	//#163E6C, #D20A11, #EBE6D6.
  palette: {
    primary: {
      light: '#ebe6d6',
      main: '#163e6c',
      dark: '#d20a11',
      contrastText: '#ebe6d6',
    },
  },
	typography: {
    fontFamily: [
			'Regular',
    ],
		 fontSize: [
			20,
		],
		
		// menuButton: {
		// 	marginRight: spacing(1)
		// },
	},
});

function App (){

const [open, setOpen] = React.useState(false);
		const handleClickOpen = () => {
			setOpen(true);
		}
		const handleClose = () => {
			setOpen(false);
		}
		return(
			 <ThemeProvider theme={theme}>
			
			<AppBar position="fixed">
				<Container fixed>
					<Toolbar>
						<Box className="logo1">
							< img 
									src = {logo}
									height = "50"
									width="50"
									className="D-inline-block align-top"
									alt="Логотип"
								/>
				 	</Box>
					<Stack direction="row"	justifyContent="space-evenly"	alignItems="center"spacing={1}	>
						<Button edge = "start" variant="light" color="primary" aria-label="menu">
							<MenuIcon />
						</Button>
						<Typography>Электронная сервисная книжка "Мой Силант"</Typography>
						<Box >
							<Button color="primary" variant="dark" >+7-8352-12-09-29 </Button>
							<Button color="primary" variant="dark" >telegram</Button>
						</Box>
						<Box >
							<Button color="primary" variant="dark" onClick={handleClickOpen}>Авторизация</Button>

							<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-authorization">
								<DialogTitle id="form-dialog-authorization"> Авторизация</DialogTitle>
								<DialogContent>
									<DialogContentText color="primary" variant="dark">Авторизуйтесь для дальнейшего просмотра</DialogContentText>
									<TextField
										autoFocus
										margin="dense"
										id="name"
										label="Login"
										type="login"
										fullWidth
									/>
									<TextField
										autoFocus
										margin="dense"
										id="pass"
										label="Password"
										type="password"
										fullWidth
									/>
								</DialogContent>
								<DialogActions>
									<Button onClick={handleClose} color="primary">Выход</Button>
									<Button onClick={handleClose} color="primary">Авторизоваться</Button>
								</DialogActions>
							</Dialog>
						
						</Box>
					</Stack>
					</Toolbar>
				</Container>
			</AppBar>
			<main>
					<Container fixed>
						<div mt={6} />
						<Grid container>
							<Grid item md={6}>
								<div>
									<Typography variant = "h6" align='center'  >Мой силант 2022</Typography>
								</div>
							</Grid>
							
						</Grid>
						</Container>
			</main>
			<footer>
				<TableFooter color="secondary">
				<Typography variant = "h6" align='center'  >Мой силант 2022</Typography>
				+7-8352-12-09-29
				telegram
				</TableFooter>
			</footer>
			</ThemeProvider>
		)
}
export default App;