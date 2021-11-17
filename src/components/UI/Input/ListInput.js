/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";
import InputForm from "./InputForm";
import CloseCircleOutlined from "@ant-design/icons/CloseCircleOutlined";
import Button from "../../UI/Button/Button";
import { useListInput } from "../../../hooks/use-input";

const ListInputWrapper = styled.div``;

const ItemContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  width: 70vw;
`;

const ListInput = (props) => {
  const [listAmount, setListAmount] = useState([]);
  const [transactionValues, setTransactionValues] = useState([]);

  const {
    value: keteranganValue,
    valueChangeHandler: keteranganChangeHandler,
  } = useListInput();

  const { value: satuanValue, valueChangeHandler: satuanChangeHandler } =
    useListInput();

  const cekTransaksi = () => {
    console.log(listAmount);
  };

  const decreaseInputHandler = (id) => {
    const items = listAmount;
    items.splice(id, 1);
    setListAmount(items);
  };

  console.log(keteranganValue, satuanValue);

  const addInputHandler = () => {
    let key = listAmount.length;

    setListAmount([
      ...listAmount,
      <ItemContainer key={key}>
        {/* {<h1>{key}</h1>} */}
        <InputForm
          width={"18em"}
          onChange={keteranganChangeHandler}
          marginListInput
          placeholder="keterangan"
        />
        <InputForm
          width={"8em"}
          onChange={satuanChangeHandler}
          marginListInput
          placeholder="satuan"
        />
        <InputForm width={"8em"} marginListInput placeholder="kuantitas" />
        <InputForm width={"14em"} marginListInput placeholder="harga" />
        <CloseCircleOutlined
          style={{ fontSize: "1.4rem", color: "#5E2BC6" }}
          onClick={() => decreaseInputHandler(key)}
        />
      </ItemContainer>,
    ]);
  };

  return (
    <ListInputWrapper>
      <Button type="button" mb={20} width={20} onClick={addInputHandler}>
        Tambah Transaksi
      </Button>
      <Button type="button" mb={20} width={20} onClick={cekTransaksi}>
        Cek Transaksi
      </Button>
      {listAmount}
    </ListInputWrapper>
  );
};

export default ListInput;
