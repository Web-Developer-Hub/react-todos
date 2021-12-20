import React from 'react';
import './Active.css'

const Active = (props) => {
    const { id, title, userId, completed } = props.d;
    return (
        <div className='active'>
            <p>id: {id}</p>
            <p>UserID: {userId}</p>
            <p>Title: {title}</p>
            <p>Status: {completed ? completed?.toString() : completed?.toString()}</p>
        </div>
    );
};

export default Active;