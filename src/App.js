import React from "react";
import "./App.css";
import Footer from "./components/Parts/Footer";
import Header from "./components/Parts/Header";
import Beranda from "./components/Layout/Beranda";
import Artikel from "./components/Layout/Artikel";
import Donasi from "./components/Layout/Donasi";
import Lokasi from "./components/Layout/Lokasi";
import Monitoring from "./components/Layout/Monitoring";

function App() {
  return (
    <div className="App">
      <Header />
      <Beranda />
      <Lokasi />
      <Monitoring />
      <Artikel />
      <Donasi />
      <Footer />
    </div>
  );
}

export default App;
