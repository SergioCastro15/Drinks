import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaRecetas from './components/ListaRecetas';
import ModalReceta from './components/Modal';
import CategoriasProvider from './context/categoriasContext';
import RecetasProvider from './context/recetasContext';
import ModalProvider from './context/modalContext';

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
          <Header />
          <div className='container mt-5'>
            <div className='row'>
              <Formulario />
            </div>
            <ListaRecetas />
            <ModalReceta />
          </div>
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
