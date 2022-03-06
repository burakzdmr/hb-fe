import React, { useEffect, useContext } from "react";
import { AppContext } from "../../../Context";
import './style.css'
const SearchedItemBar = () => {
    const context = useContext(AppContext)
    return (
        <div className="searched">
            <div className="bir">
                <div className="pageTitle">
                    Cep telefonu
                </div>
                <div className="subTitleItem">
                    <div className="subTitle">
                        Aranan Kelime:
                    </div>
                    <div>{context.search}</div>
                </div>
            </div>

            <div className="iki">
                <select name="order" id="prder" className="order" value={context.order ? context.order : ""}
                    onChange={(e) => {
                        context.setOrder(e.target.value)
                    }}>
                    <option value="" selected disabled hidden>Sıralama</option>
                    <option value="lowestPrice">En Düşük Fiyat</option>
                    <option value="highestPrice">En Yüksek Fiyat</option>
                    <option value="newestA">{"En Yeniler (A>Z)"}</option>
                    <option value="newestZ">{"En Yeniler (Z>A)"}</option>
                </select>
            </div>
        </div>
    )
}

export default SearchedItemBar;