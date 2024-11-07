import {
    Route,
    createBrowserRouter,
    createRoutesFromElements
  } from 'react-router-dom';
  
  import HomePage from './pages/HomePage'
  import ProductListingPage from './pages/ProductListingPage'
  import LoginPage from './pages/LoginPage';
  import AdminPage from './pages/AdminPage';

  export default createBrowserRouter(
      createRoutesFromElements(
        <>
           <Route path='/' element={<HomePage />} />
           <Route path='/Produtos' element={<ProductListingPage />} />
           <Route path='/login' element={<LoginPage />}/>
           <Route path='/admin' element={<AdminPage />}/>

        </>
  
      )  
    );