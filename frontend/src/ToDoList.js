import { useEffect, useState, useRef } from "react";
import ToDoListItem from "./ToDoListItem";
import { v4 as uuidv4 } from 'uuid';

let newId = "";

const ToDoList = () => {
  const [dataSource, setDataSource] = useState('tasks');
  const [todolist, setToDoList] = useState([]);
  const [newList, setNewList] = useState(0);
  const todoNameRef = useRef();
  const loadListRef = useRef();
  const udateListRef = useRef();

  useEffect(() => {
    const fetchToDoList = async () => {
      const response = await fetch(`${process.env.REACT_APP_BACKEND}/v1/${dataSource}`)
      const data = await response.json();
      if (dataSource === 'tasks') {
        console.log(data);
        setToDoList(data);
      }else{
        console.log(data.list);
        setToDoList(data.list);
      }

    }
    try {
      fetchToDoList();
    } catch (err) {
      console.log(err);
    }
  }, [dataSource]);


  function toggleTodo(id) {
    const newTodos = [...todolist]
    const todo = newTodos.find(todo => todo.id === id)
    todo.done = !todo.done
    setToDoList(newTodos)
  }

  function deleteTodo(id) {
    const newTodos = todolist.filter(todo => todo.id !== id)
    setToDoList(newTodos)
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    console.log(todoNameRef.current.value);
    if (name === '') return
    setToDoList(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, done: false }]
    })
    todoNameRef.current.value = null
  }

  function handeLoadList(e) {
    setNewList(0);   
    const id = loadListRef.current.value;
    if (id === '') return
    setDataSource(`/task/list/${id}`)
    console.log(id);
    loadListRef.current.value = null
  }

  function handeUpdateList(e) {
    setNewList(0);
    const id = udateListRef.current.value;
    if (id === '') return
    fetch(`${process.env.REACT_APP_BACKEND}/v1/task/list/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todolist)
    }).then(res => {
      return res.json()
    }).then(data => {
      console.log(data._id);
      setNewList(2);
    })
    .catch(error => console.log('ERROR'))
    udateListRef.current.value = null
  }

  function handleSaveList(){
    fetch(`${process.env.REACT_APP_BACKEND}/v1/task/list`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todolist)
    }).then(res => {
      return res.json()
    }).then(data => {
      console.log(data._id);
      newId = data._id;
      setNewList(1);
    })
    .catch(error => console.log('ERROR'))
  }

  return (
    <>
      <div className="container">

        <h1>ToDo List</h1>

        <div className="top">
          <input ref={todoNameRef} type="text" placeholder="Enter New Task..." />
          <button data-testid="add-task-button" onClick={handleAddTodo} >Add Task</button>
        </div>

        <ul className="todo-list">
          {todolist.map((todo) => <ToDoListItem
            key={todo.id}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            todo={todo}
          />)}
        </ul>

        <br />

        <div className="savebtn">
          <button onClick={handleSaveList}>Save</button>
          {newList === 0 &&  <p></p>}
          {newList === 1 &&  <p>New Todo List ID: <b>{newId}</b></p>}
          {newList === 2 &&  <p>List Updated Successfully!</p>}
        </div>

        <div className="top">
          <input ref={loadListRef} type="text" placeholder="Enter List ID..." />
          <button onClick={handeLoadList}>Load</button>
        </div>

        <div className="top">
          <input ref={udateListRef} type="text" placeholder="Enter List ID..." />
          <button onClick={handeUpdateList}>Update</button>
        </div>


      </div>

    </>
  )
};
export default ToDoList;
