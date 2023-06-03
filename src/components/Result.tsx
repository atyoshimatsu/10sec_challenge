import React from 'react'
import { ResultProps } from '../interfaces/interface';

const Result = (props: ResultProps):JSX.Element => {
  const { result } = props;
  return (
    <div className='clock-result'>
      {result}
    </div>
  );
}

export default Result;
