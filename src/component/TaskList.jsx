import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TaskList.css';
import { deleteTask } from '../action/index';
import { useDispatch, useSelector } from "react-redux";
import '@fortawesome/fontawesome-free/css/all.css';

function TaskList() {
    const list = useSelector((state) => state.addTaskReducer.list);
    const [checkedItems, setCheckedItems] = React.useState({});
    const dispatch = useDispatch();
    // console.log(list);
    React.useEffect(() => {
        // localStorage.setItem('tasklist', JSON.stringify(list));
        const initialCheckedItems = {};
        list.forEach((element) => {
            initialCheckedItems[element.id] = false;
        });
        setCheckedItems(initialCheckedItems);
    }, [list]);

    const handleChange = (id) => {
        setCheckedItems((prevState) => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    return (
        <div className='tasklist-container'>
            {list.map((element) => (
                <ul className="list-group mylist-group" key={element.id}>
                    <input
                        type='checkbox'
                        className='ms-4'
                        onChange={() => handleChange(element.id)}
                        checked={checkedItems[element.id] || false}
                    />
                    <li className={`list-group-item tasklist-item ${checkedItems[element.id] ? 'checked' : ''}`}>{element.data}</li>
                    <button
                        type="button"
                        className="btn me-3 task-btn"
                        onClick={() => {
                            dispatch(deleteTask(element.id))
                        }}
                    >
                        <i className="fa-solid fa-trash"></i>
                    </button>
                </ul>
            ))}
        </div>
    );
}

export default TaskList;
