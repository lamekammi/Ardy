import * as itemsAPI from '../../utilities/items-api';
import { useState } from 'react';

export default function EditItem({ singleItem, user, setUser }) {
    const [item, setItem] = useState({name: singleItem.name, price: singleItem.price, id: singleItem._id});
    const [error, setError] = useState('');
  
    // Event Handler
    // async function handleEditItem(id, evt) {
    //     evt.preventDefault();
    //     const updateItem = await itemsAPI.editItem(id);
        
    // }

    async function handleUpdateItem(evt) {
        evt.preventDefault();
        const singleItemId = singleItem._id
        const updateItem2 = await itemsAPI.updateItem(item);
        console.log(updateItem2)
        setItem(updateItem2)
    }

    function handleChange(evt) {
        setItem({ ...item, [evt.target.name]: evt.target.value });
        setError('');
    }


    return(
        <div>
            <div className="form-container">
                <form autoComplete="off" onSubmit={handleUpdateItem}>
                    <label>Item Name</label>
                    <input type="text" name="name" value={item.name} onChange={handleChange} required />
                    <label>Price</label>
                    <input type="text" name="price" value={item.price} onChange={handleChange} required />
                    <button type="submit">Edit Item</button>
                </form>
            </div>
            <p className="error-message">&nbsp;{error}</p>
        </div>
    )
}