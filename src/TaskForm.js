import { useState } from "react"

export default function TaskForm({onAdd}) {
    const [taskName, setTaskName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if(taskName === ""){
            alert("You must write something!")
        }
        else{
            onAdd(taskName);
            setTaskName("");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={taskName} onChange={e => setTaskName(e.target.value)} placeholder="New task..." />
            <button>ADD</button>
        </form>
    )
}