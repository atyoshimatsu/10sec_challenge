import { useEffect, useReducer } from 'react'
import { State, Action, SET_IS_STARTED, SET_RESULT, SET_TIME, Result } from "../interfaces/interface";

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
          startTime: Date.now(),
        }
      case SET_RESULT:
        return {
          ...state,
          result: action.result,
        }
      case SET_TIME:
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

  const [state, dispatch] = useReducer(reducer,{
    isStarted: false,
    result: undefined,
    time: '00.00',
    startTime: Date.now(),
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const timeDiff = Date.now() - state.startTime;
      const time =new Date(timeDiff).toISOString().slice(17, 22);
      const setTime = () => dispatch({ type: SET_TIME, time });
      if(state.isStarted) setTime();
    }, 10);

    return () => clearInterval(timer);
  }, [state.isStarted, state.startTime]);

  return {
    state,
    setIsStarted,
    setResult,
  }
}

export default useApplicationData;
