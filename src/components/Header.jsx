import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CloseIcon from "@mui/icons-material/Close";

export default function Header({ toggleDrawer,sidebarOpen }) {
  return (
    <AppBar
      position="sticky"
      elevation={0}
     sx={{
        top: 0,
        zIndex: 1201,
        backgroundColor: "#fdfaf5",
        color: "black",
        borderBottom: "1px solid #ccc",
        height: "100px",
        width: "100vw", // Use viewport width
        left: 0,
        right: 0,
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      }}
    >
      <Toolbar 
        disableGutters
        sx={{
          px: 2,
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: "100px !important",
          width: "100%",
          maxWidth: "none", // Remove max width constraint
          margin: 0,
          boxSizing: "border-box",
        }}
      >
        {/* Left icons */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            href="https://twitter.com"
            target="_blank"
            sx={{
              backgroundColor: "black",
              color: "white",
              mr: 1,
              "&:hover": { backgroundColor: "#333" },
            }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            href="https://linkedin.com"
            target="_blank"
            sx={{
              backgroundColor: "black",
              color: "white",
              "&:hover": { backgroundColor: "#333" },
            }}
          >
            <LinkedInIcon />
          </IconButton>
        </Box>

        {/* Centered Brand */}
        <Typography
          variant="h5"
          sx={{ 
            flexGrow: 1, 
            textAlign: "center", 
            fontFamily: "serif",
            fontSize: "32px",
            color: "#111111",
            mx: 2, // Add margin to prevent overlap
          }}
        >
          Rhi Storer
        </Typography>

        {/* Right Hamburger */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
         <IconButton 
            onClick={toggleDrawer(!sidebarOpen)}
            sx={{
              color: "black",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.04)" },
              transition: "all 0.5s ease", // Smooth transition
            }}
          >
            {sidebarOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Box>
      </Toolbar>  
    </AppBar>
  );
}