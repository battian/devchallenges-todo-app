import { DeleteOutline } from '@material-ui/icons';
import { ITodo } from '../../types/ITodo';

import styles from './TodoItem.module.css';

interface TodoItemProps {
  todo: ITodo;
  status: string;
  handleTodoToggle: (id: string) => void;
  handleRemoveTodo: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  status,
  handleTodoToggle,
  handleRemoveTodo,
}) => {
  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        id={todo.id}
        onClick={() => handleTodoToggle(todo.id)}
        defaultChecked={todo.completed}
        className={styles.item__checkbox}
      />
      <label
        className={`${styles.item__label} ${
          todo.completed ? styles.item__labelCompleted : ''
        }`}
      >
        {todo.text}
      </label>

      <button className={styles.item__button} onClick={() => handleRemoveTodo(todo.id)}>
        <DeleteOutline />
      </button>
    </li>
  );
};

export default TodoItem;
