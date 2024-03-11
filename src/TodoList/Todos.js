import React, { useContext } from "react";
import FormLogin from "./fromLogin/FormLogin";
import Todo from "./Todo/Todo";
import "./Todos.css";
import UseContext from "../Context/UseContext";

export default function Todos() {
  const contextData = useContext(UseContext);

  const AddTodoHandler = () => {
    let myData = new Date().toLocaleString();

    if (!contextData.todoTitle.trim()) {
      alert("Please enter todo");
    } else {
      let newTodo = {
        id: contextData.todos,
        title: contextData.todoTitle,
        completed: false,
        data: myData,
      };
      contextData.setTodos((prevTodo) => {
        return [...prevTodo, newTodo];
      });
      contextData.setIsShowToast(true);

      setTimeout(() => {
        contextData.setIsShowToast(false);
      }, 3000);
      contextData.setTodoTitle("");
    }
  };

  const statusHandler = (event) => {
    contextData.setStatus(event.target.value);
  };

  const removeTodo = (todoID) => {
    let mainTodo = contextData.todos.filter((todo) => {
      return todo.id !== todoID;
    });
    contextData.setTodos(mainTodo);
  };

  const changeStatusHandler = (todoID) => {
    let newTodo = [...contextData.todos];
    newTodo.forEach((todo) => {
      if (todo.id === todoID) {
        todo.completed = !todo.completed;
      }
    });
    contextData.setTodos(newTodo);
  };

  return (
    <div className="TodoContainer">
      <h1 className="TodoTitle">T☺D☺</h1>
      <div className="AddTodo">
        <input
          type="text"
          value={contextData.todoTitle}
          onChange={(e) => contextData.setTodoTitle(e.target.value)}
          className="todoInputTitle"
          placeholder="Please enter your todo Title..."
          maxLength="15"
        />
        <button className="addTodoBtn " onClick={AddTodoHandler}>
          <span> ADD TODO</span>
        </button>

        <select className="todoStatus" onChange={statusHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="unCompleted">UnCompleted</option>
        </select>
      </div>

      <div className="TodoContainerBottom">
        <div className="TodoBox">
          {contextData.status === "completed" &&
            contextData.todos
              .filter((todo) => todo.completed)
              .map((todo) => (
                <Todo
                  key={todo.id}
                  {...todo}
                  onRemove={() => removeTodo(todo.id)}
                  onEdit={() => changeStatusHandler(todo.id)}
                />
              ))}
          {contextData.status === "unCompleted" &&
            contextData.todos
              .filter((todo) => !todo.completed)
              .map((todo) => (
                <Todo
                  key={todo.id}
                  {...todo}
                  onRemove={() => removeTodo(todo.id)}
                  onEdit={() => changeStatusHandler(todo.id)}
                />
              ))}
          {contextData.status === "all" &&
            contextData.todos.map((todo) => (
              <Todo
                key={todo.id}
                {...todo}
                onRemove={() => removeTodo(todo.id)}
                onEdit={() => changeStatusHandler(todo.id)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
