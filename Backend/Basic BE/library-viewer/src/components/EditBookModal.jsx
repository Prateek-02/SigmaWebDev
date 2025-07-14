import React ,{useState} from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000/books';

function EditBookModal({book, onClose}) {
    const [title, setTitle] = useState(book.title);
    const [author, setAuthor] = useState(book.author);
    const [genre, setGenre] = useState(book.genre);
    const [available, setAvailable] = useState(book.available);
    const [error, setError] = useState('');

    const handleUpdate = async (e) =>{
        e.preventDefault();
        if(!title || !author || !genre) {
            setError('All fields are required');
            return;
        }
        try{
            axios.put(`${API_URL}/${book.id}`,{
                title,
                author,
                genre,
                available
            });
            alert('Book updated successfully');
            onClose();
        }
        catch(err) {
            setError(err.message?.data?.message || 'Error updating book');
        }
    }  

    return (
        <div style={{
            position: 'fixed',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'black',
            padding: '1rem',
            border: '1px solid #ccc',
        }}>
            <h3>Edit Book</h3>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleUpdate}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                /><br />
                <input
                    type="text"
                    placeholder="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                /><br />
                <input
                    type="text"
                    placeholder="Genre"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                /><br />
                <label>
                    Available:
                    <input
                        type="checkbox"
                        checked={available}
                        onChange={(e) => setAvailable(e.target.checked)}
                        
                    />
                </label><br />
                <button type="submit">Update Book</button>{' '}
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    )
}

export default EditBookModal
