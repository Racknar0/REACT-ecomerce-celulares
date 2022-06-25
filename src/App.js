import React, { useEffect, useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Cart from './components/Cart/Cart';
import {CartContextProvider } from './components/contexts/CartContext';
import ItemCount from './components/ItemCount/ItemCount';

import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'

import "./App.css"

const menu = {
  link1: 'Catálogo',
  link2: 'Sistema de gestión',
  link3: 'Contáctanos',
}


const App = () => {

  /* ITEM SELECCIONADO */
  const [itemSelected, setItemSelected] = useState({});
  /* console.log(itemSelected); */

  const [cantidadCarrrito, setCantidadCarrrito] = useState(0)
  const [totalCarrrito, setTotalCarrrito] = useState(0);


  useEffect(() => {
      setTotalCarrrito(cantidadCarrrito + totalCarrrito);
  }, [cantidadCarrrito]);// eslint-disable-line react-hooks/exhaustive-deps

  

  return (



    <CartContextProvider>
      <BrowserRouter>
        <NavBar menu={menu} cantidadCarrrito={totalCarrrito} />
        <Routes>
          <Route path="/" element={<ItemListContainer setCantidadCarrrito={setCantidadCarrrito} setItemSelected={setItemSelected}/>} />
          <Route path="/categoria/:categoriaId" element={<ItemListContainer/>} />


          <Route path="/detalles/:id" element={<ItemDetailContainer objeto={itemSelected} setCantidadCarrrito={setCantidadCarrrito} />} />
          <Route path="/gestion" element={<div><h1>gestion</h1></div>} />
          <Route path="/contacto" element={<div><h1>contacto</h1></div>} />
          <Route path="/cart" element={<Cart />} />

          <Route path="*" element={<div><h1>La pagina no existe</h1></div>} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>

  )
}

export default App

