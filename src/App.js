import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import CoinPage from './Pages/CoinPage';
import { makeStyles } from '@material-ui/core';

function App() {
  const useStyles=makeStyles(()=>({
    App:{
      backgroundColor:"#14161a",
      color:"White",
      minHeight:"100vh",
    }
  }));

  const classes=useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
      <NavBar></NavBar>
      <Routes>
      <Route path='/' Component={HomePage}></Route>
      <Route path='/coin/:id' Component={CoinPage}></Route>
      </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
