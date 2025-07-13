let id = 1;
let tasks = [];

const getTasks = (req, res) => {
    try {
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Could not fetch tasks', error: error.message });
    }
};

const createTask = (req, res) => {
    try {
        if (!req.body.title || !req.body.description) {
            return res.status(400).json({ message: 'Title and description are required' });
        }
        const newTask = {
            id: id++,
            title: req.body.title,
            description: req.body.description,
            status: req.body.status || 'pending',
        };
        tasks.push(newTask);
        console.log("Task created:", newTask);
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: 'Could not create task', error: error.message });
    }
};

const updateTask = (req, res) => {
    try {
        if (!req.params.id) {
            return res.status(400).json({ message: 'ID is required' });
        }
        if (!req.body.title || !req.body.description) {
            return res.status(400).json({ message: 'Title and description are required' });
        }

        const taskId = parseInt(req.params.id);
        const taskIndex = tasks.findIndex(task => task.id === taskId);

        if (taskIndex === -1) {
            return res.status(404).json({ message: 'Task not found' });
        }

        const updatedTask = {
            ...tasks[taskIndex],
            title: req.body.title,
            description: req.body.description,
            status: req.body.status || tasks[taskIndex].status
        };

        tasks[taskIndex] = updatedTask;
        console.log("Task updated:", updatedTask);
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: 'Could not update task', error: error.message });
    }
};

const deleteTask = (req, res) => {
    try {
        if (!req.params.id) {
            return res.status(400).json({ message: 'ID is required' });
        }
        const taskId = parseInt(req.params.id);
        const taskIndex = tasks.findIndex(task => task.id === taskId);
        if (taskIndex === -1) {
            return res.status(404).json({ message: 'Task not found' });
        }
        const deletedTask = tasks.splice(taskIndex, 1);
        console.log("Task deleted:", deletedTask);
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Could not delete task', error: error.message });
    }
};

module.exports = { getTasks, createTask, updateTask, deleteTask };
