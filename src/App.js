
import './App.css';

function App() {

  const todos = [
    { id: 1, text: "Wash dishes", done: false },
    { id: 2, text: "Do laundry", done: false },
    { id: 3, text: "Take shower", done: false }
  ];

  return (
    <div className="App">
      <h1 className='font-bold text-xl text-grey-darkest'>Todo List</h1>
      <hr />
      <TodoList todos={todos} />
      <AddTodo />
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

function AddTodo(){

  function handleAddTodo(event) {
    console.log(event);
    event.preventDefault();
  }

  return (
    <form className='add-form' onSubmit={handleAddTodo}>
      <input className='add-input' placeholder="Add todo" />
      <button className='submit-btn' type="submit">Submit</button>
    </form>
  );
}




export default App;
