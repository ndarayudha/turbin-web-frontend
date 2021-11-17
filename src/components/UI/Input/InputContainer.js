import React from "react";
import styled from "styled-components";
import PropsType from "prop-types";
import Option from "./Option";
import InputForm from "./InputForm";
import { InputType } from "./InputType";
import ListInput from "./ListInput";

const Wrapper = styled.section`
  margin-bottom: 1rem;
`;

const InputLabel = styled.label`
  display: block;
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #3b3b3b;
`;

const ErrorInput = styled.p`
  color: #b40e0e;
`;

const InputContainer = (props) => {
  const inputOption = props.typeInput;

  let inputType;

  switch (inputOption) {
    case InputType.INPUT_FORM:
      inputType = (
        <InputForm
          id={props.name}
          type={props.type}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      );
      break;
    case InputType.INPUT_OPTION:
      inputType = (
        <Option
          optionValue={props.optionValue}
          id={props.name}
          value={props.value}
          width={props.width}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      );
      break;
    case InputType.INPUT_LIST:
      inputType = (
        <ListInput
          optionValue={props.optionValue}
          id={props.name}
          value={props.value}
          width={props.width}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      );
      break;
    default:
      <InputForm
        id={props.name}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />;
  }

  return (
    <Wrapper>
      <InputLabel htmlFor={props.label}>{props.label}</InputLabel>
      {inputType}
      {inputOption == InputType.INPUT_FORM
        ? props.error && (
            <ErrorInput>{props.name} tidak boleh kosong</ErrorInput>
          )
        : ""}
    </Wrapper>
  );
};
InputContainer.propTypes = {
  label: PropsType.any,
  name: PropsType.any,
  type: PropsType.any,
  value: PropsType.any,
  error: PropsType.any,
  width: PropsType.any,
  onChange: PropsType.func,
  onBlur: PropsType.func,
  typeInput: PropsType.any,
  optionValue: PropsType.any,
};

export default InputContainer;
