import React from 'react'
import "../styles/todo.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import {  useSelector } from 'react-redux/es/hooks/useSelector';
import { loggedout } from '../actions/index';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { setEmail } from '../actions/index';

function ToDo() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(-1); 
  const [editedTask, setEditedTask] = useState('');
  const [taskChecked, setTaskChecked] = useState(Array(tasks.length).fill(false));
  const dispatch = useDispatch();
  const emailState = useSelector((state)=> state.email.email)
  const loggedState = useSelector((state)=> state.authentication)
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState();

  const updateName = () =>{
    let getName = JSON.parse(localStorage.getItem(emailState)).name;
    setName(getName);
  }
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleDelClick = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    // saveToLocalStorage();
  };
  const handleEditTask = (index, task) => {
  setEditIndex(index);
  setEditedTask(task);
};
  
const saveToLocalStorage = () =>{
  let obj = JSON.stringify(tasks);
  localStorage.setItem(emailState+"tasks",obj);
};

const handleUpdateTask = (index) => {
  if (editedTask.trim() !== '') {
    const updatedTasks = [...tasks];
    updatedTasks[index] = editedTask;
    setTasks(updatedTasks);
  }
  setEditIndex(-1); // Exit edit mode
};

const handleKeyPress = (e, index) => {
  if (e.key === 'Enter') {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
    handleUpdateTask(index)
    setEditIndex(-1);
  }
};
const handleCheckboxChange = (index) => {
  const updatedTaskChecked = [...taskChecked];
  updatedTaskChecked[index] = !updatedTaskChecked[index];
  setTaskChecked(updatedTaskChecked);
};
const handleLogout = () =>{
    dispatch(setEmail(""));
    dispatch(loggedout());
    navigate("/");
}

  useEffect(() => {
    console.log(emailState);
    if(!loggedState)
    {
      navigate("/");
    }
    else
    {
      let tasksObj = JSON.parse(localStorage.getItem(emailState+"tasks"));
      if(tasksObj)
      {
        setTasks(tasksObj);
        setLoading(false);
      }
      else
      {
        setLoading(false);
      }
      updateName();
    }
  }, [loggedState])
  
  useEffect(() => {
    if (!loading) {
      saveToLocalStorage();
    }
  }, [tasks, loading]); 

  return (
    <>
    <div className='body flex_center'>
        <div className='welcome-text'>Welcome {name}</div>
        <button className='logout-button' onClick={handleLogout}>Logout</button>
        <div className="container">
        <div className="main_text">My Tasks</div>
        <div className="input_wrapper">
            <input
            type="text"
            className="inp"
            placeholder="Input Task name and then enter to add"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            />
        </div>
        <ul className="tasks">
        {tasks.map((task, index) => (
            <li key={index}>
            <input type="checkbox" 
            onChange={() => handleCheckboxChange(index)}
            />
            {editIndex === index ? (
                <input
                type="text"
                checked={taskChecked[index]}
                value={editedTask}
                onChange={(e) => setEditedTask(e.target.value)}
                onBlur={() => handleUpdateTask(index)}
                onKeyDown={(e) => handleKeyPress(e, index)}
                autoFocus
                />
            ) : (
                <p className={taskChecked[index] ? 'cut-text' : ''}>{task}</p>
            )}
                <div className="symbols">
                <FontAwesomeIcon className='symb' icon={faEdit} onClick={()=>handleEditTask(index, task)} />
                <FontAwesomeIcon className='symb' icon={faTrashAlt} onClick={()=>handleDelClick(index)}/>
                </div>
            </li>
            ))}
        </ul>
        </div>
    </div>
    </>
  );
}

export default ToDo;
