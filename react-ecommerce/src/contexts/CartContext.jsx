import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    const clear = () => setItems([]);

    const onRemove = (id) => {
        const filterItems = items.filter((item) => item.id !== id);
        setItems(filterItems);
    };

    const onAdd = (item, quantity) => {
        const exists = items.some((i) => i.id === item.id);

        if (exists) {
            const updatedItems = items.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
            );
            setItems(updatedItems);
        } else {
            setItems((prev) => [...prev, { ...item, quantity }]);
        }
    };

    const onIncrement = (id) => {
        const item = items.find((i) => i.id === id);
    
        if (item && item.quantity < item.stock) {
            const updatedItems = items.map((i) =>
                i.id === id ? { ...i, quantity: i.quantity + 1 } : i
            );
            setItems(updatedItems);
        }
    };
    

    const onDecrement = (id) => {
        const updatedItems = items.map((item) =>
            item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        );
        setItems(updatedItems);
    };

    return (
        <CartContext.Provider value={{ items, clear, onAdd, onRemove, onIncrement, onDecrement }}>
            {children}
        </CartContext.Provider>
    );
};