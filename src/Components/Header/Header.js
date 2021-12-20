import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='navBar'>
                <Link to="/todos">Todos</Link>
                <Link to="/active/todos">Active Todos</Link>
                <Link to="/deactive/todos">Deactive Todos</Link>
                <Link to="/todos/chart">Chart</Link>
            </nav>
        </div>
    );
};

export default Header;