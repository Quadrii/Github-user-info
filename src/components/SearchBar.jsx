import React from "react";
import './searchbar.css';

function SearchBar({ username, setUsername }) {

    const onChange = (e) => {
        setUsername(e.target.value)
    }
    return (
        <div className="searchbar">
            <input
                className="inputs"
                placeholder="Search For a User"
                type="text"
                onChange={(event) => { onChange(event) }}
                onKeyUp={(event) => { onChange(event) }} 
                onPaste={(event) => { onChange(event) }}
            />
        </div>
    );
}

export default SearchBar;