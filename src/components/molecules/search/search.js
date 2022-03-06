import React, { useEffect, useContext } from "react";
import { AppContext } from "../../../Context";
import './search.css'
const Search = () => {
    const context = useContext(AppContext)
    useEffect(() => {
        context.setSearchText("");
    }, [])
    return (
        <div className="searchField">
            <img src="./search.png" className="searchLogo" />
            <input type="text" className="searchText" onChange={(e) => { context.setSearchText(e.target.value) }} />
        </div>
    )
}

export default Search;

