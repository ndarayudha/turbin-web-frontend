/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import InputArea from "./InputArea";
import InputForm from "./InputForm";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Button from "../../UI/Button/Button";

const ListInputWrapper = styled.div``;

const ItemContainer = styled.form`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  width: 70vw;
`;

const ListInput = (props) => {
  const formEl = useRef();
  const [listAmount, setListAmount] = useState([
    <ItemContainer key={0} ref={formEl} id={0}>
      <InputArea
        width={"25em"}
        height={"10rem"}
        form={0}
        defaultValue=""
        marginListInput
        placeholder="paragraf"
      />
    </ItemContainer>
  ]);
  const [listValue, setListValue] = useState([]);

  const handleSubmit = (event) => {
      props.onChange(listValue)
  };

  const decreaseInputHandler = (id) => {
    const items = listAmount;
    items.splice(id, 1);
    setListAmount(items);
  };

  const addInputHandler = () => {
    let key = listAmount.length;

    const getCurrentElementValue = () => {
      const lastElement = listAmount[listAmount.length - 1]
  
      if(lastElement.ref.current === null){
        alert('error')
        return;
      }
      return {
        key: lastElement.key,
        paragraf: lastElement.ref.current[0].value
      };
    }

    const currentValue = getCurrentElementValue()
    
    console.log(currentValue);

    if(listValue.length === 0){
      setListValue([currentValue])
    } else {
      setListValue([...listValue, currentValue])
    }

    setListAmount([
      ...listAmount,
      <ItemContainer key={key} ref={formEl} id={key}>
        {/* {<h1>{key}</h1>} */}
        <InputArea
          width={"25em"}
          height={"10rem"}
          form={key}
          defaultValue=""
          marginListInput
          placeholder="paragraf"
        />
        <HighlightOffIcon
          style={{ fontSize: "1.4rem", color: "#5E2BC6", cursor: "pointer" }}
          onClick={() => decreaseInputHandler(key)}
        />
      </ItemContainer>,
    ]);
  };
  console.log(listValue)
  return (
    <ListInputWrapper>
      {listAmount}
      <Button type="button" mb={20} width={20} onClick={addInputHandler}>
        Tambah Konten
      </Button>
      <Button type="button" mb={20} width={20} onClick={handleSubmit}>
        Preview
      </Button>
    </ListInputWrapper>
  );
};

export default ListInput;
