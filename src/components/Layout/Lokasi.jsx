import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ImgPeta from "../../assets/img_peta.jpg";
import styled from "styled-components";

const ImgComponent = styled.img`
  width: 120%;
  position: relative;
  right: -5%;
`;

const Lokasi = () => {
  return (
    <Box
      sx={{
        margin: "0",
        height: "100vh",
        backgroundColor: "#4690FF",
        overflow: "hidden",
        display: "flex",
      }}
    >
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={6} container justifyContent="center">
          <Box
            sx={{
              height: "100%",
              maxWidth: '350px',
            }}
          >
            <Typography variant="h4" sx={{ color: "white", fontWeight: "600", opacity: '0.9' }}>
              Lokasi
            </Typography>
            <Typography variant="h6" sx={{ color: "white", fontWeight: "500", opacity: '0.7' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu nulla
              quis massa ut iaculis nunc feugiat. Odio viverra elementum ac
              mattis blandit fermentum placerat. Sed in ridiculus lacus, aliquam
              montes, urna.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <ImgComponent src={ImgPeta} alt="Lokasi" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Lokasi;
