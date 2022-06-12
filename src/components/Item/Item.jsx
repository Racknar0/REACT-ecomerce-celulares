import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';

const Item = ({objeto, index, setCantidadCarrrito, setItemSelected}) => {





    const handleClick = () => {
        setItemSelected(objeto);
        //console.log(objeto);
    }


    return (
        <div key={index} className="card col-12 col-md-4" style={{ width: '18rem' }}>
            <img src={objeto.imagen} className="card-img-top" alt="..." />
            <div className="card-body">
                <h4 className="card-title text-center">{objeto.nombre}</h4>
                <p className="card-text">{objeto.descripcion}</p>
                <h5>Precio: {objeto.precio}</h5>
                <h5>Stock: {objeto.stock}</h5>
                <button onClick={handleClick} className="btn btn-primary">
                    Ver detalles del producto
                </button>
                <ItemCount stock={objeto.stock} initial={1} setCantidadCarrrito={setCantidadCarrrito} />
            </div>
        </div>
    );
};

export default Item;
