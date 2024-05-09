import { useTodos } from "../../../entities/task";
import { Button } from "../../../shared/ui";

const TodosToggle = () => {
  const { getAllTodos, getCompletedTodos, getInProgressTodos } = useTodos();

  return (
    <div className="flex items-center gap-2">
      <Button onClick={getAllTodos}>All</Button>
      <Button onClick={getInProgressTodos}>In progress...</Button>
      <Button onClick={getCompletedTodos}>Completed</Button>
    </div>
  );
};

export default TodosToggle;
