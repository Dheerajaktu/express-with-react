
import './App.css';
import Header from './myComponents/Header';
import { Footer } from './myComponents/Footer';
import { Todos } from './myComponents/Todos';
import { useState } from 'react';
import { AddTodo } from './myComponents/AddTodo';
function App() {
  const onDelete = (data) => {
    setTodos(todos.filter((val) => {
      return val !== data;
    }));
  }
  const addTodo = (title, desc) => {
    let sno = todos[todos.length - 1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
  }
  const [todos, setTodos] = useState(
    [
      {
        sno: 1,
        title: 'Go to market',
        desc: 'Need to done TOdo task 1'
      },
      {
        sno: 2,
        title: 'Go to GIP Mall',
        desc: 'Need to done TOdo task 2'
      },
      {
        sno: 3,
        title: 'Go to Airport',
        desc: 'Need to done TOdo task 3'
      }
    ]
  )
  return (
    <>
      <Header title="My Todo List" />
      <AddTodo addTodo={addTodo} />
      <Todos todoParentData={todos} onDelete={onDelete} />
      <Footer />


    </>

  );
}

export default App;
