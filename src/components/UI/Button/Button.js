import styled from "styled-components";

const ButtonWrapper = styled.button`
  margin-top: ${(props) => (props.mt ? props.mt + "px" : "0px")};
  margin-left: ${(props) => (props.ml ? props.ml + "px" : "0px")};
  margin-bottom: ${(props) => (props.mb ? props.mb + "px" : "0px")};
  margin-right: ${(props) => (props.mr ? props.mr + "px" : "0px")};
  background-color: ${(props) => (props.primary ? "#4690FF" : "#ffffff")};
  width: ${props => props.width + "rem"};
  padding: 7px 21px;
  color: ${(props) => (props.primary ? "#fafafa" : "#5E2BC6")};
  border: 0;
  cursor: pointer;
  border-radius: ${(props) => (props.radius ? props.radius + "px" : "4px")};
  :disabled {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
  }
`;

export default ButtonWrapper;
