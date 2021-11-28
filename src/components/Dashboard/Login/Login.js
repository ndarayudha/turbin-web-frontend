import React from "react";
import styles from "./Login.module.css";
import Button from "../../UI/Button/Button";
import InputContainer from "../../UI/Input/InputContainer";
import Card from "../../UI/Card/Card";
import Form from "../../UI/Form/Form";
import Notification from "../../UI/Notification/Notification";
import ImgProyek from "../../../assets/img_proyek.png";
import IcFlashWhite from "../../../assets/ic_flash_white.png";
import IcFlashBlue from "../../../assets/ic_flash_blue.png";
import {useHistory} from 'react-router-dom'


const Login = () => {
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    
  }

  return (
    <div className={styles.login}>
      <div className={styles.login__left}>
        <div className={styles.left__top}>
          <img src={ImgProyek} alt="Img Proyek" />
        </div>
        <div className={styles.left__bottom}>
          <p>Turbin Listrik</p>
          <img src={IcFlashWhite} alt="Img Flash" />
        </div>
      </div>
      <div className={styles.login__right}>
        <Card className={styles.login__container}>
          <div className={styles.login__title}>
            <img src={IcFlashBlue} alt="Img Flash Blue" />
            <p>Turbin Listrik Admin</p>
          </div>
          <div className={styles.login__text}>
            <p>Login</p>
          </div>
          <div className={styles.login__form}>
            <Form className={styles.login__formItem}>
              <InputContainer label="Email" name="email" type="text" />
              <InputContainer
                label="Password"
                name="password"
                type="password"
              />
              <Button primary onClick={handleLogin}>Login</Button>
            </Form>
          </div>
          <Notification/>
        </Card>
      </div>
    </div>
  );
};

export default Login;
