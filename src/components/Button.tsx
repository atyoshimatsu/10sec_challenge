import React from 'react'
import { ButtonProps, SET_IS_STARTED } from '../interfaces/interface';

const Button = (props: ButtonProps):JSX.Element => {
  const { isStarted, setIsStarted } = props;
  return (
    <button
      className='clock-button'
      onMouseDown={() => setIsStarted({type: SET_IS_STARTED})}
    >
      {isStarted ? 'Stop' : 'Start'}
    </button>
  );
}

export default Button;
