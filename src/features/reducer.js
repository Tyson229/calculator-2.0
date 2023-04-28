import {
  CLEAR,
  ADD_DECIMAL_POINT,
  ADD_DIGIT,
  TOGGLE,
  DIVIDE_ONE_HUNDRED,
  OPERATOR,
  EVALUATE,
} from "../data/variables";
import { defaultOutput } from "../App";
import evaluate from "./evaluate";

function reducer(state, action) {
  let { currentOperand } = state;
  switch (action.type) {
    case ADD_DIGIT: {
      if (state.overwrite) {
        return {
          ...state,
          previousOperand: currentOperand,
          currentOperand: action.payload,
          overwrite: false,
        };
      }
      if (currentOperand === "0")
        return { ...state, currentOperand: action.payload };

      return {
        ...state,
        currentOperand: currentOperand + action.payload,
      };
    }

    case CLEAR: {
      return defaultOutput;
    }

    case TOGGLE: {
      if (currentOperand < 0)
        return { ...state, currentOperand: (currentOperand * -1).toString() };
      if (currentOperand > 0)
        return { ...state, currentOperand: `-${currentOperand}` };
      return { ...state };
    }

    case DIVIDE_ONE_HUNDRED: {
      return { ...state, currentOperand: (currentOperand / 100).toString() };
    }

    case ADD_DECIMAL_POINT: {
      if (currentOperand.toString().includes(".")) return { ...state };
      return { ...state, currentOperand: `${currentOperand}.` };
    }

    case OPERATOR: {
      if (
        state.previousOperand !== null &&
        state.currentOperand !== null &&
        state.operator !== null
      ) {
        return {
          ...state,
          currentOperand: evaluate(
            state.previousOperand,
            state.currentOperand,
            state.operator
          ),
          previousOperand: null,
          operator: action.payload,
          overwrite: true,
        };
      }

      return { ...state, operator: action.payload, overwrite: true };
    }
    
    case EVALUATE: {
      if (state.currentOperand !== null && state.previousOperand !== null)
        return {
          ...state,
          currentOperand: evaluate(
            state.previousOperand,
            state.currentOperand,
            state.operator
          ),
          previousOperand: null,
          operator: null,
        };
      if (state.currentOperand !== null && state.operator != null) {
        return {
          ...state,
          currentOperand: evaluate(
            state.currentOperand,
            state.currentOperand,
            state.operator
          ),
          previousOperand: null,
        };
      }
      return { ...state };
    }
  }
}

export default reducer;
