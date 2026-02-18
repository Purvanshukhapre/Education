import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('Patil Institute_cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('Patil Institute_cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (course) => {
        setCartItems(prevItems => {
            const isItemInCart = prevItems.find(item => item.id === course.id);
            if (isItemInCart) {
                return prevItems; // Already in cart, don't add again for now (single purchase per course)
            }
            return [...prevItems, course];
        });
    };

    const removeFromCart = (courseId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== courseId));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
    };

    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        cartCount: cartItems.length
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
