//////////////////////
// ANVAR SULTANOV////
////////////////////


import './TodoList.css'
import {useState} from 'react'

export default function TodoList() {
    const [stTodoList, setTodoList] = useState([
        { id: 1, text: 'Task 1', completed: false },
        { id: 2, text: 'Task 2', completed: true },
        { id: 3, text: 'Task 3', completed: false },
    ]);

    const [stNewTask, setNewTask] = useState('');

    function addTask(){
        let newId = stTodoList.length + 1;
        let newTask = {id: newId, text: stNewTask, completed: false};
        setTodoList([...stTodoList, newTask]);
        // setTodoList('');
    }

    function toggleTask(id){
        let updatedTodoList = stTodoList.map(t => {
            if(t.id === id){
                t.completed = !t.completed;
            }
            return t;
        });
        setTodoList(updatedTodoList);
    }

    function deleteTask(e, id){
        let updatedTodoList = stTodoList.filter(t => t.id !== id);
        setTodoList(updatedTodoList);
    }

    return (
        <>
            <h1>Anvar Sultanov</h1>
            <h2>My Todo App</h2>

            <input type="text" placeholder="Add new task" value={stNewTask} onChange={(e) => setNewTask(e.target.value)}/>
            <input type="button" value="Add" onClick={addTask} />

            <br />
            {stTodoList.map((task) => 
            <ul>
            <li>
                <input type="checkbox" checked={task.completed ? true : false} onClick={() => toggleTask(task.id)}/>
                <span style={task.completed ? { textDecoration: "line-through" } : null}>    
                {task.text}
                </span>
                <input type="button" value="Delete" onClick={(e) => deleteTask(e, task.id)}/>
            </li>
            </ul>)}
        </>
    )
}