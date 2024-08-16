import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
  const {todos} = props  
  return (
    <ul className='main'>
       {todos.map((todo,todoIndex) => {
            return (
                // 将 props 对象的所有属性都传递给 TodoCard 组件作为独立的属性。
               <TodoCard {...props} key={todoIndex} index={todoIndex}>
                    <p>{todo}</p>
               </TodoCard> 
            )
       })}
    </ul>
    
  )
}
