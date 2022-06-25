import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import { Roller } from 'react-awesome-spinners'


const ItemListContainer = ({ setCantidadCarrrito, setItemSelected }) => {
    const [objetos, setObjetos] = useState({});
    const [cargando, setCargando] = useState(true);


    const { categoriaId } = useParams();
    //console.log(categoriaId);

    

    
    useEffect(() => {
        if (categoriaId) {
            
            fetch('/data/data.json')
            .then((resp) => resp.json())
            .then((resp) => {
                setTimeout(() => {
                    setObjetos(resp.filter(objeto => objeto.categoria === categoriaId));
                    setCargando(false); 
                }, 2000);
            }); 

        } else {

            fetch('/data/data.json')
            .then((resp) => resp.json())
            .then((resp) => {
                setTimeout(() => {
                    setObjetos(resp);
                    setCargando(false);
                }, 2000);
            });
        }



    }, [categoriaId]);// eslint-disable-line react-hooks/exhaustive-deps


    //console.log(objetos);


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
