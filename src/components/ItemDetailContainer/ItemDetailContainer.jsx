import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { Roller } from 'react-awesome-spinners'

const ItemDetailContainer = ({setCantidadCarrrito}) => {

    const [objeto, setObjeto] = useState({});
    const [cargando, setCargando] = useState(true);

    const{id} = useParams();
    //console.log(id);
    
    useEffect(() => {
        if (id) {
            
            fetch('/data/data.json')
            .then((resp) => resp.json())
            .then((resp) => {
                setTimeout(() => {
                    setObjeto(...resp.filter(objeto => objeto.id === id));
                    setCargando(false);
                }, 2000);
            });

        } else {
            fetch('/data/data.json')
            .then((resp) => resp.json())
            .then((resp) => {
                setTimeout(() => {
                    setObjeto(resp);
                    setCargando(false);
                }, 2000);
            });
        }
    }, [id]);

    //console.log(objeto);
  return (
    <div className='d-flex flex-column align-items-center'>
        {cargando === true ? 
        
        <Roller color={'#9932cc'}/>
        
        : 
        
        <ItemDetail objeto={objeto} setCantidadCarrrito={setCantidadCarrrito} />}
    
    </div>
  )
}

export default ItemDetailContainer
