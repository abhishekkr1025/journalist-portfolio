import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function ArticleCard({
  id,
  title,
  snippet,
  image,
  publication,
  publishDate,
}) {
  return (
    <Card
      sx={{
        width: 300,
        height: 420,
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        overflow: "hidden",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        },
      }}
    >
      <CardActionArea
        component={Link}
        to={`/article/${id}`}
        sx={{ display: "flex", flexDirection: "column", height: "100%" }}
      >
        {/* Image */}
        {image && (
          <CardMedia
            component="img"
            height="160"
            image={image}
            alt={title}
            sx={{
              objectFit: "cover",
              width: "100%",
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
            }}
          />
        )}

        {/* Text Content */}
        <CardContent sx={{ flexGrow: 1, width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              height: "100%",
              overflow: "hidden",
            }}
          >
            {/* Title */}
            <Typography
              variant="h6"
              sx={{
                fontFamily: "serif",
                fontWeight: "bold",
                lineHeight: 1.3,
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {title}
            </Typography>

            {/* Snippet */}
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                flexGrow: 1,
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                lineHeight: 1.5,
              }}
            >
              {snippet}
            </Typography>

            {/* Meta Info */}
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{
                mt: "auto",
                fontStyle: "italic",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {publication} • {publishDate}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
