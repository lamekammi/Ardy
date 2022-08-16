import * as itemsAPI from '../../utilities/items-api';
import {useState } from 'react';

// needs to be able to add items
//      -name
//      -qty
//      -price

export default function AddItem({ user, setUser }) {
    const [item, setItem] = useState({});
    const [error, setError] = useState('');

    function handleChange(evt) {
        setItem({ ...item, [evt.target.name]: evt.target.value });
        setError('');
    }

    async function handleAddNewItem() {
        const addingItem = await itemsAPI.newItem();
    }

    return(
        <div>
            <div className="form-container">
                <form autoComplete="off" onSubmit={handleAddNewItem}>
                    <label>Item Name</label>
                    <input type="text" name="email" value={item.name} onChange={handleChange} required />
                    <label>Price</label>
                    <input type="text" name="price" value={item.price} onCahnge={handleChange} required />
                    <button type="submit">Add Item</button>
                </form>
            </div>
            <p className="error-message">&nbsp;{error}</p>
        </div>
    )
}