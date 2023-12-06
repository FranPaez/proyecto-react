import { Container, Table, Button } from "react-bootstrap";
import "../styles/Carrito.css";
import "../styles/ItemCount.css";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import { Payments } from "../Checkout";


export const Carrito = () => {
    const { clear, items, onRemove, onIncrement, onDecrement} = useContext(CartContext);

    const total = items.reduce(
        (accumulator, actualValue) => accumulator + (actualValue.quantity * actualValue.price),
    0
    );

    const handleIncrement = (itemId) => {
        onIncrement(itemId);
    };

    const handleDecrement = (itemId) => {
        onDecrement(itemId);
    };


    return (
<div>
    <div>
        <h1 className="carTitle">Carrito de compras</h1>
        <Container className="mt-4">
        {items && items.length > 0 ? (
            items.map((item) => (
            <div key={item.id}>
                <Table variant="dark">
                <thead>
                    <tr>
                    <th></th>
                    <th className="text-center">Producto</th>
                    <th className="text-center">Precio</th>
                    <th className="text-center">Cantidad</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className="table__img">
                        <img
                            src={item.pictureUrl}
                            alt={item.title}
                            style={{ maxWidth: '100px', maxHeight: '100px' }}
                            />
                    </td>
                    <td className="text-center align-middle">{item.title}</td>
                    <td className="text-center align-middle">${item.price}</td>
                    <td className="text-center align-middle">
                    <div className="itemCount__container">
                        <Button size="sm" onClick={() => handleDecrement(item.id, item.quantity)}>-</Button>
                        <p className="itemCount__p">{item.quantity}</p>
                        <Button size="sm" onClick={() => handleIncrement(item.id, item.stock)}>+</Button>
                    </div>
                    </td>
                    <td className="text-center align-middle">
                        <Button variant="danger" onClick={() => onRemove(item.id)}>Eliminar</Button>
                    </td>
                    </tr>
                </tbody>
                </Table>
            </div>
            ))
        ) : (
            <div className="text-center">
            <h2 className="carTitle">No hay productos seleccionados.</h2>
            <Link to="/">
            <Button variant="success">Ir a la Página de Productos</Button>
            </Link>
            </div>
        )}
        {items && items.length > 0 && (
        <div>
            <div className="d-flex justify-content-between btns">
            <Button variant="success" onClick={clear}>Vaciar Carrito</Button>
            <h3 className="totalBuy">Total: ${total}</h3>
            </div>
            <Payments cartItems={items} clear={clear} total={total} />
        </div>
)}
        </Container>
    </div>
</div>
    );
};