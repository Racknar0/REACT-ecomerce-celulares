import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import "./Item.css"


const Item = ({objeto, index, setCantidadCarrrito, setItemSelected}) => {

    return (
        <div key={index} className="card redondear col-12 col-md-4" style={{ width: '18rem' }}>
            <img src={objeto.imagen} className="card-img-top" alt="..." />
            <div className="card-body">
                <h4 className="card-title text-center">{objeto.nombre}</h4>
                <p className="card-text text-center pt-2 pb-2">{objeto.descripcion}</p>
                <h5><span className='fw-bold'>Precio:</span> {objeto.precio}</h5>
                <h5><span className='fw-bold'>Stock:</span> {objeto.stock}</h5>
                <Link to={`../detalles/${objeto.id}`} replace>
                    <button className="btn button">
                        <p className='text-white fw-bold'>
                            Ver detalles
                        </p>
                    </button>
                </Link>

                {/* <ItemCount stock={objeto.stock} initial={1} setCantidadCarrrito={setCantidadCarrrito} /> */}
            </div>
        </div>
    );
};

export default Item;
