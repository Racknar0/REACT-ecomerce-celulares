import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'

const ItemDetail = ({objeto, setCantidadCarrrito}) => {
    const {nombre, descripcion, imagen, precio, stock} = objeto;
   /*  console.log(objeto.objeto); */

    const [cargando, setCargando] = useState(true);
    setTimeout(() => {
        setCargando(false);
    }, 1000);

  return (
    <div>
        <h1 className='text-center mt-5'>Detalle del producto</h1>
        {cargando === true ? <p className='text-center'>'Cargando...'</p> : 

        <div className="d-flex justify-content-center gap-5 row">
            <div className="col-md-6 d-flex flex-column align-items-center bordes-card">
                <h2>{nombre}</h2>
                <img src={`${imagen}`} alt="imagen" className="img-fluid imagen" />
                <p><span className='descripcion'>Descripcion:</span> {descripcion}</p>
                <p><span className='descripcion'>Precio:</span> {precio}</p>
                <p><span className='descripcion'>Stock:</span> {stock}</p>
                <ItemCount stock={objeto.stock} initial={1} setCantidadCarrrito={setCantidadCarrrito} /> 
            </div>   
             
        </div>
      
      }
    </div>
  )
}

export default ItemDetail
