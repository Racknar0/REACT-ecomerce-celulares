import { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import './cart.css'

const CartWidget = () => {

  
  const { totalCart } = useContext(CartContext);
  

  return (
    <div className='ms-4 me-4 cart_container'>
        <div className='d-flex justify-content-center align-items-center'>
          <i className="bi bi-cart"></i> 
          <p className='m-0 text-white ps-2 fs-4'>{totalCart}</p>
        </div>
    </div>
  )
}

export default CartWidget
