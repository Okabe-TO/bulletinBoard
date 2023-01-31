import './App.css';
import React from 'react';
import Header from './Header';
import ThreadList from './ThreadList';

function App() {

  return (
		<div className='App'>
			< Header />
			<div className='Thread-container'>
				< ThreadList />
			</div>
		</div>
  );
}

export default App;
