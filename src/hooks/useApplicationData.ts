import { useEffect, useReducer } from 'react'
import { State, Action, SET_IS_STARTED, SET_RESULT, SET_TIMER, Result } from "../interfaces/interface";

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
      case SET_TIMER:
        return {
          ...state,
          time: action.time,
        }
    }
  }

  const setIsStarted = () => dispatch({ type: SET_IS_STARTED });
  const setResult = (result: Result) => {
    return dispatch({ type: SET_RESULT, result });
  }
  const setTime = () => {
    return dispatch({ type: SET_TIMER, time: Date.now().toString() });
  }

  const [state, dispatch] = useReducer(reducer,{
    isStarted: false,
    result: undefined,
    time: undefined,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      if(state.isStarted) setTime();
    }, 10);

    return () => clearInterval(timer);
  }, [state.isStarted]);

  return {
    state,
    setIsStarted,
    setResult,
  }
}

export default useApplicationData;
