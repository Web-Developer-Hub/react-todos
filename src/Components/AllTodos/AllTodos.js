import React, { useContext } from 'react';
import { TodosContext } from '../../App';
import Todo from '../Todo/Todo';
import './AllTodos.css'

const AllTodos = () => {
    const todos = useContext(TodosContext);


    return (
        <div className='todos'>
            {
                todos.map((todo) => <Todo todo={todo} key={todo.id}></Todo>)
            }
        </div>
    );
};

export default AllTodos;