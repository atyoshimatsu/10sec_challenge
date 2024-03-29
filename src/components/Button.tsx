import React from 'react';
import { ButtonProps, SET_STATE } from '../interfaces/interface';

function Button(props: ButtonProps): JSX.Element {
  const { isStarted, setIsStarted } = props;
  return (
    <button
      type="button"
      className='clock-button'
      onMouseDown={() => setIsStarted({ type: SET_STATE.IS_STARTED })}
    >
      {isStarted ? 'STOP' : 'START'}
    </button>
  );
}

export default Button;
