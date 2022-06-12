import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [objetos, setObjetos] = useState({});
    const [cargando, setCargando] = useState(true);


    
    useEffect(() => {
        fetch('./data/data.json')
            .then((resp) => resp.json())
            .then((resp) => {
                setTimeout(() => {
                    setObjetos(resp);
                    setCargando(false);
                }, 2000);
            });
            
    }, []);

  return (
    <div>
        {cargando === true ? <p className='text-center'>'Cargando...'</p> : <ItemDetail objetos={objetos} />}
    </div>
  )
}

export default ItemDetailContainer
