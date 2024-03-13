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
            <h5 className="Title text-center mt-5 mb-2 p-3">Todos List</h5>
           <nav className="navbar navbar-light bg-light">
            <input className="Tasker container"
            type="text" 
			onChange={e => setInputValue(e.target.value)}  
			onKeyPress={handleKeyEnter} 
			placeholder="What needs to be done"
            maxLength={100} 
			value={inputValue} />
            </nav>
		   
			{tasks.length === 0 ? (<button type="button" 
            className="AddAtask btn btn-danger text-center">
                No task? Please add your tasks and press Enter</button>) : (
             <div className="TaskRemover mt-2">
                    {tasks.map((task, index) => (
                        <div className="ListTasks d-flex container p-0" key={index}>
                            <div className="navbar navbar-light bg-light container p-4">
                                <p className="Newtasks mb-0">{task}</p>
                                <span className="spanIcone">
                                 <i className="fa-solid fa-ban" 
                                onClick={() => removeTask(index)}>
                                </i></span>  
                               
                            </div> 
                       </div>
                    ))}
                </div>
          )}
          <div className="TasksNum  bg-light mt-2 p-2" >{tasks.length} Tasks left to do</div>  
        </div>
    
	}



export default AnyComponent;
   