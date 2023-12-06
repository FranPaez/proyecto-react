import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "./styles/Item.css"
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export const Item = ({ item }) => {
    return (
        <div className="col-md-4 mb-4 justify-content-center" >
            <div className="card-container">
                <Card className='bg-dark h-100'>
                    <Card.Img variant="top" src={item.pictureUrl} className='img-fluid' />
                    <Card.Body className='bg-dark text-light text-center'>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.alt}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className='bg-dark text-light text-center'>Precio: ${item.price}</ListGroup.Item>
                        <ListGroup.Item className='bg-dark text-light text-center'>{item.description}</ListGroup.Item>
                    </ListGroup>
                    <Card.Body className='mx-auto bnt__edit'>
                    <Link to={`/items/${item.id}`}>
                        <Button className='text-center' variant="primary">Ver más información</Button>
                    </Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};