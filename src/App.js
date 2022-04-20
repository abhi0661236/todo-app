import React from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = React.useState([
    { id: 1, text: "Wash dishes", done: false },
    { id: 2, text: "Do laundry", done: false },
    { id: 3, text: "Take shower", done: false }
  ]);

  

  return (
    <div className="App">
      <h1 className='font-bold text-xl text-grey-darkest'>Todo List</h1>
      <hr />
      <TodoList todos={todos} />
      <AddTodo setTodos ={setTodos} />
    </div>
  );
}


function TodoList({todos}) {
  // console.log(props) // {todos: Array(3)}
  return (
    <div className='todos-container'>
      <ul>
      { 
        todos.map(todo => (<li key = { todo.id  } >{ todo.text  }</li>)
      ) 
    }      
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




export default App;
