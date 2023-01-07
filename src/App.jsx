// import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import PageRouter from './pages/PageRouter';

function App() {
  return (
    <BrowserRouter>
      <PageRouter />
    </BrowserRouter>
  );
}

export default App;
