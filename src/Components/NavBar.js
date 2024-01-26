import React from 'react'
import { AppBar, Container, Toolbar, Typography, Select, MenuItem, makeStyles, createTheme, ThemeProvider} from '@material-ui/core'
import {useNavigate} from 'react-router-dom'
import { CryptoState } from '../CryptoContext';

function NavBar() {

    const history= useNavigate();
    const{currency, setcurrency } = CryptoState();

    const useStyles= makeStyles(()=>({
        title:{
            flex:1,
            color:"gold",
            fontFamily: "Montserrat",
            fontWeight:"bold",
            cursor: "pointer",
        }
    }));

    const tx=useStyles();

    const darktheme=createTheme({
        palette:{
            primary:{
                main:"#fff"
            },
            type:"dark",
        }
    })
  return (
    <ThemeProvider  theme={darktheme}>
      <AppBar color='transparent' position='static'>
        <Container>
            <Toolbar>
                <Typography onClick={()=>history("/")} className={tx.title}>Crypto Quester</Typography>
            
            <Select variant='outlined' style={{width:100, height: 40 , marginRight:15, }} value={currency} onChange={(e)=>{setcurrency(e.target.value)}}>
                <MenuItem value={"INR"} default>INR</MenuItem>
                <MenuItem value={"USD"}>USD</MenuItem>
            </Select>
            </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  )
}

export default NavBar
