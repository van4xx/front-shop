import React, { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';
import {Route, Routes} from 'react-router-dom';
import Form from './components/Form/Form';
import ProductList from './components/ProductList/ProductList';

function App() {

  useEffect( () => {
      tg?.ready();
  }, [tg]);

  return (
    <div className="App">
        <Header />
        <Routes>
            <Route index element={<ProductList />}/>
            <Route path='form' element={<Form />}/>

        </Routes>
    </div>
  );
}

export default App;
