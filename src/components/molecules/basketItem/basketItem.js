import React, { useEffect, useContext, useState } from "react";
import { AppContext } from "../../../Context";

import './basketItem.css'
const BasketItem = ({ props, closeBucket }) => {
    const modal = {
        data: props
    };
    const context = useContext(AppContext)
    return (
        <div className="itemBody" onMouseOver={() => { closeBucket(true) }}>
            <div className="imageCover">
                <img src={`./${props.imageUrl}`} className="basketImage" />
            </div>
            <div className="basketItemDetail">
                <div className="basketItemName">
                    {
                        props.name
                    }
                </div>
                <div className="removeItemButton" onClick={() => { context.setModal(modal); closeBucket(false) }}>
                    Kaldır
                </div>
            </div>
        </div>


    )
}

export default BasketItem;