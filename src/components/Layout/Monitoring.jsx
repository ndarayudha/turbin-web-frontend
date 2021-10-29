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

const ImgComponent = styled.img`
  width: ${props => props.width ? props.width : '150px'};
`;

const Monitoring = () => {
  return (
    <Box
      sx={{
        margin: "0",
        height: "100vh",
        padding: "100px",
        backgroundColor: "rgba(70, 144, 255, 0.2)",
      }}
    >
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={12} sx={{marginBottom: '40px'}}>
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
        <Grid item container alignItems="center" justifyContent="start" xs={6}>
          <Card variant="outlined" sx={{ minWidth: 500, minHeight: 300 }}>
            <CardContent>
              <Typography
                variant="h5"
                sx={{ color: "#3b3b3b", fontWeight: "500", opacity: "0.8" }}
              >
                Faktor Daya Listrik
              </Typography>
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
                  <ImgComponent src={IcVa} alt="Icon Volt Ampere" />
                  <Typography
                    variant="h2"
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
                  }}
                >
                  <ImgComponent src={IcW} alt="Icon Volt Ampere" />
                  <Typography
                    variant="h2"
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
        <Grid item container alignItems="center" justifyContent="center" xs={6}>
          <Card variant="outlined" sx={{ minWidth: 500, minHeight: 300 }}>
            <CardContent>
              <Typography
                variant="h5"
                sx={{ color: "#3b3b3b", fontWeight: "500", opacity: "0.8" }}
              >
                Perkiraan Kebutuhan Daya
              </Typography>
            </CardContent>
            <CardContent>
              <Box sx={{ display: "flex", marginTop: '12px' }}>
              <ImgComponent src={IcLampu} width="20px" alt="Icon Volt Ampere" />
                <Typography
                  variant="h6"
                  sx={{ color: "#3b3b3b", fontWeight: "500", opacity: "0.7", marginLeft: '20px' }}
                >
                  Bisa menghidupi 25 lampu 100W
                </Typography>
              </Box>
              <Box sx={{ display: "flex", marginTop: '12px' }}>
              <ImgComponent src={IcLampu} width="20px" alt="Icon Volt Ampere" />
                <Typography
                  variant="h6"
                  sx={{ color: "#3b3b3b", fontWeight: "500", opacity: "0.7", marginLeft: '20px' }}
                >
                  Bisa menghidupi 25 panel surya 100W
                </Typography>
              </Box>
              <Box sx={{ display: "flex", marginTop: '12px' }}>
              <ImgComponent src={IcLampu} width="20px" alt="Icon Volt Ampere" />
                <Typography
                  variant="h6"
                  sx={{ color: "#3b3b3b", fontWeight: "500", opacity: "0.7", marginLeft: '20px' }}
                >
                  Bisa menghidupi 25 lampu 100W
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
