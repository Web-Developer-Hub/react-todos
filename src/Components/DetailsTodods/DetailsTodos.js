import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DetailsTodos.css'

const DetailsTodos = () => {
    const { todosId } = useParams();

    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const API = `https://jsonplaceholder.typicode.com/todos/${todosId}`
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                if (data === null) {
                    return null;
                }
                else {
                    setTodos(data);
                }
            })
    }, [todosId])
    const { id, title, completed, userId } = todos;


    return (
        <div className='details'>
            <p>id: {id}</p>
            <p>UserID: {userId}</p>
            <p>Title: {title}</p>
            <p>Status: {completed ? completed?.toString() : completed?.toString()}</p>
        </div>
    );
};

export default DetailsTodos;