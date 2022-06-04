import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = ({greeting , setCantidadCarrrito}) => {



  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>
      {greeting}
      <ItemCount setCantidadCarrrito={setCantidadCarrrito} stock={10} initial={4} />
    </div>
  )
}

export default ItemListContainer
