import React from 'react'

export default function TodoCard(props) {
    // const { children } = props 是一种解构赋值语法，
    // 它从 props 对象中提取 children 属性，
    // 并将其赋值给一个变量 children。这简化了访问 props.children 的过程。
    const {children,handleDeleteTodo,index, handleEditTodo} = props
    return (
        <li className="todoItem">
            {children}
   
            <div className="actionsContainer">
                <button onClick={() => {handleEditTodo(index)}}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>

                <button onClick={() => {
                    handleDeleteTodo(index)
                }}>
                <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </li>   
    )
}
