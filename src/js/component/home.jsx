import React, { useState } from "react";



//create your first component

const AnyComponent = () => {
		
	const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    // Function to add a new task to todo list
    	const addTask = () => {
        if (inputValue.trim() !== '') {
            setTasks([...tasks, inputValue]);
            setInputValue('');
        } 
    };

	// Function to add eventhandler to the Key Enter
	const handleKeyEnter = (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    };

		// Function to remove a new task to todo list
		const removeTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };
		 
		return <div className="container d-flex">
			<input type="text" 
			onChange={e => setInputValue(e.target.value)}  
			onKeyPress={handleKeyEnter} 
			placeholder="Enter a new task" 
			value={inputValue} />
			<button onClick={addTask}>Add a task</button>
			
			{tasks.length === 0 ? (
                <p>No tasks, add a task</p>
            ) : (
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            <p>{task}</p>
                            <button onClick={() => removeTask(index)}>Remove task</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    
	}



export default AnyComponent;
