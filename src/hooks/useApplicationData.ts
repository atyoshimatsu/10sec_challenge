import { useReducer } from 'react'
import { State, Action, SET_IS_STARTED, SET_RESULT, Result } from "../interfaces/interface";

const useApplicationData = () => {
  const reducer = (state: State, action: Action): State => {
    if (action.type === SET_RESULT && !action.result) {
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
    }

    switch (action.type) {
      case SET_IS_STARTED:
        return {
          ...state,
          isStarted: !state.isStarted,
        }
      case SET_RESULT:
        return {
          ...state,
          result: action.result,
        }
    }
  }

  const [state, dispatch] = useReducer(reducer,{
		isStarted: false,
		result: undefined,
	});

  const setIsStarted = () => dispatch({ type: SET_IS_STARTED });
  const setResult = (result: Result) => {
    return dispatch({ type: SET_RESULT, result });
  }

  return {
    state,
    setIsStarted,
    setResult,
  }
}

export default useApplicationData;
