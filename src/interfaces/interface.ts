import React from "react";

export enum SET_STATE {
  IS_STARTED = 'IS_STARTED',
  RESULT = 'RESULT',
  TIME = 'TIME',
}

export type Result = undefined | 'success' | 'fail';

export interface State {
  isStarted: boolean,
  result: Result,
  time: string | undefined,
  startTime: number;
}

export interface Action {
  type: SET_STATE,
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

export interface ResultProps {
  result: string | undefined,
}
