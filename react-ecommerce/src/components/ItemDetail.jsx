import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { ItemCount } from './ItemCount';
import "./styles/ItemDetail.css"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';



export const ItemDetail = ({ item }) => {

    const { onAdd } = useContext(CartContext)

    const add = (quantity) =>{
        onAdd(item, quantity);
    }

    if (!item) {
        return null; 
    }
    return (
        <div className="col-md-4 mx-auto">
            <div className="card_container_detail">
                <Card className='bg-dark h-100'>
                    <Card.Img variant="top" src={item.pictureUrl} className='img__size' />
                    <Card.Body className='bg-dark text-light text-center'>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.alt}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className='bg-dark text-light text-center'>Precio: ${item.price}</ListGroup.Item>
                        <ListGroup.Item className='bg-dark text-light text-center'>{item.description}</ListGroup.Item>
                        <ListGroup.Item className='bg-dark text-light text-center'>Stock disponible: {item.stock}</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                    <Link to={`/items/${item.id}`} style={{ textDecoration: 'none' }} >
                        <ItemCount onAdd={add} stock={item.stock} initial={1} />
                    </Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}