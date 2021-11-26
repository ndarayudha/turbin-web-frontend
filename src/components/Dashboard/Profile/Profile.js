import React from "react";
import styles from "./Profile.module.css";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import Avatar from "@mui/material/Avatar";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import ApartmentIcon from "@mui/icons-material/Apartment";
import InputContainer from "../../UI/Input/InputContainer";
import { InputType } from "../../UI/Input/InputType";
import Form from "../../UI/Form/Form";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <Card className={styles.profile__item}>
        <h3>Profil Anda</h3>
        <div className={styles.profile__avatar}>
          <div className={styles.profile__avatarContent}>
            <Avatar
              sx={{ width: 170, height: 170 }}
              src="../../../assets/ic_flash.png"
            />
            <p>Your Name</p>
          </div>
          <div className={styles.profile__identity}>
            <div className={styles.profile_identityContent}>
              <EmailIcon sx={{ marginRight: 2 }} />
              <div className={styles.profile__identityContentItem}>
                <h4>Email</h4>
                <p>youremail@gmail.com</p>
              </div>
            </div>
            <div className={styles.profile_identityContent}>
              <PhoneIcon sx={{ marginRight: 2 }} />
              <div className={styles.profile__identityContentItem}>
                <h4>No. Telepon</h4>
                <p>12345678</p>
              </div>
            </div>
            <div className={styles.profile_identityContent}>
              <ApartmentIcon sx={{ marginRight: 2 }} />
              <div className={styles.profile__identityContentItem}>
                <h4>Alamat</h4>
                <p>Banyuwangi</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <Card className={styles.profile__item}>
        <h3>Edit Profil</h3>
        <div className={styles.profile__update}>
          <Form>
            <InputContainer
              label="Upload Foto"
              name="photo"
              typeInput={InputType.INPUT_FILE}
            />
            <InputContainer label="Nama Lengkap" name="name" type="text" />
            <InputContainer label="Email" name="email" type="text" />
            <InputContainer label="No. Telepon" name="phone" type="text" />
            <InputContainer label="Alamat" name="address" type="text" />
            <Button primary>Simpan</Button>
          </Form>
        </div>
      </Card>
    </div>
  );
};

export default Profile;
