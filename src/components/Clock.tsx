import React from 'react';
import { ClockProps } from '../interfaces/interface';

function Clock(props: ClockProps): JSX.Element {
  const { time } = props;
  const time1 = time ? time.split('')[0] : '0';
  const time2 = time ? time.split('')[1] : '0';
  const time3 = time ? time.split('')[3] : '0';
  const time4 = time ? time.split('')[4] : '0';

  return (
    <div className='clock-time'>
      <div className='clock-time'>
        <div>{time1}</div><div>{time2}</div>
      </div>
      <div>.</div>
      <div className='clock-time'>
        <div>{time3}</div><div>{time4}</div>
      </div>
    </div>
  );
}

export default Clock;
