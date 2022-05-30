import React from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'



const menu = {
  link1: 'Catálogo',
  link2: 'Sistema de gestión',
  link3: 'Contáctanos',
}


const greeting = 'Mi tienda de telefonos celulares'


const App = () => {
  return (
    <>
      <NavBar menu={menu} />
      <ItemListContainer greeting={greeting} />
    </>
  )
}

export default App

