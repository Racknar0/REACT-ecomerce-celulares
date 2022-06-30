import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';


import './cart.css'

const CartWidget = () => {

  
  const { totalCart } = useContext(CartContext);
  console.log(totalCart);

  return (
    <div className='ms-4 me-4 cart_container'>
        <div className='d-flex justify-content-center align-items-center'>
            <i className={totalCart > 0 ? "bi bi-cart" : "bi bi-cart-x" }></i> 
            <p className='m-0 ps-2 fs-4'>{totalCart > 0 ? totalCart : null}</p>
        </div>
    </div>
  )
}

export default CartWidget

