import { useEffect, useState, useContext} from 'react';
import { useParams } from 'react-router-dom';
import {Container} from 'react-bootstrap';
import { ItemList } from './ItemList.jsx';
import "./styles/ItemListContainer.css"
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore'


export const ItemListContainer = (props) => {

    const [items, setItems] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
    
        const refCollection = !id 
        ? collection(db, "items")
        : query(collection(db, "items"), where("categoryId", "==", id));
    
        getDocs(refCollection).then((snapshot) => {
            if (snapshot.size === 0) console.log("no results");
            else
            setItems(
            snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        })
            );
        });
    }, [id]);
    return (
    <Container className="mt-4">
        <h1 className='h1__itemlist'>
            {props.greeting}
        </h1>
        <ItemList items={items} />
    </Container>);
}