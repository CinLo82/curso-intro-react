import React from 'react';
import './TodoItem.css';
import { GiCheckMark } from 'react-icons/gi';
import { FaTrashAlt } from 'react-icons/fa';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        <GiCheckMark />
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        <FaTrashAlt  />
      </span>
    </li>
  );
}

export { TodoItem };