import { FC } from "react";
import { Todo } from "../../model";

const TaskItem: FC<Todo> = ({ description, isDone, title }) => {
  return (
    <section className="w-full flex justify-between items-center p-3 bg-white">
      <div className="flex items-center gap-2">
        <input type="checkbox" defaultChecked={isDone} />
        <div className="flex flex-col gap-1">
          <p>{title}</p>
          <p>{description}</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="bg-gray-400">E</button>
        <button className="bg-gray-400">D</button>
      </div>
    </section>
  );
};

export default TaskItem;
