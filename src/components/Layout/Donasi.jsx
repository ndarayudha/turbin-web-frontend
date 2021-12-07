/* eslint-disable no-unused-vars */
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ImgSaklar from "../../assets/img_saklar.jpg";
import IcWhatsapp from "../../assets/ic_whatsapp.png";
import IcMessage from "../../assets/ic_message.png";
import IcBankBca from "../../assets/ic_bank_bca.png";
import IcBankJatim from "../../assets/ic_bank_jatim.png";
import IcBankBri from "../../assets/ic_bank_bri.png";
import styled from "styled-components";
import useMediaQuery from "@mui/material/useMediaQuery";

const ImgComponent = styled.img`
  width: ${(props) => (props.width ? props.width : "120%")};
  border-radius: 12px;
  margin: ${(props) => (props.margin ? props.margin : "0")};
`;

const Donasi = () => {
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
        height: { lg: "100vh", xs: "90vh" },
        backgroundColor: "#4690FF",
        overflow: "hidden",
        display: "flex",
      }}
      id="donasi"
    >
      <Grid container alignItems="center" justifyContent="center">
        <Grid item lg={7} xs={12}>
          <Box
            sx={{
              width: { lg: "120%", xs: "100%" },
              height: smartphoneMax ? "65vh": "85vh",
              position: "relative",
              padding: "20px 45px",
              borderRadius: "0 12px 12px 0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              zIndex: "3",
              backgroundColor: "white",
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
              Donasi
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#3b3b3b",
                fontWeight: "500",
                opacity: "0.8",
                marginBottom: "20px",
              }}
            >
              Kami percaya bahwa demi mewujudkan ketersediaan infrastruktur
              untuk skala yang lebih luas, tentu tidak akan lepas dari bantuan
              masyarakat sekitar. Mari wujudkan skalabilitas jangkauan inovasi
              kami dengan berdonasi melalui kontak dibawah ini
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "#3b3b3b",
                fontWeight: "600",
                opacity: "0.8",
                marginBottom: "20px",
              }}
            >
              Info lebih lanjut hubungi
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ImgComponent
                src={IcWhatsapp}
                width="30px"
                margin="0 10px 0 0"
                alt="Icon Whatsapp"
              />
              <a
                href="https://wa.me/6289505263214"
                style={{
                  textDecoration: "none",
                  color: "white",
                  backgroundColor: "#25D366",
                  padding: "5px 10px",
                  borderRadius: "2px",
                }}
                target="_blank" rel="noreferrer"
              >
                Konsultasi Donasi
              </a>
            </Box>
            <Typography
              variant="h5"
              sx={{
                color: "#3b3b3b",
                fontWeight: "600",
                opacity: "0.8",
                marginTop: "20px",
              }}
            >
              Donasi Sekarang
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: smartphoneMax ? "row" : "column",
                alignItems: "center",
                marginTop: "15px"
              }}
            >
              <ImgComponent
                src={IcBankBca}
                width="55px"
                margin="0px 10px 0 0"
                alt="Icon Message"
              />
              <Typography variant="body2" >8980589065 Rindi Novia</Typography>
              <ImgComponent
                src={IcBankJatim}
                width="55px"
                margin="0px 10px 0 20px"
                alt="Icon Message"
              />
              <Typography variant="body2">
                0026354901 Carenza Al Kharraz
              </Typography>
              <ImgComponent
                src={IcBankBri}
                width="55px"
                margin="0px 10px 0 20px"
                alt="Icon Message"
                style={{ borderRadius: "0" }}
              />
              <Typography variant="body2">
                3274.01.037627.53.0 Albert Gabriel Surbakti
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          lg={5}
          xs={12}
          container
          justifyContent="center"
          sx={{ position: "relative" }}
        >
          {smartphoneMax ? (
            <Box
              sx={{
                height: "100%",
                width: "720px",
                position: "relative",
                right: "-5px",
                top: "-40px",
                "&:before": {
                  content: '""',
                  position: "absolute",
                  background: "rgba(20, 66, 155, 0.52)",
                  top: "0",
                  width: "100%",
                  height: "99%",
                  borderRadius: "12px",
                  zIndex: "1",
                },
              }}
            >
              <ImgComponent src={ImgSaklar} alt="Gambar Saklar" />
            </Box>
          ) : (
            ""
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Donasi;
