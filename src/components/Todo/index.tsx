import { FormEvent, useEffect, useState } from 'react';
import { DeleteOutline } from '@material-ui/icons';

import { ITodo } from '../../types/ITodo';
import { newID } from '../../utils/newID';
import { Todos } from '../../utils/TodoList';

import TodoItem from '../TodoItem';

import styles from './Todo.module.css';
import Navigation from '../Navigation';

const Todo = () => {
  const [todos, setTodos] = useState(Todos);
  const [filteredTodos, setFilteredTodos] = useState<ITodo[]>([]);
  const [status, setStatus] = useState('all');
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    handleFilteredTodos();
  }, [todos, status]);

  const handleFilteredTodos = () => {
    if (status === 'active') {
      setFilteredTodos(todos.filter(todo => todo.completed === false));
    } else if (status === 'completed') {
      setFilteredTodos(todos.filter(todo => todo.completed === true));
    } else {
      setFilteredTodos(todos);
    }
  };

  const handleNewTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text || /^\s*$/.test(text)) {
      setError(`Please enter a new todo`);
      return;
    }

    const newTodo = {
      id: newID(),
      text: text,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setText('');
    setError('');
  };

  const handleRemoveTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleTodoToggle = (id: string) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      }),
    );
  };

  const errorBorder = error ? styles.input__error : '';

  return (
    <div className={styles.container}>
      <Navigation status={status} setStatus={setStatus} />

      <form onSubmit={handleNewTodo} className={styles.form}>
        <input
          className={`${styles.form__input} ${errorBorder}`}
          type="text"
          placeholder="add details"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button type="submit" className={styles.form__button}>
          Add
        </button>
      </form>
      {error && <p className={styles.error}>{error}</p>}

      {filteredTodos.length === 0 && (
        <p className={styles.add__todo}>Please add a new todo</p>
      )}

      <ul className={styles.list}>
        {filteredTodos.map(item => (
          <TodoItem
            key={item.id}
            todo={item}
            status={status}
            handleTodoToggle={handleTodoToggle}
            handleRemoveTodo={handleRemoveTodo}
          />
        ))}
      </ul>

      {status === 'completed' && filteredTodos.length > 0 && (
        <div className={styles.btn}>
          <button className={styles.btn__delete} onClick={() => setTodos([])}>
            <DeleteOutline style={{ fontSize: 16 }} />
            delete all
          </button>
        </div>
      )}
    </div>
  );
};

export default Todo;
