import * as itemsAPI from '../../utilities/items-api';
import { useState } from 'react';

export default function EditItem({ user, setUser }) {
    const [item, setItem] = useState({});
    const [error, setError] = useState('');
  
    // Event Handler
    async function handleEditItem(id) {
        const updateItem = await itemsAPI.editItem(id);
    }

    function handleChange(evt) {
        setItem({ ...item, [evt.target.name]: evt.target.value });
        setError('');
    }


    return(
        <div>
            <div className="form-container">
                <form autoComplete="off" onSubmit={handleEditItem}>
                    <label>Item Name</label>
                    <input type="text" name="email" value={item.name} onChange={handleChange} required />
                    <label>Price</label>
                    <input type="text" name="price" value={item.price} onCahnge={handleChange} required />
                    <button type="submit">Edit Item</button>
                </form>
            </div>
            <p className="error-message">&nbsp;{error}</p>
        </div>
    )
}