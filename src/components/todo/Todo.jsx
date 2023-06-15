import './index.css'
import Item from '../item'
import Title from '../title'
import { todos } from '../../mock/todos'
import { useState, useEffect } from 'react'
import { titlePick } from '../../utils/fn'

const Todo = ({itemLength = 999}) => {
 const [todoList, setTodoList] = useState(todos);
 useEffect(()=> {
     setTodoList(todoList.filter((todo)=> todo.title.length <= itemLength))
 }, [])

    return (
        <div className='Todo'>
                <Title text={titlePick(itemLength)}/>
            <ul className="Todo__list">
                {todoList.map((item) => (
                    <Item data={item} key={item.id}/>
                ))}
            </ul>
        </div>
    )
}

export default Todo