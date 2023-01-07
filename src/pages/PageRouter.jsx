// import { Route, Routes } from 'react-router-dom';
import { Navigate, Route, Routes } from 'react-router-dom';
import CuisinePage from "./CuisinePage"
import FavoritesPage from './FavoritesPage';
import { HomePage } from './HomePage';
import SearchedPage from './SearchedPage';
import RecipePage from './RecipePage';


export default function PageRouter() {
  return(
    <>
        <Routes>        
          <Route path="/" element={ <HomePage /> }/>
          <Route path="*" element={ <Navigate to="/"/> }/>
          <Route path="/cuisine/:type" element={ <CuisinePage/> }/>
          <Route path="/favorites/" element={ <FavoritesPage/> }/>
          <Route path="/searched/:search" element={ <SearchedPage/> }/>
          <Route path="/recipe/:name" element={ <RecipePage/> }/>
        </Routes>
    </>
  )
}