import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import ImgTiang from "../../assets/img_tiang.jpg";

const articles = [
  {
    key: 1,
    title: "Title 1",
    date: "Senin, 1 November 2021",
    img: ImgTiang,
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    key: 2,
    title: "Title 2",
    date: "Senin, 1 November 2021",
    img: ImgTiang,
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    key: 3,
    title: "Title 3",
    date: "Senin, 1 November 2021",
    img: ImgTiang,
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    key: 4,
    title: "Title 4",
    date: "Senin, 1 November 2021",
    img: ImgTiang,
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    key: 5,
    title: "Title 5",
    date: "Senin, 1 November 2021",
    img: ImgTiang,
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    key: 6,
    title: "Title 6",
    date: "Senin, 1 November 2021",
    img: ImgTiang,
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
];

const Artikel = () => {
  return (
    <Box
      sx={{
        padding: "80px",
        backgroundColor: "white",
        height: "140vh",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "#3b3b3b",
          fontWeight: "600",
          opacity: "0.9",
          marginBottom: "20px",
        }}
      >
        Artikel
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {articles.map((article) => (
          <Card
            sx={{
              maxWidth: 345,
              border: "0",
              marginBottom: "30px",
              boxShadow: "0",
              ":hover": {
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
              },
            }}
            key={article.key}
          >
            <CardActionArea key={article.key}>
              <CardMedia
                component="img"
                height="170"
                image={article.img}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {article.title}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                  {article.date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {article.content}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Artikel;
