import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Container} from 'react-bootstrap';
import {ItemDetail} from './ItemDetail.jsx'
import { getFirestore, getDoc, doc } from 'firebase/firestore'


export const ItemDetailContainer = () => {

    const [item, setItem] = useState();

    const {id} = useParams();


    useEffect(() => {
    const db = getFirestore();

    const refDoc = doc(db, "items", id);

    getDoc(refDoc).then((snapshot) => {
        setItem({ id: snapshot.id, ...snapshot.data() });
    })
    }, [id]);
    return (
    <Container className="mt-4">
        <ItemDetail item={item} />
    </Container>);
}