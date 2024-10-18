import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, className }) => {
  return (

    <div className={`flex flex-col min-h-screen ${className}`}>
      
      <Header />

      <main className="flex-grow">

      {children}

      </main>

      
      <Footer />
    </div>
  );
};

export default Layout;