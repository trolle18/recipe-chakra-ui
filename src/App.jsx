// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>        
        <Route path="/" element={ <HomePage /> }/>
        <Route path="*" element={ <Navigate to="/"/> }/>
        {/* <Route path="/cuisine/:type" element={ <CuisinePage/> }/> */}
        {/* <Route path="/favorites/" element={ <FavoritesPage/> }/> */}
        {/* <Route path="/searched/:search" element={ <SearchedPage/> }/> */}
        {/* <Route path="/recipe/:name" element={ <RecipePage/> }/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
