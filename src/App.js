import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Hero from "./components/Hero";
import About from "./pages/About";
import Artist from "./pages/Artist";
import Event from "./pages/Event";
import Foother from "./pages/Foother";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Merch from "./pages/Merch";
import Contact from "./pages/Contact";
import Contactcard from "./components/Contactcard";
import LoginSignin from "./pages/LoginSignin";
import Signin from "./components/Signin";
import Register from "./components/Register";



function App() {
  return (
    <>
      <Router>
        <Header />
        <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/event" element={<Event />} />
          <Route path="/artist" element={<Artist />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/contactcard" element={<Contactcard/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="loginsignin" element={<LoginSignin/>} />
        </Routes>
        </main>
        <Foother/>
      </Router>
    </>
  );
}

export default App;

