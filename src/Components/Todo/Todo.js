import { Button } from 'react-bootstrap';
import React from 'react';
import './Todo.css'
import { useHistory } from 'react-router-dom';

const Todo = (props) => {
    const { id, title } = props.todo;

    const history = useHistory()
    const clickHandler = () => {
        history.push(`/details/todos/${id}`)
    }


    return (
        <div className='todo'>
            <h4>{id}</h4>
            <p>{title}</p>
            <Button onClick={() => { clickHandler() }}>Details</Button>
        </div>
    );
};

export default Todo;