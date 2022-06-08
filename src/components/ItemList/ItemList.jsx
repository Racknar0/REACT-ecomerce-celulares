import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const objets = [
    {
        nombre: 'Samsung Galaxy S22',
        descripcion:
            'Los biseles delgados fluyen en un marco pulido y simétrico para una pantalla amplia y equilibrada.',
        precio: '$3,800.000',
        stock: 10,
        imagen: './img/cels/samsung-galaxy-s22-1.png',
    },
    {
        nombre: 'iPhone 13',
        descripcion:
            'Una pantalla Super Retina XDR con ProMotion que ofrece una experiencia rápida y fluida.',
        precio: '$3,800.000',
        stock: 5,
        imagen: './img/cels/iPhone-13.png',
    },
    {
        nombre: 'Motorola Moto G100',
        descripcion:
            'Con una pantalla full HD+ de 6.7 pulgadas con tasa de refresco de 90Hz, el Moto G100 utiliza un procesador Snapdragon 870.',
        precio: '$2,067.000',
        stock: 11,
        imagen: './img/cels/Motorola-Moto-G100.png',
    },
    {
        nombre: 'OPPO Reno 6 5G',
        descripcion:
            'smartphone potente con buena calidad en la cámara y con un gran almacenamiento interno para los que guardan todo tipo de fotos, vídeos o aplicaciones.',
        precio: '$1,667.000',
        stock: 3,
        imagen: './img/cels/OPPO-Reno-6-5G.png',
    },
    {
        nombre: 'Samsung Galaxy A52s',
        descripcion:
            'smartphone potente con buena calidad en la cámara y con un gran almacenamiento interno para los que guardan todo tipo de fotos, vídeos o aplicaciones.',
        precio: '$1,667.000',
        stock: 3,
        imagen: './img/cels/Samsung-Galaxy-A52s.png',
    },
    {
        nombre: 'Samsung Galaxy S255',
        descripcion:
            'smartphone potente con buena calidad en la cámara y con un gran almacenamiento interno para los que guardan todo tipo de fotos, vídeos o aplicaciones.',
        precio: '$1,667.000',
        stock: 1,
        imagen: './img/cels/samsung-galaxy-s22-1.png',
    },
    {
        nombre: 'Samsung Galaxy S22 Ultra',
        descripcion:
            'smartphone potente con buena calidad en la cámara y con un gran almacenamiento interno para los que guardan todo tipo de fotos, vídeos o aplicaciones.',
        precio: '$1,667.000',
        stock: 7,
        imagen: './img/cels/samsung-galaxy-s22-ultra-1.png',
    },
    {
        nombre: 'Vivo V20',
        descripcion:
            'smartphone potente con buena calidad en la cámara y con un gran almacenamiento interno para los que guardan todo tipo de fotos, vídeos o aplicaciones.',
        precio: '$1,667.000',
        stock: 7,
        imagen: './img/cels/vivo-V20.png',
    },
    {
        nombre: 'Xiaomi 11T',
        descripcion:
            'smartphone potente con buena calidad en la cámara y con un gran almacenamiento interno para los que guardan todo tipo de fotos, vídeos o aplicaciones.',
        precio: '$1,667.000',
        stock: 7,
        imagen: './img/cels/Xiaomi-11T.png',
    },
    {
        nombre: 'Xiaomi 12 Pro',
        descripcion:
            'smartphone potente con buena calidad en la cámara y con un gran almacenamiento interno para los que guardan todo tipo de fotos, vídeos o aplicaciones.',
        precio: '$1,667.000',
        stock: 7,
        imagen: './img/cels/Xiaomi-12-Pro.png',
    },
];

const ItemList = () => {
    const [objetos, setObjetos] = useState({});
    const [cargando, setCargando] = useState(true);

    /*     useEffect(() => {
        fetch('')
            .then((response) => response.json())
            .then((data) => {
                setTimeout(() => {
                    setObjetos(data);
                    setCargando(false);
                }, 2000);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []); */

    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(objets);
        }, 2000);
    });

    useEffect(() => {
        promesa.then((data) => {
            setObjetos(data);
            setCargando(false);
        });
    }, []);

    return (
        <div className="d-flex justify-content-center gap-5 row">
            {cargando === true
                ? 'Cargando...'
                : objetos.map((objeto, index) => {
                      return <Item key={index} objeto={objeto} />;
                  })}
        </div>
    );
};

export default ItemList;
