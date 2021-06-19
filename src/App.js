import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import AddTodo from "./AddTodo"
import TodoList from './TodoList';
import MyStore from './Reducer/MyStore'

function App() {
  return (
    <>
      <Provider store={MyStore} >
        <AddTodo /> <br />
        <TodoList />
      </Provider>
    </>
  );
}

export default App;
