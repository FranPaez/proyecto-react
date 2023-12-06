import { Item } from './Item'

export const ItemList = ({ items }) => {
    return (
        <div className="container">
            <div className='row justify-content-center'>
                {items.map(item => (
                    <Item key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}