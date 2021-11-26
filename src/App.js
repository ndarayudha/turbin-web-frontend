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


const App = () => {
  const location = useLocation();
  const toAdmin = location.pathname.includes('/dashboard');

  return (
    <Box>
      {toAdmin ? <Layout/> : (<React.Fragment>
        <Header/>
        <Beranda/>
        <Lokasi/>
        <Monitoring/>
        <Artikel/>
        <Donasi/>
        <Footer/>
      </React.Fragment>)}
    </Box>
  );
}

export default App;
