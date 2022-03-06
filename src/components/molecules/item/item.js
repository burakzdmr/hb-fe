import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../../../Context";
import './item.css'
const Item = ({ props }) => {

    const context = useContext(AppContext)
    const [addedItem, setAddedItem] = useState(false)
    const [onItem, setOnItem] = useState(false)


    const addItemToBasket = () => {
        context.addBasketItemList(props)
    }

    useEffect(() => {
        if (context.basketItemList) {
            const isExistInBasket = context.basketItemList.filter(x => x.id === props.id);
            (isExistInBasket && isExistInBasket.length > 0) ? setAddedItem(true) : setAddedItem(false)

        }
    }, [context])

    return (
        <div className="item"
            onMouseOver={() => {
                setOnItem(true)
            }}
            onMouseLeave={() => {
                setOnItem(false)
            }}>
            <div className="imageHolder">
                <img src={`./${props.imageurl}`} className="image" />
            </div>
            <div className="itemInfo">
                <div className="name">
                    {
                        props.name
                    }
                </div>
                {
                    addedItem & onItem ? (<div className="cantAddBasket">
                        Bu ürünü sepete ekleyemezsiniz.
                    </div>)
                        :
                        !addedItem & onItem ? (
                            <div className="addBasket" onClick={() => { addItemToBasket() }}>
                                Sepete Ekle
                            </div>)
                            :
                            <div>
                                <div className="detail">
                                    <div className="detailRow">
                                        <div className="detailTitle">
                                            Marka:
                                        </div>
                                        <div data-testid="item-brand">
                                            {
                                                props.brand
                                            }
                                        </div>
                                    </div>
                                    <div className="detailRow">
                                        <div className="detailTitle">
                                            Renk:
                                        </div>
                                        <div data-testid="item-color">
                                            {
                                                props.color
                                            }
                                        </div>
                                    </div>
                                    <div className="price" data-testid="item-price">{props.price}TL</div>
                                    <div className="oldPriceRow">
                                        <div className="oldPrice">
                                            {props.oldprice}TL
                                        </div>
                                        <div className="percent">
                                            {props.changepercent}%
                                        </div>
                                    </div>
                                </div>
                            </div>
                }
            </div>


        </div>
    )
}

export default Item;



