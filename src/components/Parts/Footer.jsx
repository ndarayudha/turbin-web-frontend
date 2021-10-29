import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IcFlash from "../../assets/ic_flash.png";
import styled from "styled-components";

const ImgComponent = styled.img`
  width: ${(props) => (props.width ? props.width : "0")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
`;

const Footer = () => {
  return (
    <Box
      sx={{
        height: "40vh",
        backgroundColor: "#14429B",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={4} sx={{ width: "100%" }}>
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
              Turbin Listrik
            </Typography>
            <ImgComponent src={IcFlash} alt="Icon Flash" width="50px" />
          </Box>
        </Grid>
        <Grid item xs={8} sx={{ display: "flex" }}>
          <Box
            sx={{
              width: "20%",
              height: "100%",
              marginLeft: "20px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#fafafa",
                opacity: "0.9",
              }}
            >
              Title 1
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#fafafa",
                opacity: "0.8",
              }}
            >
              Lorem ipsum dolor sit amet, purus sit amet luctus venenatis.
            </Typography>
          </Box>
          <Box
            sx={{
              width: "20%",
              height: "100%",
              marginLeft: "20px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#fafafa",
                opacity: "0.9",
              }}
            >
              Title 1
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#fafafa",
                opacity: "0.8",
              }}
            >
              Lorem ipsum dolor sit amet, purus sit amet luctus venenatis.
            </Typography>
          </Box>
          <Box
            sx={{
              width: "20%",
              height: "100%",
              marginLeft: "20px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#fafafa",
                opacity: "0.9",
              }}
            >
              Title 1
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#fafafa",
                opacity: "0.8",
              }}
            >
              Lorem ipsum dolor sit amet, purus sit amet luctus venenatis.
            </Typography>
          </Box>
        </Grid>
      </Grid>
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
          }}
        >
          Copyright 2021 | CV Jayla Tech.Id
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
