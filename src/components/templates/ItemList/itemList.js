import React, { useEffect, useContext } from "react";
import Item from "../../molecules/item/item";
import "./style.css"
import { UseSearch } from "../../../hooks/use-search";
import { AppContext } from "../../../Context"
const ItemList = () => {
    const search = UseSearch();
    const context = useContext(AppContext);

    return (
        < >
            {
                context.loading ?
                    (<div className="itemList">Ürünler getiriliyor..</div>)
                    :
                    <>
                        {
                            context.itemList ?
                                <div className="itemList">
                                    {
                                        context.itemList.map((item) => {
                                            return <Item props={item} key={item.id} />
                                        })

                                    }
                                </div>
                                :
                                <div className="itemList"></div>
                        }
                    </>
            }

        </>
    )
}

export default ItemList;

