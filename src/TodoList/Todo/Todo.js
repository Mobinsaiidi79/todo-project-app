import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { GrCompliance } from "react-icons/gr";
import "./Todo.css";
export default function Todo(todo) {

    const { id, title, completed, data, onRemove, onEdit } = todo;

  const removeTodoHandler = (id) => {
    onRemove(id)
  };
  const ChangeStatusHandler=(id)=>{
    onEdit(id)
  }
  return (
    <div className="Todo-Box">
      <h2 className={`Todo-title ${completed ? 'completed' : '' }`}>{title}</h2>
      <div className="Todo-Information">
        <span className="Todo-Date">{data}</span>
        <div className="Todo-Icons">
          <AiOutlineDelete
            className="Todo-Icon"
            onClick={()=>removeTodoHandler(id)}
          />
          <GrCompliance className="Todo-Icon" onClick={()=>ChangeStatusHandler(id)} />
        </div>
      </div>
    </div>
  );
}
