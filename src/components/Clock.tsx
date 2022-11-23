import React from 'react'

const Clock = ():JSX.Element => {
  const time = '10:00';
  return (
    <div className='clock-time'>
      {time}
    </div>
  );
}

export default Clock;
