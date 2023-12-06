import "./styles/ItemCount.css";
import Button from 'react-bootstrap/Button';
import { useState } from "react";

export const ItemCount = ({ onAdd, stock, initial }) => {
    const [count, setCount] = useState(initial);

    const handleIncreaseCount = () => {
        if (stock > count) setCount(prev => prev + 1);
    }

    const handleDecreaseCount = () => {
        if (count > 1) setCount(prev => prev - 1);
    }

    const handleAdd = () => {
        onAdd(count)
        setCount(initial)
    }

    return (
        <>
            <div className="itemCount__container">
                <Button size="sm" onClick={handleDecreaseCount}>-</Button>
                <p className="itemCount__p">{count}</p>
                <Button size="sm" onClick={handleIncreaseCount}>+</Button>
            </div>
            <Button onClick={handleAdd}>Agregar al carrito</Button>
        </>
    );
};