let items = [];
let idCounter = 1;

const getItems = (req, res) => {
    try {
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
};

const createItem = (req, res) => {
    try {
        const { name, description } = req.body;
        if (!name || !description) {
            return res.status(400).json({ message: 'Name and description are required' });
        }

        const newItem = {
            id: idCounter++,
            name,
            description
        };
        items.push(newItem);
        res.status(201).json(newItem);
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
};

const updateItem = (req, res) => {
    try {
        const itemId = parseInt(req.params.id);
        const { name, description } = req.body;

        if (!name || !description) {
            return res.status(400).json({ message: 'Name and description are required' });
        }

        const itemIndex = items.findIndex(item => item.id === itemId);

        if (itemIndex === -1) {
            return res.status(404).json({ message: 'Item not found' });
        }

        items[itemIndex] = {
            ...items[itemIndex],
            name,
            description
        };

        res.status(200).json(items[itemIndex]);
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
};

const deleteItem = (req, res) => {
    try {
        const itemId = parseInt(req.params.id);
        const itemIndex = items.findIndex(item => item.id === itemId);

        if (itemIndex === -1) {
            return res.status(404).json({ message: 'Item not found' });
        }

        items.splice(itemIndex, 1);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
};

module.exports = {
    getItems,
    createItem,
    updateItem,
    deleteItem
};
