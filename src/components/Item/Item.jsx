import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

const Item = ({objeto, index, setCantidadCarrrito, setItemSelected}) => {

    return (
        <div key={index} className="card col-12 col-md-4" style={{ width: '18rem' }}>
            <img src={objeto.imagen} className="card-img-top" alt="..." />
            <div className="card-body">
                <h4 className="card-title text-center">{objeto.nombre}</h4>
                <p className="card-text">{objeto.descripcion}</p>
                <h5>Precio: {objeto.precio}</h5>
                <h5>Stock: {objeto.stock}</h5>
                <Link to={`../detalles/${objeto.id}`}  className="btn btn-primary" replace>
                    <button className="btn btn-primary">
                        Ver detalles del producto
                    </button>
                </Link>

                {/* <ItemCount stock={objeto.stock} initial={1} setCantidadCarrrito={setCantidadCarrrito} /> */}
            </div>
        </div>
    );
};

export default Item;
