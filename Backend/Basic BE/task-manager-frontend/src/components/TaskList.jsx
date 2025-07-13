import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000/tasks';

function TaskList({ refreshFlag }) {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchTasks = async () => {
        setLoading(true);
        try {
            const res = await axios.get(API_URL);
            console.log("Fetched tasks:", res.data);
            setTasks(res.data);
        } catch (err) {
            setError(err.response?.data?.message || 'Could not fetch tasks');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, [refreshFlag]); // refetch whenever refreshFlag changes

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            fetchTasks();
        } catch (err) {
            setError(err.response?.data?.message || 'Error deleting task');
        }
    };

    const handleEdit = async (id) => {
        const newTitle = prompt('Enter new title:');
        const newDescription = prompt('Enter new description:');
        const newStatus = prompt('Enter new status:');
        if (!newTitle || !newDescription || !newStatus) return;

        try {
            await axios.put(`${API_URL}/${id}`, {
                title: newTitle,
                description: newDescription,
                status: newStatus
            });
            fetchTasks();
        } catch (err) {
            setError(err.response?.data?.message || 'Error editing task');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className='task-list'>
            <h2>Task List</h2>
            {tasks.length === 0 ? (
                <p>No tasks available.</p>
            ) : (
                <ul>
                    {tasks.map(task => (
                        <li key={task.id}>
                            <strong>{task.title}</strong> - {task.description} - <em>{task.status}</em>
                            <button onClick={() => handleDelete(task.id)}>Delete</button>
                            <button onClick={() => handleEdit(task.id)}>Edit</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default TaskList;
