import React, { useEffect, useContext, useState } from "react";
import Search from "../../molecules/search/search";
import Basket from "../../molecules/basket/basket";
import './header.css'
import { AppContext } from "../../../Context";
const Header = () => {
    const [showBasket, setShowBasket] = useState(false)
    const context = useContext(AppContext)
    return (
        <div className="header">
            <img className="logo" src="./logo.png"></img>
            <Search />
            <div className="basketField">
                <div className="counter">{context.basketItemList ? context.basketItemList.length : 0}</div>
                <div className="basket" onMouseOver={() => { setShowBasket(true) }} onClick={() => { setShowBasket(false) }}>
                    Sepetim
                    {
                        showBasket && (<Basket closeBucket={(data) => { setShowBasket(data) }} />)
                    }
                </div>

            </div>

        </div>
    )
}

export default Header;