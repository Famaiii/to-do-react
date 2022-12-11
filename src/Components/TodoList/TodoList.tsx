import React from "react";
import { TodoItem } from "./TodoItem/TodoItem";
import { TodoPanel } from "../TodoPanel/TodoPanel";
import { useTodo } from "../../utils";

export const TodoList: React.FC = ({}) => {
  const { todos, todoIdForEdit, checkTodo, deleteTodo, selectTodoIdForEdit } =
    useTodo();
  return (
    <div>
      {todos.map((todo) => {
        if (todo.id === todoIdForEdit)
          return (
            <TodoPanel
              mode={"edit"}
              key={todo.id}
              editTodo={{ name: todo.name, description: todo.description }}
            />
          );

        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            checkTodo={checkTodo}
            deleteTodo={deleteTodo}
            selectTodoIdForEdit={selectTodoIdForEdit}
          />
        );
      })}
    </div>
  );
};
