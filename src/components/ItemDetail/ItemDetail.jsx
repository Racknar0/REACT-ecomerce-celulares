import React, { useState } from 'react'
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { CartContext } from '../../contexts/CartContext';

import { Roller } from 'react-awesome-spinners'

import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'



const ItemDetail = ({ objeto, setCantidadCarrrito }) => {
    let navigate = useNavigate();
    const { cart, addToCart } = useContext(CartContext);

    const [count, setCount] = useState(1);

    const { nombre, descripcion, imagen, precio, stock } = objeto;

    //console.log(cart)

    const [cargando, setCargando] = useState(true);
    setTimeout(() => {
        setCargando(false);
    }, 500);

    const [isComprando, setIsComprando] = useState(true);

    const comprando = () => {
        setIsComprando(!isComprando);
    };

    const navigateCarrito = () => {
        navigate('../cart');
    };

   const onAdd = () => {
      addToCart({
        ...objeto,
        cantidad: count
      })

   }
   


    return (
        <div className='d-flex flex-column align-items-center'>
            <h1 className="text-center mt-5 text-white">Detalles del producto</h1>
            {cargando === true ? 
            (
                <Roller color={'#9932cc'}/>
            ) 
            
            : 
            
            (
                <div className="d-flex justify-content-center gap-5 row">
                    <div className="col-md-6 d-flex flex-column align-items-center bordes-card tajeta">
                        <h2>{nombre}</h2>
                        <img
                            src={`${imagen}`}
                            alt="imagen"
                            className="img-fluid imagen"
                        />
                        <p>
                            <span className="descripcion">Descripcion:</span>{' '}
                            {descripcion}
                        </p>
                        <p>
                            <span className="descripcion">Precio:</span>{' '}
                            {precio}
                        </p>
                        <p>
                            <span className="descripcion">Stock:</span> {stock}
                        </p>

                        {isComprando ? (
                            <ItemCount
                                stock={objeto.stock}
                                count={count}
                                setCount={setCount}
                                initial={1}
                                setCantidadCarrrito={setCantidadCarrrito}
                                comprando={comprando}
                                onAdd={onAdd}
                            />
                        ) : (
                            <div className="d-flex">
                                <button
                                    onClick={comprando}
                                    className="btn mt-2 mx-1"
                                >
                                    Comprar Más
                                </button>
                                <button
                                    onClick={navigateCarrito}
                                    className="btn mt-2 mx-1"
                                >
                                    Ir Al Carrito
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ItemDetail
