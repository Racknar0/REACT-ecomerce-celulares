import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

import './cart.css'

const Cart = () => {
    const { cart, clearCart, removeFromCart } = useContext(CartContext);

    return (
        <div>
            <h1>Carrito</h1>
            <button className="btn btn-danger" onClick={clearCart}>
                LIMPIAR CARRITO
            </button>
            <div className="d-flex flex-wrap justify-content-center gap-4">
                {cart.map((objeto) => (
                    <div key={objeto.id} className="cartContainer borderx">
                        <div className="card shadow-sm borderx">
                            <img
                                src={objeto.imagen}
                                className="card-img-top borderx"
                                alt={objeto.categoria}
                            />
                            <div className="card-body">
                                <div className="clearfix mb-3">
                                    <span className="float-start badge rounded-pill bg-primary">
                                        {objeto.nombre}
                                    </span>
                                    <span className="float-end price-hp">
                                        {objeto.precio}
                                    </span>
                                </div>
                                <h5 className="card-titlex">
                                    {objeto.descripcion}
                                </h5>
                                <h5>Cantidad:{objeto.cantidad} </h5>
                                <div className="text-center my-4">
                                    <button className="btn btn-warning" onClick={ () => {removeFromCart(objeto)} }>
                                        Eliminar del carrito
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
