import React, { useState } from 'react'

function Todo() {
    const [input,setInput] = useState("");
    const [todos,setTodos] = useState([]);

    function addTodo(){
        const item = {
            id : todos.length +1,
            text: input,
            completed : false
        }
        setTodos(prev => [...prev,item]);
        setInput("");
    }

    function toggleComplete(id){
        setTodos(
            todos.map(t =>{
                if(t.id === id){
                    return {
                        ...t,
                        completed: !t.completed
                    }
                }
                else{
                    return t;
                }
            })
        )
    }

    function deleteTodo(id){
        setTodos(
            todos.filter(
                (t) => (t.id !== id)
            )
        )
    }

    return (
        <div>
            <input type="text"
             placeholder='Enter Todo' 
             value={input}
             onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={addTodo}>Add</button>
            <ul>
            {todos.map(t =>
                <li key = {t.id}>
                    <input type="checkbox" checked = {t.completed} onChange={() => toggleComplete(t.id)}/>
                    <span className={t.completed ? "strikeThrough" : ""}>{t.text}</span>
                    <button onClick={() => deleteTodo(t.id)}>Delete</button>
                </li>
            )}
            </ul>
        </div>
    )
}

export default Todo
