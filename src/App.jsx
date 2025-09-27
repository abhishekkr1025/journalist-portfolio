// Updated App.jsx - Fix content area gaps
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Article from "./pages/ArticlePage";
import About from "./components/About";
import Header from "./components/Header";
import { Box, CssBaseline, Divider } from "@mui/material";

import Sidebar from "./components/Sidebar";
import ArticlePage from "./pages/ArticlePage";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

import AuthorProfile from "./pages/AuthorProfile";

export default function App() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => setOpen(state);
  
  return (
    <Router>
      <CssBaseline />
      <Box sx={{ 
        width: "100vw",
        minHeight: "100vh",
        overflow: "hidden",
        position: "relative",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        backgroundColor: "#fdfaf5" // Add background to entire app
      }}>
        {/* Pass both toggleDrawer AND the current open state */}
        <Header toggleDrawer={toggleDrawer} sidebarOpen={open} />
        <Divider sx={{ 
          borderColor: "#000", 
          margin: 0,
          width: "100%"
        }} />
         <Sidebar open={open} toggleDrawer={toggleDrawer} />
        
        {/* Main Content Area - Full Width */}
        <Box sx={{ 
          width: "100vw", // Use viewport width instead of 100%
          minHeight: "calc(100vh - 101px)", // Account for header + divider
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
          backgroundColor: "#fdfaf5",
          overflow: "hidden"
        }}> 
          {/* Inner content container */}
          <Box sx={{
            width: "100%",
            maxWidth: "1400px", // Optional: limit content width for readability
            margin: "0 auto", // Center the content
            padding: { xs: "16px", md: "32px 24px" }, // Responsive padding
            boxSizing: "border-box"
          }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/article/:id" element={<ArticlePage />} />
              <Route path="/about" element={<AuthorProfile />} />
              <Route path="/contact" element={<Contact/>}/>
            </Routes>
          </Box>
        </Box>
      </Box>
    </Router>
  );
}