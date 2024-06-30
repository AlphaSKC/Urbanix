// src/contexts/CartContext.tsx
import React, { createContext, useContext } from 'react';
import { useCart } from '../hooks/useCart';
import type { Guitar, CartItem } from '../types';

type CartContextType = {
    data: Guitar[],
    cart: CartItem[],
    addToCart: (item: Guitar) => void,
    removeFromCart: (id: Guitar['id']) => void,
    decreaseQuantity: (id: Guitar['id']) => void,
    increaseQuantity: (id: Guitar['id']) => void,
    clearCart: () => void,
    isEmpty: boolean,
    cartTotal: number
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const cart = useCart();

    return (
        <CartContext.Provider value={cart}>
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCartContext must be used within a CartProvider');
    }
    return context;
};
