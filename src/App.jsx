import { useState, useEffect } from "react"
import TodoList from "./components/TodoList"
import TodoInput from "./components/TodoInput"

function App() {
  
  const [todos, setTodos] = useState([
    "Go to gym",
    "Eat more fruits",
    "Love mom"
  ])

  const [todoValue, setTodoValue] = useState('')

  function persistData(newList){
    localStorage.setItem('todos', JSON.stringify({todos:newList}))
  }

  // when the state changes, the web page (dom) will be reprinted
  function handleAddTodos(newTodo){
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index){
    const newTodoList = todos.filter((todo,todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }


  function handleEditTodo(index){
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  // 挂载: 组件第一次被创建并插入到DOM时会挂载。这通常发生在组件初次渲染或父组件中条件变化导致该组件需要渲染时。
  // 卸载: 组件从DOM中移除时会卸载。这通常发生在父组件中条件变化导致该组件不再需要渲染时，或者在路由切换时当前页面组件被替换。

  useEffect(() => {
    if (!localStorage){
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos){
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  },[])

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos}/>
    </>
  )
}

export default App

