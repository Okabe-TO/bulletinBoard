import {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import NewThread from './routes/thread/new/NewThread';
import NoMatch from './NoMatch';
import Thread from './routes/thread/Tread';

function App() {
  return(
    <div className='App'>
      <h1 className='Header'>掲示板</h1>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/thread/new' element={<NewThread />} />
        <Route path='/thread/:id' element={<Thread/>} />
        <Route path='*' element={<NoMatch/>} />
      </Routes>
    </div>
  )
}

export default App;
