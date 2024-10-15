import React, { useEffect } from "react";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import TodoFilterBtns from "./TodoFilterBtns";
import { useDispatch } from "react-redux";
import { getTodos } from "./todoSlice";
const Todo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);
  return (
    <div>
      <TodoAdd />
      <TodoList />
      <TodoFilterBtns />
    </div>
  );
};

export default Todo;
