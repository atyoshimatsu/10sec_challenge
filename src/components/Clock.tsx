import React from 'react'
import { ClockProps } from '../interfaces/interface';

const Clock = (props: ClockProps):JSX.Element => {
  const { time } = props;
  return (
    <div className='clock-time'>
      {time ?? '00:00'}
    </div>
  );
}

export default Clock;
