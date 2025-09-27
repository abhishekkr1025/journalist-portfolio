import React from "react";
import { Box, Typography } from "@mui/material";
import About from "../components/About";
import WorkFilterSection from "../components/WorkFilterSection"


export default function Home() {
    return (
        <div>
            <Box sx={{ marginTop: 4, paddingX: 2 }}>
              <About /> 
              <WorkFilterSection />
            </Box>
        </div>
    );
}
