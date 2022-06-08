import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({greeting , setCantidadCarrrito}) => {



  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>
      <ItemCount setCantidadCarrrito={setCantidadCarrrito} stock={10} initial={4} />
      <br />
      <ItemList />
    </div>
  )
}

export default ItemListContainer
