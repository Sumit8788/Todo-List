import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './TaskInput.css';
import { addTask } from '../action/index';
import { useDispatch } from "react-redux";

function TaskInput() {
    const [inputData, setInputData] = useState('');
    // console.log(inputData);
    const dispatch = useDispatch();
    return (
        <>
            <h1>To Do List App</h1>
            <div className="my-3 task-container">
                <label htmlFor="exampleFormControlInput1" className="form-label mt-3 task-label">Enter Task</label>
                <input type="text" className="form-control mt-3 task-input" id="exampleFormControlInput1" placeholder="Enter The Task" value={inputData} onChange={(event) => { setInputData(event.target.value) }} />
                <button type="button" className="btn my-3 task-btn" onClick={() => {
                    dispatch(addTask(inputData), setInputData(''))
                }}>Add Task</button>
            </div>
        </>
    )
}

export default TaskInput