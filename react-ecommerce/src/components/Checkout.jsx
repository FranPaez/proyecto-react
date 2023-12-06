import { Container, Form, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import "./styles/Checkout.css"
import { CartContext } from "../contexts/CartContext";
import {getFirestore, collection, addDoc,} from "firebase/firestore";
import Swal from 'sweetalert2';


const initialValues ={
        name: "",
        email: "",
        confirmEmail: "",
        phone: "",
}

export const Payments = ({ cartItems, total }) => { 

    const { clear } = useContext(CartContext);
    const [buyer, setBuyer] = useState(initialValues);
    const [formIsValid, setFormIsValid] = useState(false);

    const handleChange = ({ target }) => {
        setBuyer((prevBuyer) => {
            const updatedBuyer = {
                ...prevBuyer,
                [target.name]: target.value,
            };
            const isValid =
                updatedBuyer.name.trim() !== "" &&
                updatedBuyer.email.trim() !== "" &&
                updatedBuyer.confirmEmail.trim() !== "" &&
                updatedBuyer.phone.trim() !== "";
    
            setFormIsValid(isValid);
    
            return updatedBuyer;
        });
    };

    const sendOrder = () => {
        if (!formIsValid) {
            alert("Por favor, complete todos los campos del formulario antes de finalizar la compra.");
            return;
        }

        const order = {
            buyer: {
                name: buyer.name,
                phone: buyer.phone,
                email: buyer.email,
            },
            items: cartItems.map((item) => ({
                id: item.id,
                title: item.title,
                price: item.price,
                quantity: item.quantity,
            })),
            total: total,
        };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then(({ id }) => {
        if (id) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Su orden: ' + id + ' ha sido completada!',
                showConfirmButton: true,
            });
            const tiempoEspera = 4000;
            setTimeout(() => {
                window.location.href = "/";
            }, tiempoEspera);
            clear();
        }
    });
};

return (
    <div>
        <Container className="form-container">
        <Form className="text-center" >
        <div className="form-sections">
            <div className="form-section"> 
                <h2 className="form__subtitle">Datos del comprador:</h2>
                <Form.Group>
                <Form.Label className="form__text">
                Nombre completo:
                <Form.Control  value={buyer.name} onChange={handleChange} className="form__box" 
                            type="text" placeholder="Nombre y apellido" name="name" required />
                </Form.Label>
                </Form.Group>
                <Form.Group>
                <Form.Label className="form__text">
                Correo electronico:
                <Form.Control  value={buyer.email} onChange={handleChange} className="form__box" 
                            type="text" placeholder="ejemplo@ejemplo.com" name="email" required />
                </Form.Label>
                </Form.Group>
                <Form.Group>
                <Form.Label className="form__text">
                Confirmacion de correo:
                <Form.Control  value={buyer.confirmEmail} onChange={handleChange} className="form__box" 
                            type="text" placeholder="ejemplo@ejemplo.com" name="confirmEmail" required />
                </Form.Label>
                </Form.Group>
                <Form.Group>
                <Form.Label className="form__text">
                Teléfono:
                <Form.Control value={buyer.phone} onChange={handleChange} className="form__box" 
                type="text" placeholder="1122334455" name="phone" required />
                </Form.Label>
                </Form.Group>
            </div>
            </div>
            </Form>
            </Container>
            <div className="text-center payments__btn">
                <Button type="button" variant="success" onClick={sendOrder}>
                Finalizar compra
                </Button>
            </div>
        </div>
    )
}