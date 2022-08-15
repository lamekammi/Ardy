import * as itemsAPI from '../../utilities/items-api';

export default function ItemList() {
    const items = item.map((item, idx) => {
        <div>
            <ul>
                <li>Item: {item.name}
                    Price: {item.price}</li>
            </ul>
        </div>
    });
    return <p>{items}</p>
}