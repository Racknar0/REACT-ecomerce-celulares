import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import { Roller } from 'react-awesome-spinners'
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore/lite';


const ItemListContainer = ({ setCantidadCarrrito, setItemSelected }) => {
    const [objetos, setObjetos] = useState({});
    const [cargando, setCargando] = useState(true);


    const { categoriaId } = useParams();
    //console.log(categoriaId);


    //Para traer uno solo
/*     useEffect(() => {
        const db = getFirestore();
        const queryItem = doc(db, 'productos', 'AltTuShoF9CmNXlkdziN');
        getDoc(queryItem)
            .then((data) => setProdx({ id: data.id, ...data.data() }))
            .catch((err) => console.log(err));
    }, []);
    console.log(prodx); */

   

    

    
    useEffect(() => {
        if (categoriaId) {
            //!Para traer filtrado por categoria
            setCargando(true);
            /* fetch('/data/data.json')
            .then((resp) => resp.json())
            .then((resp) => {
                setTimeout(() => {
                    setObjetos(resp.filter(objeto => objeto.categoria === categoriaId));
                    setCargando(false); 
                }, 2000);
            });  */
            const db = getFirestore();
            const queryCollection = collection(db, 'productos');
            const queryCollectionFilter = query(queryCollection, where('categoria', '==', categoriaId));
            getDocs(queryCollectionFilter)
                .then((data) => {
                    setObjetos(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
                    setCargando(false);
                })
                .catch((err) => console.log(err));
        } else {
            //!Para traer todos
            /* fetch('/data/data.json')
            .then((resp) => resp.json())
            .then((resp) => {
                setTimeout(() => {
                    setObjetos(resp);
                    setCargando(false);
                }, 2000);
            }); */
            const db = getFirestore();
            const queryCollection = collection(db, 'productos');
            getDocs(queryCollection)
                .then((data) => {
                    setObjetos(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
                    setCargando(false);
                })
                .catch((err) => console.log(err))
        }

    }, [categoriaId]);// eslint-disable-line react-hooks/exhaustive-deps


    console.log(objetos);


    return (
        <div className="d-flex justify-content-center align-items-center flex-column">
            <h1 className="mt-5 mb-4 text-white">
                Listado de Articulos en nuestras tiendas
            </h1>
            {cargando === true ? 
            
            <Roller color={'#9932cc'}/>
            
            : 
            
            <ItemList objetos={objetos} cargando={cargando} setCantidadCarrrito={setCantidadCarrrito} setItemSelected={setItemSelected} />}
            { objetos.length === 0 ? <p className='text-center'>'No hay articulos'</p> : null}
        </div>
    );
};

export default ItemListContainer;
