import React, {useCallback, useState} from 'react';
import app from './App.module.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import MenuMobile from '../MenuMobile/MenuMobile';


export default function App() {

  const [isMenuMobile, setIsMenuMobile] = useState(false);
  
  const handleCloseMenuMobile = useCallback(() => {
    setIsMenuMobile(false)
  }, []);

  const handleOpenMenuMobile = useCallback(() => {
    setIsMenuMobile(true)
  }, []); 

  return (
    <div className={app.page}>
      <Header
        isOpen={handleOpenMenuMobile}
      />
      <Main/>
      
      <Footer/>
      {isMenuMobile && <MenuMobile
        onClose={handleCloseMenuMobile}
      />}
    </div>
  );
};