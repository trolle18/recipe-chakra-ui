// import { Route, Routes } from 'react-router-dom';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from "./HomePage"
// import CuisinePage from "./CuisinePage"
// import SearchedPage from './SearchedPage';
// import RecipePage from './RecipePage';


export default function Pages() {
  return(
    <>
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
    </>
  )
}