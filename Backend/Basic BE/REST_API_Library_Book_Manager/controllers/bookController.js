let id = 1;
const books = [];

const getAllBooks = (req,res) =>{
    try{
        // Return all books
        res.status(200).json(books)
    }
    catch(error){
        res.status(500).json({message: 'Error retrieving books', error: error.message});
    }
}

const getBookById = (req, res) => {
    try {
        const book = books.find(b => b.id === parseInt(req.params.id));
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving book', error: error.message });
    }
};

const createBook = (req,res)=>{
    try{
        const {title,author,genre,available} = req.body;
        if(!title || !author || !genre || available === undefined){
            return res.status(400).json({messgae:'All fields are required'});
        }
        const newBook = {
            id :id++,
            title,
            author,
            genre,
            available
        }
        books.push(newBook);
        res.status(201).json({message: 'Book created successfully', book:newBook});
    }
    catch(error){
        res.status(500).json({messgae: 'Error Creating book', error: error.message})
    }
}

const updateBook = (req,res) => {
    try{
        const {id} = req.params;
        const{title,author,genre,available} = req.body;
        const bookIndex = books.findIndex(book => book.id === parseInt(id));
        if(bookIndex === -1){
            return res.status(404).json({message: 'Book not found'});
        }
        if(!title || !author || !genre || available === undefined){
            return res.status(400).json({message:'All fields are required'});
        }
        const updatedBook = {
            ...books[bookIndex],
            title,
            author,
            genre,
            available
        };
        books[bookIndex] = updatedBook;
        res.status(200).json({message: 'Book updated successfully', book: updatedBook})
    }
    catch(error){
        res.status(500).json({message: 'Error updating book', error: error.message});
    }
}

const deleteBook = (req,res) => {
    try{
        const {id} = req.params;
        const bookIndex = books.findIndex(book => book.id === parseInt(id));

        if(bookIndex === -1){
            return res.status(404).json({message: 'Book not found'});
        }
        books.splice(bookIndex,1);
        res.status(200).json({message: 'Book deleted successfully'});
    }
    catch(error){
        res.status(500).json({message: 'Error deleting book', error: error.message});
    }
}

module.exports = {getAllBooks,getBookById ,createBook, updateBook, deleteBook};