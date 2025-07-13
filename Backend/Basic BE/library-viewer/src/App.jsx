import React,{useState} from 'react'
import BookTableViewer from './components/BookTableViewer'
import AddBookForm from './components/AddBookForm';

function App() {
    const [refreshFlag, setRefreshFlag] = useState(false);
    const refreshBookList = () => {
        setRefreshFlag(!refreshFlag);
    };
    return (
      <div>
        <h1>📘 REST API Library Book Manager</h1>
        <AddBookForm refreshBook={refreshBookList} />
        <BookTableViewer refreshFlag={refreshFlag}/>
      </div>
    )
}

export default App
