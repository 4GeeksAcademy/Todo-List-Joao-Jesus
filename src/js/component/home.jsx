import React, { useState } from "react";



//create your first component

const AnyComponent = () => {
		
	const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    // Function to add a new task to the list
    const addTask = () => {
        if (inputValue.trim() !== '') {
            setTasks([...tasks, inputValue]);
            setInputValue('');
        }
    };
	const removeTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };
		 
		return <div>
			<input type="text" onChange={e => setInputValue(e.target.value) } placeholder="Enter a new task" value={inputValue} />
			<button onClick={addTask}>Click to validate empty</button>
		
		<ul>
		{tasks.map((task, index) => (
			<li key={index}>
				{task}
				<button onClick={() => removeTask(index)}>Remove</button>
			</li>
		))}
	</ul></div>;
	}



export default AnyComponent;
