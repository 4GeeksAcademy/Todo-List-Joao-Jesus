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
		 // returning the component 
		return <div className="container mt-3 text-center">
            
			<input type="text" 
			onChange={e => setInputValue(e.target.value)}  
			onKeyPress={handleKeyEnter} 
			placeholder="What needs to be done" 
			value={inputValue} />
		    
			
			{tasks.length === 0 ? (
                
                <i className="fa fa-skull" onClick={() => addTask(index)}></i>
            ) : (
                <div className="TaskRemover text-center mt-3">
                    {tasks.map((task, index) => (
                        <div className="ListTasks d-flex text-center" key={index}>
                            <p>{task}</p>
                    
                            <i className="fa fa-skull" onClick={() => removeTask(index)}></i>
                        </div>
                    ))}
                </div>
            )}
        </div>
    
	}



export default AnyComponent;
