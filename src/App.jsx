
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Home } from "@/pages/Home";
import { Services } from "@/pages/Services";
import { Portfolio } from "@/pages/Portfolio";
import { Blog } from "@/pages/Blog";
import { Contact } from "@/pages/Contact";
import { Login } from "@/pages/Login";
import { Dashboard } from "@/pages/admin/Dashboard";
import { Toaster } from "@/components/ui/toaster";
import { Chatbot } from "@/components/Chatbot";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/portafolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Dashboard />} />
        </Routes>
        <Footer />
        <Chatbot />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
