import React from 'react';
import { Link } from 'react-router-dom'

export default function Menu() {
    return( 
        <nav className="navbar navbar-expand-md navbar-dark bg-secondary">
            <div className="container">
                <Link className="navbar-brand">React Redux</Link>

                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/create" className="nav-link">Create</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}