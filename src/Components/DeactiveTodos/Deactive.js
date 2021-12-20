import React from 'react';
import './Deactive.css'

const Deactive = (props) => {
    const { id, title, userId, completed } = props.d;
    return (
        <div className='deactive'>
            <p>id: {id}</p>
            <p>UserID: {userId}</p>
            <p>Title: {title}</p>
            <p>Status: {completed ? completed?.toString() : completed?.toString()}</p>
        </div>
    );
};

export default Deactive;