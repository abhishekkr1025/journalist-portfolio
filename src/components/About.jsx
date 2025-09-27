import React from "react";
import { Box, Typography, IconButton, Divider, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function About() {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate('/about');
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        // backgroundColor: "#faf8f5",
        px: { xs: 3, md: 8 },
        py: { xs: 6, md: 10 },
        maxWidth: { lg: "1400px" }
      }}
    >
      {/* Left: Profile Photo */}
      <Box
        component="img"
        src="/photo-jornalist.png"
        alt="Profile"
        sx={{
          width: { xs: 220, md: 320,lg:450 },
          height: { xs: 220, md: "auto",lg:450 },
          borderRadius: { xs: "50%", md: "12px" },
          objectFit: "cover",
          boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
          mr: { md: 6 },
          mb: { xs: 4, md: 0 },
          "&:hover": {
                
                transform: "translateY(-10px)",
               
              }
        }}
      />

      {/* Right: About text */}
      <Box sx={{ maxWidth: 600, textAlign: { xs: "center", md: "left" } }}>
        {/* Heading */}
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontFamily: "Baskervville, serif",
            fontWeight: 300,
            mb: 3,
          }}
        >
          About Me
        </Typography>

        {/* Divider for subtle separation */}
        <Divider
          sx={{
            width: 60,
            height: 3,
            bgcolor: "black",
            mb: 3,
            mx: { xs: "auto", md: 0 },
            borderRadius: 2,
          }}
        />

        {/* Text */}
        <Typography variant="body1" paragraph sx={{ color: "text.secondary" }}>
          Freelance journalist specialising in investigations, news, B2B
          publications, and data journalism.
        </Typography>

        <Typography paragraph sx={{ color: "text.secondary" }}>
          Previously, Senior Reporter at Schools Week, Local Democracy Reporter
          at Birmingham Mail and BBC, and Reporter at The Guardian.
        </Typography>

        <Typography paragraph sx={{ color: "text.secondary" }}>
          A recipient of the John Schofield Trust fellowship 2023 and winner of
          the Scott Trust bursary 2019.
        </Typography>

        <Typography paragraph sx={{ color: "text.secondary" }}>
          For work inquiries email: <b>rhistorerwrites@gmail.com</b>
        </Typography>

        

        {/* Social Icons */}
        <Box sx={{ mt: 3, textAlign: { xs: "center", md: "left" } }}>
          <IconButton
            href="https://twitter.com"
            target="_blank"
            sx={{
              backgroundColor: "black",
              color: "white",
              mr: 1,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#333",
                transform: "translateY(-3px)",
              },
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
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#333",
                transform: "translateY(-3px)",
              },
            }}
          >
            <LinkedInIcon />
          </IconButton>
        </Box>

        {/* View More Button */}
        <Box sx={{ mt: 2, mb: 3, textAlign: { xs: "center", md: "left" } }}>
          <Button
            onClick={handleViewMore}
            // endIcon={<ArrowForwardIcon />}
            sx={{
              // backgroundColor: "#2c2c2c",
              color: "black",
              px: 3,
              py: 1.2,
              borderRadius: 2,
              fontSize: "1rem",
              fontWeight: 500,
              textTransform: "none",
              fontFamily: "inherit",
              transition: "all 0.3s ease",
              border:"1px solid black",
              "&:hover": {
                backgroundColor: "#1a1a1a",
                transform: "translateY(-2px)",
                boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
                color:"white"
              }
            }}
          >
            View More
          </Button>
        </Box>


      </Box>
    </Box>
  );
}