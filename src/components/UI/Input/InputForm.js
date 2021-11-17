import styled from "styled-components";

const InputForm = styled.input`
  margin-right: ${(props) => (props.marginListInput ? "2rem" : "0")};
  display: block;
  font: inherit;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: ${(props) => (props.width ? props.width : "20rem")};
  max-width: 100%;
  :focus {
    outline: none;
    border-color: #240370;
    background-color: #e0d4fd;
  }
`;


export default InputForm;
