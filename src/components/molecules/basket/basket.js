import React, { useEffect, useContext, useState } from "react";
import { AppContext } from "../../../Context";
import BasketItem from "../basketItem/basketItem";
import './basket.css'
const Basket = ({ closeBucket }) => {
    const context = useContext(AppContext);
    return (
        <div>
            <div>
                {
                    context?.basketItemList && (
                        <div className="showBasket" onMouseOver={() => { closeBucket(true) }}>
                            {
                                context?.basketItemList.map((item) => { return (<BasketItem props={item} closeBucket={closeBucket} />) })
                            }
                        </div>
                    )
                }
            </div>
            <div className="divider" />
        </div>


    )
}

export default Basket;