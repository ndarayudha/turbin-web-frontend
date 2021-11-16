/* eslint-disable no-unused-vars */
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ImgPeta from "../../assets/img_peta.jpg";
import styled from "styled-components";
import useMediaQuery from '@mui/material/useMediaQuery';

const ImgComponent = styled.img`
  width: ${props => props.width ? props.width : "120%"};
  position: relative;
  right: ${props => props.right ? props.right : "-5%"};
`;

const Lokasi = () => {
  const smartphoneMin = useMediaQuery('(min-width:320px)');
    const smartphoneMax = useMediaQuery('(min-width:480px)');
    const tabletMin = useMediaQuery('(min-width:600px)');
    const tabletMax = useMediaQuery('(min-width:801px)');
    const desktopMin = useMediaQuery('(min-width:1025px)');
    const desktopMax = useMediaQuery('(min-width:1281px)');
  return (
    <Box
      sx={{
        margin: "0",
        height: "100vh",
        backgroundColor: "#4690FF",
        overflow: "hidden",
        display: "flex",
      }}
      id="lokasi"
    >
      <Grid container alignItems="center" justifyContent="center">
        <Grid item lg={6} xs={12} container justifyContent="center">
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
        <Grid item lg={6} xs={12}>
          <ImgComponent src={ImgPeta} right={`${smartphoneMax ? '0' : '5px'}`} width={`${smartphoneMax ? '120%' : "110%"}`} alt="Lokasi" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Lokasi;
