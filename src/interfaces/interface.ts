import React from "react";

export const SET_IS_STARTED = 'SET_IS_STARTED';
export const SET_RESULT = 'SET_RESULT';
export const SET_TIME = 'SET_TIME';

export type SetState= 'SET_IS_STARTED' | 'SET_RESULT' | 'SET_TIME';
export type Result = undefined | 'success' | 'fail';

export interface State {
  isStarted: boolean,
  result: Result,
  time?: string,
  startTime: number;
}

export interface Action {
  type: SetState,
  result?: Result,
  time?: string
}

export interface ClockProps {
  time: string | undefined,
}

export interface ButtonProps {
  isStarted: boolean,
  setIsStarted: React.Dispatch<Action>,
}
