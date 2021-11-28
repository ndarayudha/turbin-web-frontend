/* eslint-disable no-unused-vars */
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ImgPeta from "../../assets/img_peta.jpg";
import styled from "styled-components";
import useMediaQuery from "@mui/material/useMediaQuery";

const ImgComponent = styled.iframe`
  width: ${(props) => (props.width ? props.width : "100%")};
  position: relative;
  right: ${(props) => (props.right ? props.right : "0")};
`;

const Lokasi = () => {
  const smartphoneMin = useMediaQuery("(min-width:320px)");
  const smartphoneMax = useMediaQuery("(min-width:480px)");
  const tabletMin = useMediaQuery("(min-width:600px)");
  const tabletMax = useMediaQuery("(min-width:801px)");
  const desktopMin = useMediaQuery("(min-width:1025px)");
  const desktopMax = useMediaQuery("(min-width:1281px)");
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
              maxWidth: "350px",
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: "white", fontWeight: "600", opacity: "0.9" }}
            >
              Lokasi
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "white", fontWeight: "500", opacity: "0.7" }}
            >
              Lokasi kami berada di desa Sragi pada wilayah Kecamatan Songgon
              Kabupaten Banyuwangi.
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={6} xs={12}>
          <ImgComponent
            title="maps"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=-8.2222710,%20114.1651910+(Sragi%20Energi)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width={`${smartphoneMax ? "100%" : "98%"}`}
            height="450px"
            alt="Lokasi"
            loading="lazy"
            allowfullscreen="true"
            frameBorder="0"
          >
            <a href="http://www.gps.ie/">vehicle gps</a>
          </ImgComponent>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Lokasi;
