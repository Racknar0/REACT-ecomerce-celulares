import React, { useEffect, useState } from 'react';
import './itemCount.css';

const ItemCount = ({stock, initial, setCantidadCarrrito}) => {

    const [count, setCount] = useState(1);

    useEffect(() => {

        initial > 1 ? setCount(initial) : setCount(1);
        initial >= stock ? setCount(stock) : setCount(initial);
        
    }, [ initial, stock ]);

    const Aumentar = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const Disminuir = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }


    const handleAddCarrito = () => {
        setCantidadCarrrito(count);
        //console.log(count);
    }


    return (
        <div className="contenedor_I-Count">
            {/* <div>
                <p className='text-center'>Camisa Tigger</p>
            </div> */}
            <div className='d-flex flex-column justify-content-center align-items-center mt-2'>
                <div className="d-flex bg-white contenedor_counter justify-content-center">
                    <div className="d-flex">
                    <div className='contenedor_boton_control'><button className="botones_control mr-5" onClick={Disminuir}> - </button></div>
                        <input className="input_cart form-control" type="text" value={count} readOnly />
                        <div className='contenedor_boton_control'><button className="botones_control" onClick={Aumentar}> + </button></div>
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
