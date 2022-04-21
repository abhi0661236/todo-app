import React from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = React.useState([
    { id: 1, text: "Wash dishes", done: false },
    { id: 2, text: "Do laundry", done: true },
    { id: 3, text: "Take shower", done: false }
  ]);

  

  return (
    <div className="App">
      <h1 className='font-bold text-xl text-grey-darkest'>Todo List</h1>
      <hr />
      <TodoList todos={todos} setTodos ={setTodos}/>
      <AddTodo setTodos ={setTodos} />
    </div>
  );
}


function TodoList({todos, setTodos}) {
  // console.log(props) // {todos: Array(3)}
  function handleToggleTodo(todo) {


    const updatedTodos = todos.map((t) =>
      t.id === todo.id
        ? {
            ...t,
            done: !t.done
          }
        : t
    );


    setTodos(updatedTodos);

    setTodos(updatedTodos);
  }
  return (
    <div className='todos-container'>
      <ul>
      {todos.map((todo) => (
        <li
          onDoubleClick={() => handleToggleTodo(todo)}
          style={{
            textDecoration: todo.done ? "line-through" : ""
          }}
          key={todo.id}
        >
          {todo.text}
          <DeleteTodo todo={todo} setTodos={setTodos} />
        </li>
      ))}
    </ul>
    </div>
    
  );
}




function AddTodo({setTodos}){

  const inputRef = React.useRef();

  function handleAddTodo(event) {
    event.preventDefault();
    const text = event.target.elements.addTodo.value;
    const todo = {
      id: 0,
      text,
      done: false
    };
    console.log(todo);


    setTodos(prevTodos => {
      todo.id = prevTodos.length + 1;
      return prevTodos.concat(todo);
    });
    inputRef.current.value = '';

  }

  return (
    <form className='add-form' onSubmit={handleAddTodo}>
      <input className='add-input' name='addTodo' placeholder="Add todo" ref={inputRef} />
      <button className='submit-btn' type="submit">Submit</button>
    </form>
  );
}

function DeleteTodo({ todo, setTodos }) {
  function handleDeleteTodo() {
    const confirmed = window.confirm("Do you want to delete this?");
    if (confirmed) {
      setTodos((prevTodos) => {
        return prevTodos.filter((t) => t.id !== todo.id);
      });
    }
  }

  return (
    <span
      onClick={handleDeleteTodo}
      role="button"
      style={{
        color: "red",
        fontWeight: "bold",
        marginLeft: 10,
        cursor: "pointer"
      }}
    >
      x
    </span>
  );
}


export default App;
