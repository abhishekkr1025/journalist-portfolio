import React, { useState } from "react";
import {
    Box,
    Typography,
    TextField,
    InputAdornment,
    Grid,
    FormControl,
    Select,
    MenuItem,
    Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ArticleCard from "./ArticleCard";
import articles from "../data/articles";

export default function WorkFilterSection() {
    const [filter, setFilter] = useState("featured");
    const [publication, setPublication] = useState("all");
    const [search, setSearch] = useState("");

    // Filtered articles
    const filteredArticles = articles.filter((a) => {
        const matchesSearch = a.title.toLowerCase().includes(search.toLowerCase());
        const matchesPublication =
            publication === "all" ||
            a.publication.toLowerCase() === publication.toLowerCase();
        return matchesSearch && matchesPublication;
    });

    return (
        <Box sx={{ 
            width: "100%",
            py: 6, 
            backgroundColor: "#fffaf5",
            margin: 0,
            padding: 0,
            boxSizing: "border-box"
        }}>
            {/* Container for all content with reduced margins */}
            <Box sx={{
                maxWidth: "1400px", // Increased from 1200px for more width
                mx: "auto",
                px: { xs: 1, sm: 2, md: 3 }, // Reduced padding: mobile 8px, tablet 16px, desktop 24px
                width: "100%"
            }}>

                {/* Section Heading */}
                <Box textAlign="center" mb={5}>
                    <Typography
                        variant="h3"
                        gutterBottom
                        sx={{
                            fontFamily: "Baskervville, serif",
                            fontWeight: 400,
                            mb: 2,
                        }}
                    >
                        My Latest Journalism Work
                    </Typography>
                    <Divider
                        sx={{
                            width: 80,
                            height: 3,
                            backgroundColor: "black",
                            mx: "auto",
                            borderRadius: 2,
                        }}
                    />
                </Box>

                {/* Filters Row - Better responsive alignment */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", lg: "row" }, // Stack on mobile/tablet, row on large screens
                        justifyContent: { lg: "space-between" },
                        alignItems: { xs: "stretch", lg: "center" }, // Full width on mobile, center on desktop
                        gap: { xs: 2, lg: 3 },
                        mb: 5,
                        width: "100%",
                    }}
                >
                    {/* Search */}
                    <TextField
                        variant="outlined"
                        placeholder="Search by article name..."
                        size="small"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        sx={{
                            flex: { lg: 1 }, // Take equal space on large screens
                            minWidth: { xs: "100%", lg: "400px" }, // Increased width
                            maxWidth: { lg: "500px" }, // Limit max width on large screens
                            backgroundColor: "white",
                            "& .MuiOutlinedInput-root": {
                                border: "1px solid #eee",
                            }
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon color="action" />
                                </InputAdornment>
                            ),
                        }}
                    />

                    {/* Sort */}
                    <FormControl 
                        size="small" 
                        sx={{ 
                            flex: { lg: 1 },
                            minWidth: { xs: "100%", lg: "400px" }, // Increased width
                            maxWidth: { lg: "500px" } // Increased max width
                        }}
                    >
                        <Select
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            displayEmpty
                            sx={{
                                backgroundColor: "white",
                                "& .MuiOutlinedInput-root": {
                                    border: "1px solid #eee",
                                }
                            }}
                        >
                            <MenuItem value="featured">
                                <FilterListIcon fontSize="small" sx={{ mr: 1 }} /> Featured
                            </MenuItem>
                            <MenuItem value="latest">
                                <FilterListIcon fontSize="small" sx={{ mr: 1 }} /> Latest
                            </MenuItem>
                            <MenuItem value="oldest">
                                <FilterListIcon fontSize="small" sx={{ mr: 1 }} /> Oldest
                            </MenuItem>
                        </Select>
                    </FormControl>

                    {/* Publications Dropdown */}
                    <FormControl 
                        size="small" 
                        sx={{ 
                            flex: { lg: 1 },
                            minWidth: { xs: "100%", lg: "400px" }, // Increased width
                            maxWidth: { lg: "500px" } // Increased max width
                        }}
                    >
                        <Select
                            value={publication}
                            onChange={(e) => setPublication(e.target.value)}
                            displayEmpty
                            sx={{
                                backgroundColor: "white",
                                "& .MuiOutlinedInput-root": {
                                    border: "1px solid #eee",
                                }
                            }}
                        >
                            <MenuItem value="all">
                                <ViewModuleIcon fontSize="small" sx={{ mr: 1 }} /> All Publications
                            </MenuItem>
                            <MenuItem value="the guardian">
                                <ViewModuleIcon fontSize="small" sx={{ mr: 1 }} /> The Guardian
                            </MenuItem>
                            <MenuItem value="bbc">
                                <ViewModuleIcon fontSize="small" sx={{ mr: 1 }} /> BBC
                            </MenuItem>
                            <MenuItem value="schools week">
                                <ViewModuleIcon fontSize="small" sx={{ mr: 1 }} /> Schools Week
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                {/* Articles Grid */}
                <Grid container spacing={3} sx={{ width: "100%" }}>
                    {filteredArticles.map((article) => (
                        <Grid item xs={12} sm={6} md={4} key={article.id}>
                            <ArticleCard {...article} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}