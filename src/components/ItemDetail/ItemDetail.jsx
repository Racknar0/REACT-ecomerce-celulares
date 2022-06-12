import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({objetos}) => {
    console.log(objetos[0]);
  return (
    <div>
        <h1 className='text-center mt-5'>Detalle del producto</h1>
        <div className="d-flex justify-content-center gap-5 row">
            <div className="col-md-6 d-flex flex-column align-items-center bordes-card">
                <h2>{objetos[0].nombre}</h2>
                <img src={objetos[0].imagen} alt="imagen" className="img-fluid imagen" />
                <p><span className='descripcion'>Descripcion:</span> {objetos[0].descripcion}</p>
                <p><span className='descripcion'>Precio:</span> {objetos[0].precio}</p>
                <p><span className='descripcion'>Stock:</span> {objetos[0].stock}</p>
            </div>    
        </div>
    </div>
  )
}

export default ItemDetail
