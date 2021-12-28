import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="container">
      <h1>Todo's List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
