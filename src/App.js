import React, { useEffect, useState } from 'react'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'



const menu = {
  link1: 'Catálogo',
  link2: 'Sistema de gestión',
  link3: 'Contáctanos',
}


const greeting = 'Mi tienda de telefonos celulares'


const App = () => {

  /* ITEM SELECCIONADO */
  const [itemSelected, setItemSelected] = useState({});
  console.log(itemSelected);

  const [cantidadCarrrito, setCantidadCarrrito] = useState(0)
  const [totalCarrrito, setTotalCarrrito] = useState(0);


  useEffect(() => {
      setTotalCarrrito(cantidadCarrrito + totalCarrrito);
  }, [cantidadCarrrito]);// eslint-disable-line react-hooks/exhaustive-deps


  return (
    <>
      <NavBar menu={menu} cantidadCarrrito={totalCarrrito} />
      <ItemListContainer greeting={greeting} setCantidadCarrrito={setCantidadCarrrito} setItemSelected={setItemSelected}/>
      <ItemDetailContainer />
    </>
  )
}

export default App

