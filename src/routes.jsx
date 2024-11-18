import {
    Route,
    createBrowserRouter,
    createRoutesFromElements
  } from 'react-router-dom';
  
  import HomePage from './pages/HomePage'
  import ProductListingPage from './pages/ProductListingPage'
  import LoginPage from './pages/LoginPage';
  import AdminPage from './pages/AdminPage';
  import ProductViewPage from './pages/ProductViewPage';

  export default createBrowserRouter(
      createRoutesFromElements(
        <>
           <Route path='/' element={<HomePage />} />
           <Route path='/products' element={<ProductListingPage />} />
           <Route path='/p/:slug' element={<ProductViewPage />} />
           <Route path='/login' element={<LoginPage />}/>
           <Route path='/admin' element={<AdminPage />}/>

        </>
  
      )  
    );