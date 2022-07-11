import { useEffect } from 'react';
import { createContext, useState } from 'react';

export const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {
    // Estados y funciones
    const [cart, setCart] = useState([]);
    const [totalCart, setTotalCart] = useState(0);
    const [information, setInformation] = useState({});

    useEffect(() => {
        setTotalCart(
            cart.reduce((total, producto) => total + producto.cantidad, 0)
        );
    }, [cart]);

    const addToCart = (item) => {
        if (cart.find((producto) => producto.id === item.id)) {
            setCart(
                cart.map((producto) => {
                    if (producto.id === item.id) {
                        producto.cantidad += item.cantidad;
                    }
                    return producto;
                })
            );
        } else {
            setCart([...cart, item]);
        }
    };

    const removeFromCart = (item) => {
        setCart(cart.filter((cartItem) => cartItem !== item));
        setTotalCart(
            cart.reduce((total, producto) => total + producto.cantidad, 0)
        );
    };

    const clearCart = () => {
        setCart([]);
        setTotalCart(0);
    };

    const addInformation = (info) => {
        setInformation(info);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                clearCart,
                totalCart,
                removeFromCart,
                addInformation,
                information,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
