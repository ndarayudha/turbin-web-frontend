/* eslint-disable no-unused-vars */
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IcVa from "../../assets/ic_va.png";
import IcW from "../../assets/ic_w.png";
import IcLampu from "../../assets/ic_lampu.png";
import icAmpere from "../../assets/ic_ampere.png";
import useMediaQuery from '@mui/material/useMediaQuery';
import DateComponent from './DateComponent';

const ImgComponent = styled.img`
  width: ${props => props.width ? props.width : '150px'};
`;

const Monitoring = () => {
  const smartphoneMin = useMediaQuery('(max-width:320px)');
  const smartphoneMax = useMediaQuery('(max-width:480px)');
  const tabletMin = useMediaQuery('(max-width:600px)');
  const tabletMax = useMediaQuery('(max-width:801px)');
  const desktopMin = useMediaQuery('(max-width:1025px)');
  const desktopMax = useMediaQuery('(max-width:1281px)');

  return (
    <Box
      sx={{
        margin: "0",
        height: { lg: "100vh", xs: "120vh" },
        padding: `${smartphoneMin ? "100px" : '40px'}`,
        backgroundColor: "rgba(36, 38, 41, 0.2)",
      }}
      id="monitoring"
    >
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={12} sx={{ marginBottom: '40px' }}>
          {" "}
          <Typography
            variant="h4"
            sx={{
              color: "#3b3b3b",
              fontWeight: "600",
              opacity: "0.9",
              marginBottom: "10px",
            }}
          >
            Monitoring Daya
          </Typography>
        </Grid>
        <Grid item container alignItems="center" justifyContent="center" xs={12} lg={6}>
          <Card variant="outlined" sx={{ minWidth: { xs: 300, lg: 500, }, minHeight: { xs: 100, lg: 300 } }}>
            <CardContent>
              <Typography
                variant="h5"
                sx={{ color: "#3b3b3b", fontWeight: "500", opacity: "0.8" }}
              >
                Faktor Daya Listrik
              </Typography>
              <DateComponent/>
            </CardContent>
            <CardContent sx={{ height: "100%" }}>
              <Grid
                item
                container
                alignItems="center"
                flexDirection="column"
                justifyContent="center"
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ImgComponent src={IcVa} alt="Icon Volt Ampere" width={`${smartphoneMax ? "50px" : "80px"}`} />
                  <Typography
                    variant={`${smartphoneMax ? "h4" : "h2"}`}
                    sx={{
                      color: "#3b3b3b",
                      fontWeight: "500",
                      marginLeft: "20px",
                      opacity: "0.9",
                    }}
                  >
                    2500
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "20px"
                  }}
                >
                  <ImgComponent src={IcW} alt="Icon Volt Ampere" width={`${smartphoneMax ? "50px" : "80px"}`} />
                  <Typography
                    variant={`${smartphoneMax ? "h4" : "h2"}`}
                    sx={{
                      color: "#3b3b3b",
                      marginLeft: "20px",
                      fontWeight: "500",
                      opacity: "0.9",
                    }}
                  >
                    2500
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "20px"
                  }}
                >
                  <ImgComponent src={IcW} alt="Icon Volt Ampere" width={`${smartphoneMax ? "50px" : "80px"}`} />
                  <Typography
                    variant={`${smartphoneMax ? "h4" : "h2"}`}
                    sx={{
                      color: "#3b3b3b",
                      marginLeft: "20px",
                      fontWeight: "500",
                      opacity: "0.9",
                    }}
                  >
                    2500
                  </Typography>
                </Box>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item container alignItems="center" justifyContent="center" xs={12} lg={6}>
          <Card variant="outlined" sx={{ minWidth: { xs: 300, lg: 500, }, minHeight: { xs: 100, lg: 300 }, marginTop: { xs: "20px" } }}>
            <CardContent>
              <Typography
                variant="h5"
                sx={{ color: "#3b3b3b", fontWeight: "500", opacity: "0.8" }}
              >
                Kebutuhan Daya
              </Typography>
              <DateComponent/>
            </CardContent>
            <CardContent>
              <Box sx={{ display: "flex", marginTop: '12px' }}>
                <ImgComponent src={IcLampu} width={`${smartphoneMax ? "50px" : "20px"}`} alt="Icon Volt Ampere" />
                <Typography
                  variant="h6"
                  sx={{ color: "#3b3b3b", fontWeight: "500", opacity: "0.7", marginLeft: '20px' }}
                >
                  25 lampu 100W
                </Typography>
              </Box>
              <Box sx={{ display: "flex", marginTop: '12px' }}>
                <ImgComponent src={IcLampu} width={`${smartphoneMax ? "50px" : "20px"}`} alt="Icon Volt Ampere" />
                <Typography
                  variant="h6"
                  sx={{ color: "#3b3b3b", fontWeight: "500", opacity: "0.7", marginLeft: '20px' }}
                >
                  25 panel surya 100W
                </Typography>
              </Box>
              <Box sx={{ display: "flex", marginTop: '12px' }}>
                <ImgComponent src={IcLampu} width={`${smartphoneMax ? "50px" : "20px"}`} alt="Icon Volt Ampere" />
                <Typography
                  variant="h6"
                  sx={{ color: "#3b3b3b", fontWeight: "500", opacity: "0.7", marginLeft: '20px' }}
                >
                  25 lampu 100W
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Monitoring;
