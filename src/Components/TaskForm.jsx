import React, {useState} from 'react'


const TaskForm = (props) =>
{
    const [taskName, setTaskName] = useState("")
    const [isCompleted, setIsCompleted] = useState(true)

    const handleSubmit = (e) =>
    {
        e.preventDefault()
        props.onNewTask({taskName, isCompleted})
        clearForm()
    }

    const clearForm =() =>
    {
        setTaskName("")
        setIsCompleted(false)
    }

    return(
        <div>
            <form onSubmit = {handleSubmit}>
                <div>
                    <label>New Task: </label>
                    <input type="text" name="taskName" value={taskName} onChange={e=>setTaskName(e.target.value)} />
                </div>
                <button type="submit">Add task</button>
            </form>
        </div>
    )
}

export default TaskForm