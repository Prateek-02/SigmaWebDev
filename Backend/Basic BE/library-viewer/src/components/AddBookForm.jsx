import React,{useState} from 'react'
import axios from 'axios';

const API_URL = 'http://localhost:3000/books';

function AddBookForm({refreshBook}) {
    const [title,setTitle] = useState('');
    const [author,setAuthor] = useState('');
    const [genre,setGenre] = useState('');
    const [available,setAvailable] = useState(null);
    const [error,setError] = useState(null);

    const handleSubmit = async (e) =>{
        e.preventDefault();

        if(!title || !author || !genre){
            setError('All fields are required');
            return;
        }

        try{
            const newBook = {title,author,genre,available};
            await axios.post(API_URL, newBook);

            setTitle('');
            setAuthor('');  
            setGenre('');
            setAvailable(false);
            setError(null);
            alert('Book added successfully');
            refreshBook();
            console.log('Book added successfully:', newBook);
        }
        catch(err){
            setError(err.response?.data?.message || 'Error adding books')
        }
    };

    return (
        <div>
            <h3>Add New Book </h3>
            {error && <div style={{color: 'red'}}>{error}</div>}
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder='Title'
                    value={title}
                    onChange = {(e) => setTitle(e.target.value)}
                />
                <br />
                <input 
                    type="text" 
                    placeholder='Author'
                    value={author}
                    onChange = {(e) => setAuthor(e.target.value)}
                />
                <br />
                <input 
                    type="text" 
                    placeholder='Genre'
                    value={genre}
                    onChange = {(e) => setGenre(e.target.value)}
                />
                <br />
                <label htmlFor="">Available
                    <input 
                        type="checkbox" 
                        checked={available}
                        onChange = {(e) => setAvailable(e.target.value)}
                    />
                </label>
                <br />
                <button type = "submit">Submit</button>
            </form>
        </div>
    )
}

export default AddBookForm
