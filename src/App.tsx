import React from 'react';
import './App.css';
import Clock from './components/Clock';
import Button from './components/Button';

function App(): JSX.Element {
  return (
    <>
			<div className='clock'>
				<Clock />
				<Button />
			</div>
    </>
  );
}

export default App;
