import React from "react";
import { Drawer, Box, Typography, Divider, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import WorkIcon from "@mui/icons-material/Work";
import CloseIcon from "@mui/icons-material/Close";

export default function Sidebar({ open, toggleDrawer }) {
  const menuItems = [
    { 
      name: "Work", 
      path: "/", 
      icon: <WorkIcon />,
      description: "My latest journalism pieces"
    },
    { 
      name: "About", 
      path: "/about", 
      icon: <PersonIcon />,
      description: "Learn more about me"
    },
    { 
      name: "Contact", 
      path: "/contact", 
      icon: <ContactMailIcon />,
      description: "Get in touch"
    }
  ];

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={toggleDrawer(false)}
      transitionDuration={600}
      slotProps={{
        paper: {
          sx: {
            top: "100px",
            height: "calc(100% - 100px)",
            width: 320, // Slightly wider for better spacing
            background: "linear-gradient(135deg, #fdfaf5 0%, #f8f4eb 100%)", // Subtle gradient
            borderLeft: "1px solid #e0d4c3",
            boxShadow: "-4px 0 20px rgba(0,0,0,0.1)", // Elegant shadow
          },
        },
        backdrop: {
          sx: {
            backgroundColor: "rgba(0,0,0,0.3)", // Softer backdrop
            backdropFilter: "blur(2px)", // Modern blur effect
          }
        }
      }}
    >
      <Box sx={{ 
        width: "100%", 
        height: "100%",
        display: "flex",
        flexDirection: "column"
      }}>
        {/* Header Section */}
        {/* <Box sx={{ 
          p: 3, 
          borderBottom: "1px solid #e0d4c3",
          position: "relative"
        }}> */}
          {/* Close button
          <IconButton
            onClick={toggleDrawer(false)}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              color: "#666",
              "&:hover": { 
                backgroundColor: "rgba(0,0,0,0.05)",
                color: "#333"
              }
            }}
          >
            <CloseIcon />
          </IconButton>
          
          <Typography 
            variant="h5" 
            sx={{ 
              fontFamily: "Baskervville, serif",
              fontWeight: 400,
              color: "#2c2c2c",
              mb: 1
            }}
          >
            Navigation
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: "#666",
              fontStyle: "italic"
            }}
          >
            Explore my work and story
          </Typography> */}
        {/* </Box> */}

        {/* Navigation Links */}
        <Box sx={{ 
          flex: 1, 
          py: 2,
          display: "flex",
          flexDirection: "column"
        }}>
          {menuItems.map((item, index) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={toggleDrawer(false)}
              style={{ textDecoration: "none" }}
            >
              <Box sx={{
                display: "flex",
                alignItems: "center",
                px: 3,
                py: 2.5,
                mx: 2,
                mb: 1,
                borderRadius: "12px",
                transition: "all 0.3s ease",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.06)",
                  transform: "translateX(-4px)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                }
              }}>
                {/* Icon */}
                <Box sx={{
                  color: "#5d5d5d",
                  mr: 2,
                  display: "flex",
                  alignItems: "center"
                }}>
                  {item.icon}
                </Box>
                
                {/* Text Content */}
                <Box sx={{ flex: 1 }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: "#2c2c2c",
                      fontWeight: 500,
                      mb: 0.5,
                      fontSize: "1.1rem"
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: "#777",
                      fontSize: "0.85rem"
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            </Link>
          ))}
        </Box>

        {/* Footer Section */}
        <Box sx={{ 
          p: 3, 
          borderTop: "1px solid #e0d4c3",
          backgroundColor: "rgba(255,255,255,0.3)"
        }}>
          <Typography 
            variant="body2" 
            sx={{ 
              color: "#888",
              textAlign: "center",
              fontStyle: "italic",
              lineHeight: 1.4
            }}
          >
            "Every story has the power to change perspectives"
          </Typography>
          <Typography 
            variant="caption" 
            sx={{ 
              color: "#999",
              textAlign: "center",
              display: "block",
              mt: 1
            }}
          >
            — Rhi Storer
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
}