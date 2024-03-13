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
           <nav className="navbar navbar-light bg-light">
            <input className="Tasker container"
            type="text" 
			onChange={e => setInputValue(e.target.value)}  
			onKeyPress={handleKeyEnter} 
			placeholder="What needs to be done" 
			value={inputValue} />
            </nav>
		   
			{tasks.length === 0 ? (<button type="button" 
            className="AddAtask btn btn-danger"  
            onClick={() => addTask(index)}>No task? Please add your tasks and press Enter</button>) : (
             <div className="TaskRemover mt-3">
                    {tasks.map((task, index) => (
                        <div className="ListTasks d-flex container p-0" key={index}>
                            <nav className="navbar navbar-light bg-light container p-2">
                            <p className="Newtasks mb-0">{task}</p>
                            <span className="m-2">
                                
                                <i className="fa-solid fa-xmark m-2" 
                                onClick={() => removeTask(index)}>
                                </i></span>  
                            </nav> 
                       </div>
                    ))}
                </div>
          )}
          <nav className="TasksNum navbar-light bg-light mt-2" >{tasks.length} Tasks left to do</nav>  
        </div>
    
	}



export default AnyComponent;
   