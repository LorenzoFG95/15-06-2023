import './index.css'
import { useState } from 'react';

const Item = (currentItem) => {
    const [isCompleted, toggleCompleted] = useState(currentItem.data.completed);
    const onCheck = () => toggleCompleted(!isCompleted);
    const [deleted, del] = useState(false);
    const onDelete = () => del(true)
    
    if (deleted) {return};
    return(
    <li className={`Todo__list--item${isCompleted && " completed" || ""}`} key={currentItem.data.id}>
         <input type="checkbox" checked={isCompleted} onChange={onCheck} />
         {currentItem.data.title}
         <button className='del' onClick={onDelete}>x</button>
    </li>
    )
}

export default Item