
import './App.css';
import Header from './myComponents/Header';
import { Footer } from './myComponents/Footer';
import { Todos } from './myComponents/Todos';
import { useState } from 'react';

function App() {
  const onDelete = (data) => {
    console.log('---I am on delete---', data);
    setTodos(todos.filter((val) => {
      console.log('---filter---', val, data);
      return val !== data;
    }));
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
      <Todos todoParentData={todos} onDelete={onDelete} />
      <Footer />


    </>

  );
}

export default App;
