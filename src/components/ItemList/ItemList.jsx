import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import { Roller } from 'react-awesome-spinners'


const ItemList = ({objetos, cargando, setCantidadCarrrito , setItemSelected}) => {
    


    return (
        <div className="d-flex justify-content-center gap-5 row">
            {cargando === true
                ? 
                
                <Roller color={'#9932cc'}/>

                : 
                
                objetos.map((objeto, index) => {
                      return <Item key={index} objeto={objeto} setCantidadCarrrito={setCantidadCarrrito} setItemSelected={setItemSelected} />;
                  })}
        </div>
    );
};

export default ItemList;
