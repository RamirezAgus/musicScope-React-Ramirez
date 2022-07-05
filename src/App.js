import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/Container';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Bienvenido a Music Scope" />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting="Bienvenido a Music Scope" />} />
          <Route path='/detail/:id' element={<ItemDetailContainer />} />

        </Routes>
    </BrowserRouter>

  )
}

export default App;
