import React from "react";
import { GiCheckMark } from 'react-icons/gi';
import { FaTrashAlt } from 'react-icons/fa';
import { GrEdit } from 'react-icons/gr';
import './TodoIcon.css';

function TodoIcon({ type, color, onClick }) {
    return(
        <span
        className={`Icon-container Icon-container--${type}`}
        onClick={onClick}>
      {type ==='delete' && <FaTrashAlt color='#A7FFE4' size={40} />}
      {type ==='check' && <GiCheckMark color='#A7FFE4' size={40} />}
      {type ==='edit' && <GrEdit color='#A7FFE4' size={40} />}
      </span>
    );

}

export { TodoIcon };