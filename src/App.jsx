import { useState } from "react";
import TourCard from "./components/TourCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PrimarySearchAppBar from "./components/AppBar";
import cities from "./data.json";
import Tour from "./pages/Tour";
import Home from "./pages/Home";
import {Route,Routes,BrowserRouter} from "react-router-dom";
function App() {
  return (
  <BrowserRouter>
  
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/:id" element={<Tour/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
