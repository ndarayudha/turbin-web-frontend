import React from "react";
import styled from "styled-components";
import PropsType from "prop-types";

const SelectElement = styled.select`
  width: ${props => props.width ? props.width + "rem" : "100%"};
  border: 1px solid #ccc;
  font: inherit;
  padding: 0.5rem;
  border-radius: 4px;
  outline: none;
  :focus {
    outline: none;
    border-color: #240370;
    background-color: #e0d4fd;
  }
`;
const OptionElement = styled.option``;


const Option = (props) => {
  return (
    <SelectElement
      onChange={props.onChange}
      onBlur={props.onBlur}
      width={props.width}
    >
      {props.optionValue.map((value) => (
        <OptionElement key={value} value={value} id={value}>
          {value}
        </OptionElement>
      ))}
    </SelectElement>
  );
};
Option.propTypes = {
  optionValue: PropsType.any,
  onChange: PropsType.func,
  onBlur: PropsType.func,
  width: PropsType.any
};

export default Option;
