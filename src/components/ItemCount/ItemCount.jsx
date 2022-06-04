import React, { useEffect, useState } from 'react';
import './itemCount.css';

const ItemCount = ({stock, initial, setCantidadCarrrito}) => {

    const [count, setCount] = useState(1);

    useEffect(() => {
        if (initial > 1) {
            setCount(initial);
        }
    }, []);

    const Aumentar = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const Disminuir = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }


    const handleAddCarrito = () => {
        setCantidadCarrrito(count);
        console.log(count);
    }


    return (
        <div className="contenedor_I-Count">
            <div>
                <p className='text-center'>Camisa Tigger</p>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <div className="d-flex bg-white mx-5 justify-content-center">
                    <div className="d-flex">
                        <button className="btn btn-primary mr-5" onClick={Disminuir}> - </button>
                        <input className="input_cart form-control my-1 mx-3" type="text" value={count} readOnly />
                        <button className="btn btn-primary" onClick={Aumentar}> + </button>
                    </div>

                </div>
                <div>
                    <button className='btn btn-primary mt-2' onClick={handleAddCarrito}>Agregar Al Carrito</button>
                </div>
            </div>
        </div>
    );
};

export default ItemCount;
