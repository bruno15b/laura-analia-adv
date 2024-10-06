import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";


const App = () => {

  return <>
  <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/contato" element={<ContactPage/>}/>
    <Route path="*" element={<NotFoundPage />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  </>
}

export default App;
