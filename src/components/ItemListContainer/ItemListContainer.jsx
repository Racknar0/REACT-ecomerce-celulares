import React, { useEffect, useState } from 'react';
//import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';



const ItemListContainer = ({ greeting, setCantidadCarrrito }) => {
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
        <div className="d-flex justify-content-center align-items-center flex-column">
            {/* <ItemCount setCantidadCarrrito={setCantidadCarrrito} stock={10} initial={2} />
      <br /> */}
            <h1 className="mt-5 mb-4">
                Listado de Articulos en nuestras tiendas
            </h1>
            <ItemList objetos={objetos} cargando={cargando} setCantidadCarrrito={setCantidadCarrrito} />
        </div>
    );
};

export default ItemListContainer;
