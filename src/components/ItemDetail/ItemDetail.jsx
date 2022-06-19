import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'

const ItemDetail = ({objeto, setCantidadCarrrito}) => {

  let navigate = useNavigate();
    const {nombre, descripcion, imagen, precio, stock} = objeto;
   /*  console.log(objeto.objeto); */

    const [cargando, setCargando] = useState(true);
    setTimeout(() => {
        setCargando(false);
    }, 1000);


    const [isComprando, setIsComprando] = useState(true);

  const comprando = () => {
      setIsComprando(!isComprando);
  }

  const navigateCarrito = () => {
      navigate("../cart")
  }


  

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


                {
                  isComprando ? <ItemCount stock={objeto.stock} initial={1} setCantidadCarrrito={setCantidadCarrrito} comprando={comprando}/> 
                : 
                  <div className='d-flex'>
                          <button onClick={comprando} className='btn btn-primary mt-2 mx-1' >Comprar Más</button>
                          <button onClick={navigateCarrito} className='btn btn-primary mt-2 mx-1' >Ir Al Carrito</button>
                  </div>}

                

            </div>   
             
        </div>
      
      }
    </div>
  )
}

export default ItemDetail
