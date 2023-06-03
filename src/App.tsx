import React from 'react';
import './App.css';
import Clock from './components/Clock';
import Button from './components/Button';
import Result from './components/Result';
import useApplicationData from './hooks/useApplicationData';

function App(): JSX.Element {
	const { state, setIsStarted } = useApplicationData();
  return (
    <>
			<div className='clock'>
				<Clock time={state.time} />
				<Button isStarted={state.isStarted} setIsStarted={setIsStarted}/>
				<Result result={state.result} />
			</div>
    </>
  );
}

export default App;
