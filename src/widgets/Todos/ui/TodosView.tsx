import { useTodos } from "../../../entities/task";
import { CreateTodo } from "../../../features/CreateTodo";
import { TodosList } from "../../../features/TodosList";
import { TodosToggle } from "../../../features/TodosToggle";

const TodosView = () => {
  const { todosList } = useTodos();

  console.log(todosList);
  return (
    <section className="wrapperContainer flex flex-col items-center gap-9">
      <h1>Todos List</h1>
      <div className="flex justify-between w-full">
        <TodosToggle />
        <CreateTodo />
      </div>
      <section className="w-full p-[20px] bg-gray-400 mx-auto">
        <TodosList todos={todosList} />
      </section>
    </section>
  );
};

export default TodosView;
