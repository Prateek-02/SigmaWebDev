import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';

function App() {
    const [refreshFlag, setRefreshFlag] = useState(false);

    const refreshTasks = () => {
        setRefreshFlag(prev => !prev); // toggle to trigger refresh
    };

    return (
        <div className="App">
            <h1>Task Manager</h1>
            <AddTaskForm refreshTasks={refreshTasks} />
            <TaskList refreshFlag={refreshFlag} />
        </div>
    );
}

export default App;
