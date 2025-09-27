import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Container } from "@mui/material";
import articles from "../data/articles";

export default function ArticlePage() {
    const { id } = useParams();
    const article = articles.find((a) => String(a.id) === id);
    console.log(article)

    if (!article) {
        return (
            <Container sx={{ py: 5 }}>
                <Typography variant="h5">Article not found</Typography>
            </Container>
        );
    }

    return (
        <Box sx={{ backgroundColor: "#fdfaf5", minHeight: "100vh" }}>
            {/* Banner */}
            {/* Banner */}
            {article.image && (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        mt: 4, // margin from top
                    }}
                >
                    <Box
                        component="img"
                        src={article.image}
                        alt={article.title}
                        sx={{
                            maxWidth: { xs: "90%", md: "70%" }, // not full width
                            height: { xs: 250, md: 400 },
                            objectFit: "cover",
                            borderRadius: 2, // optional: smooth edges
                            boxShadow: "0 4px 12px rgba(0,0,0,0.1)", // optional: nice effect
                        }}
                    />
                </Box>
            )}

            {/* Content */}
            <Container maxWidth="md" sx={{ py: 5 }}>
                <Typography
                    variant="h3"
                    component="h1"
                    gutterBottom
                    sx={{ fontFamily: "serif", fontWeight: "bold", textAlign: "center", mb: 2 }}
                >
                    {article.title}
                </Typography>

                <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    sx={{ textAlign: "center", mb: 4 }}
                >
                    {article.publication} • {article.publishDate}
                </Typography>

                <Box sx={{ typography: "body1", lineHeight: 1.8 }}>
                    {article.content.split("\n").map((para, i) => (
            <Typography key={i} paragraph sx={{ mb: 3, fontFamily: "serif" }}>
              {para}
            </Typography>
          ))}

                   
                </Box>
            </Container>
        </Box>
    );
}
