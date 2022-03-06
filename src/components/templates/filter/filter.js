import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../Context";
import FilterItem from "../../molecules/filterItem/filterItem";
import "./style.css"

const OrderItem = [
    { name: "En Düşük Fiyat", value: "lowestPrice", type: 3 },
    { name: "En Yüksek Fiyat", value: "highestPrice", type: 3 },
    { name: "En Yeniler (A>Z)", value: "newestA", type: 3 },
    { name: "En Yeniler (Z>A)", value: "newestZ", type: 3 }
]

const Filter = () => {
    const context = useContext(AppContext)
    const [brands, setBrands] = useState([]);
    const [colors, setColors] = useState([]);

    useEffect(() => {
        if (context.filterList && context.filterList?.length > 0) {
            setBrands(context.filterList.filter(x => x.type === 1))
            setColors(context.filterList.filter(x => x.type === 2))
        }
    }, [context.filterList])

    return (
        <div className="filters" >
            {
                colors && colors.length > 0 ? <FilterItem title="Renk" subItems={colors} /> : null
            }
            <FilterItem title="Sıralama" subItems={OrderItem} />
            {
                brands && brands.length > 0 ? <FilterItem title="Marka" subItems={brands} /> : null
            }

        </div>
    )
}

export default Filter;