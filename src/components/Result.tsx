import React from 'react';
import { ResultProps } from '../interfaces/interface';

function Result(props: ResultProps):JSX.Element {
  const { result } = props;
  return (
    <div className='clock-result'>
      {result}
    </div>
  );
}

export default Result;
