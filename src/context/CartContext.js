import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
});

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);

    console.log(cart);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}]);
            setTotalQuantity(prevTotalQuantity => prevTotalQuantity + quantity); // Actualiza totalQuantity al agregar un artículo
        } else {
            console.error('El producto ya fue agregado');
        }
    }

    const removeItem = (itemId) => {
        const removedItem = cart.find(item => item.id === itemId);
        if (removedItem) {
            const newCart = cart.filter(item => item.id !== itemId);
            setCart(newCart);
            setTotalQuantity(prevTotalQuantity => prevTotalQuantity - removedItem.quantity); // Actualiza totalQuantity al quitar un artículo
        }
    }

    const clearCart = () => {
        setCart([]);
        setTotalQuantity(0); // Reinicia totalQuantity al limpiar el carrito
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    }

    return (
        <CartContext.Provider value={{cart, totalQuantity, addItem, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}
