import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/header';
import Router from './Routes';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header login={true} />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
