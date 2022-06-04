import React, { useState } from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'



const menu = {
  link1: 'Catálogo',
  link2: 'Sistema de gestión',
  link3: 'Contáctanos',
}


const greeting = 'Mi tienda de telefonos celulares'


const App = () => {

  const [cantidadCarrrito, setCantidadCarrrito] = useState(0)

  return (
    <>
      <NavBar menu={menu} cantidadCarrrito={cantidadCarrrito} />
      <ItemListContainer greeting={greeting} setCantidadCarrrito={setCantidadCarrrito} />
    </>
  )
}

export default App

