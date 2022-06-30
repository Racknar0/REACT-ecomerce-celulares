import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { Roller } from 'react-awesome-spinners'
import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore/lite';
import { useNavigate } from "react-router-dom";


const ItemDetailContainer = ({setCantidadCarrrito}) => {

    const [objeto, setObjeto] = useState({});
    const [cargando, setCargando] = useState(true);

    const [prodx, setProdx] = useState({});


    const{id} = useParams();
    //console.log(id);

    /* useEffect(() => {
        const db = getFirestore();
        const queryItem = doc(db, 'productos', 'AltTuShoF9CmNXlkdziN');
        getDoc(queryItem)
            .then((data) => setProdx({ id: data.id, ...data.data() }))
            .catch((err) => console.log(err));
    }, []);
    console.log(prodx); */


    
    useEffect(() => {
        if (id) {
            setCargando(true);
            /* fetch('/data/data.json')
            .then((resp) => resp.json())
            .then((resp) => {
                setTimeout(() => {
                    setObjeto(...resp.filter(objeto => objeto.id === id));
                    setCargando(false);
                }, 2000);
            }); */
            const db = getFirestore();
            const queryItem = doc(db, 'productos', id);
            getDoc(queryItem)
                .then((data) => {
                    setObjeto({ id: data.id, ...data.data() })
                    setCargando(false);
            })
                .catch((err) => console.log(err));

        } else {
            /* fetch('/data/data.json')
            .then((resp) => resp.json())
            .then((resp) => {
                setTimeout(() => {
                    setObjeto(resp);
                    setCargando(false);
                }, 2000);
            }); */
            Navigate('../cart');
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
