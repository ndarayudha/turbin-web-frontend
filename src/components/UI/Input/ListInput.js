/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import InputArea from "./InputArea";
import InputForm from "./InputForm";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Button from "../../UI/Button/Button";
import { modalAction } from "../../../store/slice/modal-slice";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { IconButton } from "@mui/material";

const ListInputWrapper = styled.form``;

const ListInput = (props) => {
  const articleContent = useSelector((state) => state.modal.modalContent);
  const [listAmounts, setListAmount] = useState([
    { id: uuidv4(), paragraph: "" },
  ]);

  const dispatch = useDispatch();

  const handlePreview = () => {
    const paragraphs = listAmounts.map((amount) => {
      return amount.paragraph;
    });

    dispatch(
      modalAction.showModal({
        title: articleContent !== null ? articleContent.title : "",
        image: "",
        content: paragraphs.join("|||"),
      })
    );

    dispatch(modalAction.toogle());
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = listAmounts.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setListAmount(newInputFields);
  };

  const addInputHandler = () => {
    setListAmount([...listAmounts, { id: uuidv4(), paragraph: "" }]);
  };

  const handleRemoveFields = (id) => {
    const values = [...listAmounts];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setListAmount(values);
  };

  return (
    <ListInputWrapper onSubmit={handlePreview}>
      {listAmounts.map((listAmount) => (
        <div
          key={listAmount.id}
          style={{ display: "flex", width: "100%", marginBottom: "20px" }}
        >
          <InputArea
            name="paragraph"
            width={"25em"}
            height={"10rem"}
            value={listAmount.paragraph}
            marginListInput
            placeholder="paragraf"
            onChange={(event) => handleChangeInput(listAmount.id, event)}
          />
          <IconButton
            style={{ width: "50px", height: "50px" }}
            disabled={listAmounts.length === 1}
            onClick={() => handleRemoveFields(listAmount.id)}
          >
            <HighlightOffIcon
              style={{
                fontSize: "1.4rem",
                color: "#5E2BC6",
                cursor: "pointer",
              }}
            />
          </IconButton>
        </div>
      ))}
      <Button type="button" mb={20} width={20} onClick={addInputHandler}>
        Tambah Konten
      </Button>
      <Button type="button" mb={20} width={20} onClick={handlePreview}>
        Preview
      </Button>
    </ListInputWrapper>
  );
};

export default ListInput;
