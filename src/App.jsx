import { useReducer } from "react";
import "./App.scss";
import reducer from "./features/reducer";
import {
  CLEAR,
  ADD_DECIMAL_POINT,
  ADD_DIGIT,
  TOGGLE,
  DIVIDE_ONE_HUNDRED,
  OPERATOR,
  EVALUATE,
} from "./data/variables";
import Button from "./components/Button";

export const defaultOutput = {
  currentOperand: "0",
  previousOperand: null,
  operator: null,
  overwrite: false,
};

function App() {
  const [state, dispatch] = useReducer(reducer, defaultOutput);

  function addDigit(digit) {
    dispatch({ type: ADD_DIGIT, payload: digit });
  }

  function clear() {
    dispatch({ type: CLEAR });
  }

  function toggle() {
    dispatch({ type: TOGGLE });
  }

  function divideOneHundred() {
    dispatch({ type: DIVIDE_ONE_HUNDRED });
  }

  function addDecimalPoint() {
    dispatch({ type: ADD_DECIMAL_POINT });
  }

  function operating(operator) {
    dispatch({ type: OPERATOR, payload: operator });
  }

  function evaluate() {
    dispatch({ type: EVALUATE });
  }

  return (
    <div className="container">
      <div className="monitor">{state.currentOperand}</div>

      <Button content={"AC"} func={clear} classList={"btn-func"} />
      <Button content={"+/-"} func={toggle} classList={"btn-func"} />
      <Button content={"%"} func={divideOneHundred} classList={"btn-func"} />
      <Button
        content={"/"}
        func={operating}
        classList={"btn-operator btn-operator-highlight"}
      />

      <Button content={"7"} func={addDigit} classList={"btn-digit"} />
      <Button content={"8"} func={addDigit} classList={"btn-digit"} />
      <Button content={"9"} func={addDigit} classList={"btn-digit"} />
      <Button
        content={"*"}
        func={operating}
        classList={"btn-operator btn-operator-highlight"}
      />

      <Button content={"4"} func={addDigit} classList={"btn-digit"} />
      <Button content={"5"} func={addDigit} classList={"btn-digit"} />
      <Button content={"6"} func={addDigit} classList={"btn-digit"} />
      <Button
        content={"-"}
        func={operating}
        classList={"btn-operator btn-operator-highlight"}
      />

      <Button content={"1"} func={addDigit} classList={"btn-digit"} />
      <Button content={"2"} func={addDigit} classList={"btn-digit"} />
      <Button content={"3"} func={addDigit} classList={"btn-digit"} />
      <Button
        content={"+"}
        func={operating}
        classList={"btn-operator btn-operator-highlight"}
      />

      <Button content={"0"} func={addDigit} classList={"btn-digit span-2"} />
      <Button content={"."} func={addDecimalPoint} classList={"btn-operator"} />
      <Button content={"="} func={evaluate} classList={"btn-operator"} />
    </div>
  );
}

export default App;
