import { useAtom } from "jotai";
import { todosAtom } from "./atom";
import { Todo } from "./types";
import { useEffect, useState } from "react";

export const useTodos = () => {
  const [todosListAtom, setTodosAtom] = useAtom(todosAtom);
  const [todosList, setTodosList] = useState<Todo[]>(todosListAtom);

  console.log("todosListAtom", todosListAtom);
  useEffect(() => {
    addTodo({
      id: 1,
      title: "Title TODO",
      description: "Decription",
      isDone: false,
      isEditing: false,
    });
  }, []);
  const getAllTodos = (): void => {
    setTodosList(todosListAtom);
  };

  const getCompletedTodos = (): void => {
    const updatedTodos = todosListAtom.filter(({ isDone }) => isDone);

    setTodosList(updatedTodos);
  };

  const getInProgressTodos = (): void => {
    console.log("todosListAtom", todosListAtom);

    const updatedTodos = todosListAtom.filter(({ isDone }) => !isDone);

    console.log("updatedTodos", updatedTodos);

    setTodosList(updatedTodos);
  };

  const addTodo = (newTodo: Todo): void => {
    const updatedTodos = [...todosList, newTodo];
    setTodosAtom(updatedTodos);
  };

  const editTodo = (id: number, changes: Todo): void => {
    const updatedTodos = todosList.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            changes,
          }
        : todo
    );

    setTodosAtom(updatedTodos);
  };

  const deleteTodo = (todoId: number): void => {
    const updatedTodos = todosList.filter(({ id }) => id !== todoId);

    setTodosAtom(updatedTodos);
  };

  return {
    todosList,
    getAllTodos,
    getInProgressTodos,
    getCompletedTodos,
    addTodo,
    editTodo,
    deleteTodo,
  };
};
