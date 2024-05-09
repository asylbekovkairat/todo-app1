import { atomWithStorage } from "jotai/utils";
import { Todo } from "./types";
import { INITIAL_TODOS } from "./consts";

export const todosAtom = atomWithStorage<Todo[]>("todos", []);
