import React, { useState } from "react";
import Card from "../../UI/Card/Card";
import styles from "./AddArticle.module.css";
import { InputType } from "../../UI/Input/InputType";
import Form from "../../UI/Form/Form";
import InputContainer from "../../UI/Input/InputContainer";
import useInput from "../../../hooks/use-input";
import Button from "../../UI/Button/Button";
import Modal from "../../UI/Modal/Modal";
import { useSelector } from "react-redux";

const isNotEmpty = (value) => value.trim() !== "";

const AddArticle = () => {
  const [image, setImage] = useState(null);

  const showModal = useSelector((state) => state.modal.isVisible);

  const {
    value: judulValue,
    isValid: judulIsValid,
    hasError: judulHasError,
    valueChangeHandler: judulChangeHandler,
    inputBlurHandler: judulBlurHandler,
    reset: resetJudulInput,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (judulIsValid) {
    formIsValid = true;
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    const article = {
      name: judulValue,
      img: image,
    };

    console.log(article);

    resetJudulInput();
  };

  const validatedInput = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    return isJpgOrPng;
  };

  const onImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      alert("file null");
      return;
    }
    const isValidated = validatedInput(file);

    if (isValidated) {
      setImage(file);
      // send to server firebase
    }
  };

  const onChangeList = (data) => {
    console.log(data);
  };

  return (
    <Card>
      <Form>
        <InputContainer
          label="Judul Artikel"
          name="judul"
          type="text"
          error={judulHasError}
          value={judulValue}
          onChange={judulChangeHandler}
          onBlur={judulBlurHandler}
        />
        <InputContainer
          label="Heading Artikel"
          name="heading"
          typeInput={InputType.INPUT_FILE}
          onChange={onImageChange}
        />
      </Form>
      <InputContainer
        label="Artikel"
        name="transaksi"
        typeInput={InputType.INPUT_LIST}
        onChange={onChangeList}
      />
      {showModal && (
        <Modal />
      )}
      <Button primary width={20} onClick={onSubmitHandler}>
        Proses
      </Button>
    </Card>
  );
};

export default AddArticle;
