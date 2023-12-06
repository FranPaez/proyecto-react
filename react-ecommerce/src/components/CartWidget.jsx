import React from 'react';
import "./styles/CartWidget.css";
import car from "../assets/carrito.png";
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from "../contexts/CartContext"


export const CartWidget = () => {

    const { items } = useContext(CartContext);
    
    const total = items.reduce(
        (accumulator, actualValue) => accumulator + actualValue.quantity,
    0
    );

return (
    <div className='car__container'>
    <NavLink to="/cart">
    <img src={car} alt="Carrito" className="nav__car" />
    </NavLink>
    <span className='car__count'>{total}</span>
    </div>
);
}