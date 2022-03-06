import React, { useEffect, useContext } from "react";
import './market.css'
import ItemList from "../ItemList/itemList";
import Filter from "../filter/filter";
import Pagination from "../../molecules/pagination/pagination";
const Market = () => {
    return (
        <div>
            <div className="market">
                <Filter />
                <ItemList />
            </div>
            <Pagination />
        </div>

    )
}

export default Market;