import React from "react";

const Header = () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand"><b>My Todo List</b></a>
                </div>
                <ul className="nav navbar-nav navbar-right">
                    <li><a><b>React</b></a></li>
                </ul>
            </div>
        </nav> 
    )
}

export default Header;