import React from "react";
import Footer from "./components/Parts/Footer";
import Header from "./components/Parts/Header";
import Beranda from "./components/Layout/Beranda";
import Artikel from "./components/Layout/Artikel";
import Donasi from "./components/Layout/Donasi";
import Lokasi from "./components/Layout/Lokasi";
import Monitoring from "./components/Layout/Monitoring";
import Box from '@mui/material/Box';
import {useLocation} from 'react-router-dom'
import Layout from './components/Dashboard/Layout/Layout'
import Login from './components/Dashboard/Login/Login'


const App = () => {
  const location = useLocation();
  const toAdmin = location.pathname.includes('/dashboard');
  const toLogin = location.pathname.includes('/login');

  let content = '';

  if(toAdmin){
    content = (<Layout/>)
  } else if(toLogin){
    content = (<Login/>);
  } 
  

  return (
    <Box>
      {/* {content} */}
      <React.Fragment>
        <Header/>
        <Beranda/>
        <Lokasi/>
        <Monitoring/>
        {/* <Artikel/> */}
        <Donasi/>
        <Footer/>
      </React.Fragment>
      {/* <Layout/> */}
    </Box>
  );
}

export default App;
