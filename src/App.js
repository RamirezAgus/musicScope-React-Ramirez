import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/Container';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

const App = () => {
  return (
    <div className='app'>
      <NavBar />
      <div>
        <ItemListContainer greeting="Bienvenido a Music Scope" />
        <ItemDetailContainer />
      </div>
    </div>

  )
}

export default App;
