import { useEffect, useReducer } from 'react';
import { State, Action, SET_STATE, Result } from "../interfaces/interface";

const useApplicationData = () => {
  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case SET_STATE.IS_STARTED:
        return {
          ...state,
          isStarted: !state.isStarted,
          result: undefined,
          startTime: Date.now(),
        };
      case SET_STATE.RESULT:
        return {
          ...state,
          result: action.result,
        };
      case SET_STATE.TIME:
        return {
          ...state,
          time: action.time,
        };
      default:
        throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
    }
  };

  const [state, dispatch] = useReducer(reducer,{
    isStarted: false,
    result: undefined,
    time: undefined,
    startTime: Date.now(),
  });

  const setIsStarted = () => dispatch({ type: SET_STATE.IS_STARTED });

  useEffect(() => {
    const timer = setInterval(() => {
      const timeDiff = Date.now() - state.startTime;
      const time = new Date(timeDiff).toISOString().slice(17, 22);
      const setTime = () => dispatch({ type: SET_STATE.TIME, time });
      if(state.isStarted) setTime();
    }, 10);

    const setResult = () => {
      let result: Result;
      if (state.isStarted || !state.time) {
        return dispatch({ type: SET_STATE.RESULT, result });
      }

      if (!state.isStarted && Number(state.time) > 9.94 && Number(state.time) < 10.06) {
        result = 'SUCCESS';
      } else {
        result = 'FAIL';
      }
      return dispatch({ type: SET_STATE.RESULT, result });
    };
    setResult();
    return () => clearInterval(timer);
  }, [state.isStarted, state.startTime, state.time]);

  return {
    state,
    setIsStarted,
  };
};

export default useApplicationData;
