import React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../FeedBackButton/FeedBackButton";

const Navbar = () => {

    return (
        <>
            <nav className="navbar">
                <Logo />
                <SearchBar search={"Search a song of your choice"} />
                <Button children={"Give Feedback"} />
            </nav>

        </>

    );
}

export default Navbar;