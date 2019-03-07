import React from 'react'


const  NavBar = ({totalCount}) => {

    return (  
        <nav class="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar <span className="badge badge-pill badge-secondary">{totalCount}</span>
            </a>
        </nav>

    );
}

export default NavBar;