import React, { useContext } from "react"
import { AppContext } from "./Context"
import Header from "./components/templates/header/header.js";
import SearchedItemBar from "./components/templates/searchedItemBar/searchedItemBar";
import Market from "./components/templates/market/market";
import './searchPage.css';
const SearchPage = () => {
    return (
        <div>
            <Header />
            <SearchedItemBar />
            <Market />
        </div>
    )

}

export default SearchPage;