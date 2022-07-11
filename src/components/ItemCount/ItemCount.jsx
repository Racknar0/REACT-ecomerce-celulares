import React, { useEffect } from 'react';
import './itemCount.css';
import swal from 'sweetalert';

const ItemCount = ({
    setCantidadCarrrito,
    comprando,
    count,
    setCount,
    onAdd,
    stock,
}) => {
    const initial = 1;

    useEffect(() => {
        initial > 1 ? setCount(initial) : setCount(1);
        initial >= stock ? setCount(stock) : setCount(initial);
    }, [initial, stock]);

    const Aumentar = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const Disminuir = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleAddCarrito = () => {
        setCantidadCarrrito(count);
        comprando();
        onAdd();
        swal('Producto agregado al carrito', '', 'success');
    };

    return (
        <div className="contenedor_I-Count">
            <div className="d-flex flex-column justify-content-center align-items-center mt-2">
                <div className="d-flex bg-white contenedor_counter justify-content-center">
                    <div className="d-flex">
                        <div className="contenedor_boton_control">
                            <button
                                className="botones_control mr-5 text-white fw-bold"
                                onClick={Disminuir}
                            >
                                {' '}
                                -{' '}
                            </button>
                        </div>
                        <input
                            className="input_cart form-control"
                            type="text"
                            value={count}
                            readOnly
                        />
                        <div className="contenedor_boton_control">
                            <button
                                className="botones_control text-white fw-bold"
                                onClick={Aumentar}
                            >
                                {' '}
                                +{' '}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <button
                        className="btn mt-2 text-white fw-bold"
                        onClick={handleAddCarrito}
                    >
                        Agregar Al Carrito
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemCount;
