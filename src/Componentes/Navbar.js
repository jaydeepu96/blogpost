import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div style={{ padding: '30px', borderBottom: '1px solid black', backgroundColor: "black" }}>
            <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
            <Link to="/create" style={{ marginRight: '10px' }}>Create Blog</Link>
            <Link to="/posts">Blog Posts</Link>
        </div>
    );
};

export default Navbar;
