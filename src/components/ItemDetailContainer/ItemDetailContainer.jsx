import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { Roller } from 'react-awesome-spinners';
import {
    getFirestore,
    doc,
    getDoc,
} from 'firebase/firestore/lite';

const ItemDetailContainer = ({ setCantidadCarrrito }) => {
    const [objeto, setObjeto] = useState({});
    const [cargando, setCargando] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            setCargando(true);
            const db = getFirestore();
            const queryItem = doc(db, 'productos', id);
            getDoc(queryItem)
                .then((data) => {
                    setObjeto({ id: data.id, ...data.data() });
                    setCargando(false);
                })
                .catch((err) => console.log(err));
        } else {
            Navigate('../cart');
        }
    }, [id]);

    return (
        <div className="d-flex flex-column align-items-center">
            {cargando === true ? (
                <Roller color={'#9932cc'} />
            ) : (
                <ItemDetail
                    objeto={objeto}
                    setCantidadCarrrito={setCantidadCarrrito}
                />
            )}
        </div>
    );
};

export default ItemDetailContainer;
