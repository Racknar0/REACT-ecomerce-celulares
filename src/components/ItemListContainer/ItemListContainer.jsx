import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { Roller } from 'react-awesome-spinners';
import {
    collection,
    getDocs,
    getFirestore,
    query,
    where,
} from 'firebase/firestore/lite';

const ItemListContainer = ({ setCantidadCarrrito, setItemSelected }) => {
    const [objetos, setObjetos] = useState([]);
    const [cargando, setCargando] = useState(true);

    const { categoriaId } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const queryCollection = collection(db, 'productos');
        setCargando(true);

        if (categoriaId) {
            //!Para traer filtrado por categoria
            const queryCollectionFilter = query(
                queryCollection,
                where('categoria', '==', categoriaId)
            );
            getDocs(queryCollectionFilter)
                .then((data) => {
                    setObjetos(
                        data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                    );
                    setCargando(false);
                })
                .catch((err) => console.log(err));
        } else {
            //!Para traer todos
            getDocs(queryCollection)
                .then((data) => {
                    setObjetos(
                        data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                    );
                    setCargando(false);
                })
                .catch((err) => console.log(err));
        }
    }, [categoriaId]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="d-flex justify-content-center align-items-center flex-column">
            <h1 className="mt-5 mb-4 text-white">
                Listado de Articulos en nuestras tiendas
            </h1>
            {cargando === true ? (
                <Roller color={'#9932cc'} />
            ) : (
                <ItemList
                    objetos={objetos}
                    cargando={cargando}
                    setCantidadCarrrito={setCantidadCarrrito}
                    setItemSelected={setItemSelected}
                />
            )}
            {objetos.length === 0 ? (
                <p className="text-center">'No hay articulos'</p>
            ) : null}
        </div>
    );
};

export default ItemListContainer;
