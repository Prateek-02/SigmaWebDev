import React,{useState, useEffect} from 'react'
import axios from 'axios';

const API_URL = 'http://localhost:3000/books';

function BookTableViewer() {
    const [books, setBooks] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

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
    },[]);

    const handleRefresh = () =>{
        setLoading(true);
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
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )
            }
        </div>
    )
}

export default BookTableViewer
