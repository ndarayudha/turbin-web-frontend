import React, { useState } from "react";
import Card from "../../UI/Card/Card";
import styles from "./AddArticle.module.css";
import { InputType } from "../../UI/Input/InputType";
import Form from "../../UI/Form/Form";
import InputContainer from "../../UI/Input/InputContainer";
import Button from "../../UI/Button/Button";
import Modal from "../../UI/Modal/Modal";
import { useSelector, useDispatch } from "react-redux";
import { modalAction } from "../../../store/slice/modal-slice";

const AddArticle = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState();

  const showModal = useSelector((state) => state.modal.isVisible);
  const articleContent = useSelector((state) => state.modal.modalContent);

  const formIsValid =
    image !== null &&
    articleContent !== null &&
    articleContent !== null;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(formIsValid);

    // if (!formIsValid) {
    //   return;
    // }

    if (articleContent === null) {
      alert("Konten tidak boleh kosong");
      return;
    }

    const article = {
      title: articleContent.title,
      img: image,
      paragraph: articleContent.content,
    };

    // send data to server

    // clear article redux store

    console.log(article);
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

  const titleChangeHandler = (e) => {
    dispatch(
      modalAction.showModal({
        title: e.target.value,
        image: "",
        content: articleContent !== null ? articleContent.content : "",
      })
    );
  };

  return (
    <Card>
      <Form>
        <InputContainer
          label="Judul Artikel"
          name="judul"
          type="text"
          value={articleContent !== null ? articleContent.title : ""}
          onChange={titleChangeHandler}
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
      />
      {showModal && <Modal />}
      <Button primary width={20} onClick={onSubmitHandler}>
        Proses
      </Button>
    </Card>
  );
};

export default AddArticle;
