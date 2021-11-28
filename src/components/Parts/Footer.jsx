/* eslint-disable no-unused-vars */
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IcFlash from "../../assets/ic_flash.png";
import styled from "styled-components";
import useMediaQuery from '@mui/material/useMediaQuery';

const ImgComponent = styled.img`
  width: ${(props) => (props.width ? props.width : "0")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
`;

const Footer = () => {
  const smartphoneMin = useMediaQuery('(min-width:320px)');
  const smartphoneMax = useMediaQuery('(min-width:480px)');
  const tabletMin = useMediaQuery('(min-width:600px)');
  const tabletMax = useMediaQuery('(min-width:801px)');
  const desktopMin = useMediaQuery('(min-width:1025px)');
  const desktopMax = useMediaQuery('(min-width:1281px)');

  return (
    <Box
      sx={{
        height: "100%",
        backgroundColor: "#14429B",
        display: "flex",
        flexDirection: `${smartphoneMax ? "row" : "column"}`,
        justifyContent: "center",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} lg={12} sx={{ width: "100%" }}>
          <Box
            sx={{
              width: "100%",
              height: "200px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "#fafafa",
                fontWeight: "600",
                marginBottom: "9px",
                opacity: "0.9",
              }}
            >
              Sragi Energi
            </Typography>
            <ImgComponent src={IcFlash} alt="Icon Flash" width="50px" />
          </Box>
        </Grid>
        
        <Grid item xs={12} lg={12}>
        <Box
          sx={{
            margin: "0",
            padding: "0",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "#fafafa",
              fontWeight: "500",
              opacity: "0.9",
              textAlign: "center",
              paddingTop: "20px",
              paddingBottom: "20px"
            }}
          >
            Copyright 2021 |sragienergi.com
          </Typography>
        </Box>
      </Grid>
      </Grid>
      
    </Box>
  );
};

export default Footer;
