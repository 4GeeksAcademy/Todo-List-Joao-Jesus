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
		return <div className="container mt-3">
           <nav className="navbar navbar-light bg-light text-center">
            <input className="Tasker"
            type="text" 
			onChange={e => setInputValue(e.target.value)}  
			onKeyPress={handleKeyEnter} 
			placeholder="What needs to be done" 
			value={inputValue} />
            </nav>
		   
			{tasks.length === 0 ? (<button type="button" 
            className="AddAtask btn btn-warning"  
            onClick={() => addTask(index)}>Add a task</button>) : (
             <div className="TaskRemover mt-3">
                    {tasks.map((task, index) => (
                        <div className="ListTasks d-flex container" key={index}>
                            <nav className="navbar navbar-light bg-light text-center">
                            <p className="Newtasks mb-0 text-center">{task}</p>
                            <span className="m-2"><i className="fa-solid fa-xmark m-2" onClick={() => removeTask(index)}></i></span>  
                       </nav> </div>
                    ))}
                </div>
          )}  
        </div>
    
	}



export default AnyComponent;
// 
//             
//   