import React, { useEffect, useState } from 'react';
import Active from './Active';
import './ActiveTodos.css'

const ActiveTodos = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const API = `https://jsonplaceholder.typicode.com/todos/`
        fetch(API)
            .then((res) => res.json())
            .then((data) => setTodos(data))
    }, [])

    const x = todos.filter((x) => x?.completed === true);

    return (
        <div>
            <h3 style={{ maxWidth: '1200px', margin: 'auto', marginTop: '20px' }}>This is my active todos</h3>
            <h4 style={{ maxWidth: '1200px', margin: 'auto', marginTop: '20px' }}>Active Todos: {x.length}</h4>
            <div className='activeTodos'>
                {
                    x?.map((d) => <Active d={d} key={d.id}></Active>)
                }
            </div>
        </div>
    );
};

export default ActiveTodos;