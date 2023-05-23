import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"

function NavbarItem(props) {

    if ("link" in props) {
        return (
            <Link id={props.name.toLowerCase()} to={('/'+props.link)} className="navbarItem">
                {props.name}
            </Link>);
    }
    else {
        return (
            <Link id={props.name.toLowerCase()} to={('/'+props.name)} className="navbarItem">
                {props.name}
            </Link>
        )
    }
}

export default function Navbar() {
    return (
        <div className="navbar">
            <NavbarItem link="" name="Home" />
            <NavbarItem name="Sobre" />
            <NavbarItem name="Organizadores" />
        </div>
    );
}