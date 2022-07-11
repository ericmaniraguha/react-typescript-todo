import { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './components/model';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]); //state which will contain all our todos

  //Handle AddTodo -- which will add todos to the states
  const handleAdd = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo(''); //setting our todo as ampty after creating it
    }
  };

  console.log(todo);
  console.log(todos);

  return (
    <div className='App'>
      <span className='heading'>TypeScript</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
};

export default App;
