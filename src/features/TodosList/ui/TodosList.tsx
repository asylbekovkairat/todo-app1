import { FC } from "react";
import { TaskItem, Todo } from "../../../entities/task";

interface Props {
  todos: Todo[];
}

const TodosList: FC<Props> = ({ todos }) => {
  return (
    <>
      {todos.map((item) => (
        <TaskItem key={item.id} {...item} />
      ))}
    </>
  );
};

export default TodosList;
