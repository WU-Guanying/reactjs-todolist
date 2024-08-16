import { useState } from "react"

export default function TodoInput(props){
    const {handleAddTodos,todoValue,setTodoValue} = props
   
    return (
        <header>
            {/* e.target：获取触发事件的元素（在这个例子中就是输入框）。
            e.target.value：获取输入框的当前值（用户输入的内容） 
            当输入框的值变化时调用 handleChange} */}
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} placeholder="enter to do..."/>


            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue("") //恢复文本框为空白
            }}>Add</button>
        </header>
    )
    
}  