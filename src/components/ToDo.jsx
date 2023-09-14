import React from 'react'
import "../styles/todo.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function ToDo() {
  return (
    <body className="body flex_center">
      <div className="container">
        <div className="main_text">My Tasks</div>
        <div className="input_wrapper">
            <input type="text" className="inp" id="inp" placeholder="Input Task name and then enter to add" />
        </div>
        <ul className="tasks" id ="tasks">
            <li>
                <input type="checkbox" id="checkbox"/>
                <p id="text">as</p>
                <div className="symbols">
                    <i><FontAwesomeIcon icon={faEdit}  /></i>
                    <i><FontAwesomeIcon icon={faTrashAlt} /></i>
                </div>
            </li>
        </ul>
    </div>
</body>
  )
}

export default ToDo