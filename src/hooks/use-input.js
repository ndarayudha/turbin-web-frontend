import { useReducer } from "react";
import inputStateReducer from "../reducer/input-reducer";

const initialInputState = {
  value: "",
  isTouched: false,
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

const initialListInputState = {
  value: "",
};

export const useListInput = () => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialListInputState
  );

  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT_LIST", value: event.target.value });
  };

  return {
    value: inputState.value,
    valueChangeHandler,
  };
};

export default useInput;
