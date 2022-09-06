import React from "react";
import Header from "./components/header/header";
import Intro from "./components/intro/intro";
import Downloads from "./components/download/Downloads";
import Snappoption from "./components/snappoption/snappoption";
import Snappfood from "./components/snappfood/snappfood";
import Snappinfo from "./components/snappinfo/snappinfo";
import Loginsnapp from "./components/loginsnapp/loginsnapp";
import Khadamat from "./components/khadamat/khadamat";
import Footer from "./components/footer/footer";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Intro />
      <Downloads />
      <Snappoption />
      <Snappfood />
      <Snappinfo />
      <Loginsnapp />
      <Khadamat />
      <Footer />
    </div>
  );
}

export default App;
