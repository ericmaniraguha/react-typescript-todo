import React from 'react';
import { Todo } from './model';
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5';
import { FcDeleteDatabase, FcEditImage } from 'react-icons/fc';
import './styles.css';

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  return (
    <form className='todos__single'>
      <span className='todos__single--text'>{todo.todo}</span>

      <div>
        <span className='icon'>
          <FcEditImage />
        </span>
        <span className='icon'>
          <FcDeleteDatabase />
        </span>
        <span className='icon'>
          <IoCheckmarkDoneCircleOutline />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
