import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000/tasks';

function AddTaskForm({ refreshTasks }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('pending');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !description) {
            setError('Title and description are required');
            return;
        }

        try {
            await axios.post(API_URL, { title, description, status });
            setTitle('');
            setDescription('');
            setStatus('pending');
            setError('');
            refreshTasks();
            alert('Task added successfully');
        } catch (err) {
            setError(err.response?.data?.message || 'Error adding task');
        }
    };

    return (
        <div className="add-task-form">
            <h3>Add Task</h3>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <br />
                <input
                    type="text"
                    placeholder='Description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <br />
                <input
                    type="text"
                    placeholder='Status'
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                />
                <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default AddTaskForm;
