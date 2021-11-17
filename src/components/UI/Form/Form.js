import React from "react";
import styled from "styled-components";
import PropsType from "prop-types";

const FormElement = styled.form`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Form = (props) => {
  return (
    <FormElement onSubmit={props.onSubmit}>
      <InputContainer>{props.children}</InputContainer>
    </FormElement>
  );
};
Form.propTypes = {
  children: PropsType.any,
  onSubmit: PropsType.func
};

export default Form;
