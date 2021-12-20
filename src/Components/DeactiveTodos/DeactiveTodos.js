import React, { useEffect, useState } from 'react';
import Deactive from './Deactive';
import './DeactiveTodos.css'

const DeactiveTodos = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const API = `https://jsonplaceholder.typicode.com/todos/`
        fetch(API)
            .then((res) => res.json())
            .then((data) => setTodos(data))
    }, [])

    const x = todos.filter((x) => x?.completed === false);

    return (
        <div>
            <h3 style={{ maxWidth: '1200px', margin: 'auto', marginTop: '20px' }}>This is my active todos</h3>
            <h4 style={{ maxWidth: '1200px', margin: 'auto', marginTop: '20px' }}>DeActive Todos: {x.length}</h4>
            <div className='deactiveTodos'>
                {
                    x?.map((d) => <Deactive d={d} key={d.id}></Deactive>)
                }
            </div>
        </div>
    );
};

export default DeactiveTodos;