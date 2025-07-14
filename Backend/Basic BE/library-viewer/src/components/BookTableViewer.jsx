import React,{useState, useEffect} from 'react'
import axios from 'axios';
import EditBookModal from './EditBookModal';

const API_URL = 'http://localhost:3000/books';

function BookTableViewer() {
    const [books, setBooks] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    const [editBook, setEditBook] = useState(null);

    const fetchBooks = async () =>{
        try{
            const res = await axios.get(API_URL);
            setBooks(res.data);
            setLoading(false);
            setError(null);
        }
        catch(err) {
            setError(err.message?.data?.message || 'Error fetching books');
        }
        finally{
            setLoading(false);
        }
    }

    useEffect( () =>{
        fetchBooks();
    },[books]);

    const handleRefresh = () =>{
        setLoading(true);
        fetchBooks();
    }

    const handleDelete = async (id) =>{
        if(!window.confirm('Are you sure to delete this book?')) return;
        try{
            await axios.delete(`${API_URL}/${id}}`)
            fetchBooks();
        }
        catch(err) {
            setError(err.message?.data?.message || 'Error deleting book');
        }
    }

    const handleEdit = (book) => {
        setEditBook(book);
    }

    const handleModalClose = () =>{
        setEditBook(null);
        fetchBooks();
    }

    if(loading) return <div>Loading...</div>;
    if(error) return <div style={{ color: 'red' }}>Error: {error}</div>;

    return (
        <div style={{ padding: '20px' }}>
            <h2>📚 Library Book Manager Viewer</h2>
            <button onClick={handleRefresh} style={{marginBottom: '10px'}}>refresh</button>
            {
                books.length === 0 ?(
                    <p>No books available.</p>
                ) : (
                    <table border = "1"  cellPadding="8" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Genre</th>
                                <th>Available</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map(book =>(
                                <tr key = {book.id}>
                                    <td>{book.id}</td>
                                    <td>{book.title}</td>
                                    <td>{book.author}</td>
                                    <td>{book.genre}</td>
                                    <td>{book.available ? '✅ Yes' : '❌ No'}</td>
                                    <td>
                                        <button onClick={() => handleEdit(book)}>Edit</button>
                                        <button onClick={() => handleDelete(book.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )
            }
            {editBook && (
                <EditBookModal book={editBook} onClose={handleModalClose} />
            )}
        </div>
    )
}

export default BookTableViewer
