import React, {useCallback, useState} from 'react';
import app from './App.module.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';


export default function App() {

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMenuMobile, setIsMenuMobile] = useState(false);

  const handleClose = useCallback(() => {
    setIsPopupOpen(false)
  }, []);

  const handleOpen = useCallback(() => {
    setIsPopupOpen(true)
  }, []);
  
  const handleCloseMenuMobile = useCallback(() => {
    setIsMenuMobile(false)
  }, []);

  const handleOpenMenuMobile = useCallback(() => {
    setIsMenuMobile(true)
    console.log('fff')
  }, []); 

  return (
    <div className={app.page}>
      <Header
        isOpen={handleOpenMenuMobile}
      />
      <Main/>
      
      <Footer/>
    </div>
  );
};