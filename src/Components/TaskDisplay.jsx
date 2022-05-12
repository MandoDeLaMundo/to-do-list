import React from "react";

const TaskDisplay = (props) =>
{
    const handleDelete = (deleteIdx) =>
    {
        const filteredList = props.tasks.filter((task, i)=>
        {
            return(
                i !== deleteIdx
            )
        })
        props.onUpdateTasks(filteredList)
    }

    const handleUpdate = (e, updateIdx) =>
    {
        const updatedList = [...props.tasks]
        updatedList[updateIdx].isCompleted = e.target.checked;
        props.onUpdateTasks(updatedList);
    }

    return (
        <div>
            <h1>To Do</h1>
            {
                props.tasks.map((element, i) =>
                {
                    return(
                        <ul key={i} style={{textDecorationLine: element.isCompleted? "line-through": "none"}}>
                        <li> {element.isCompleted ? "": ""} <input type="checkbox" checked = {element.isCompleted} onChange = {e => handleUpdate(e, i )} /> {element.taskName} <button onClick = {e => handleDelete(i)}>Delete</button></li>
                        </ul>
                    )
                })
            }
        </div>
    )
}

export default TaskDisplay