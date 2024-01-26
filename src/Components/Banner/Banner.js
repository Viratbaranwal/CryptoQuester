import { Container, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import Carousel from './Carousel';



const useStyles=makeStyles(()=>({
    banner:{
        backgroundImage: "url(./bg.jpeg)"
    },
    bannerContent:{
        height: 400,
        display: "flex",
        flexDirection: "column",
        paddingTop:25,
        justifyContent:"space-around",
    },
    tagline:{
        display: "flex",
        height: "40%",
        flexDirection: "column",
        padding: 25,
        justifyContent:"center",
        textAlign:"center",
    }
}))


function Banner() {
    const classes=useStyles();
    
    

  return (
    <div className={classes.banner}> 
      <Container className={classes.bannerContent}>
      <div className={classes.tagline}>
        <Typography variant="h2" style={{fontWeight: "bold", marginBottom: 15, fontFamily: "Monserrat"}}>Crypto Quester</Typography>
        <Typography variant="subtitle2" style={{color: "darkgrey", textTransform:"capitalize" , fontFamily: "Monserrat"}}>Get all the info regarding your favourite CryptoCurrency</Typography>
      </div>
      <Carousel></Carousel>
      </Container>
    </div>
  )
}

export default Banner
