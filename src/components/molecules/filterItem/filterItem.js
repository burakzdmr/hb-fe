import React, { useEffect, useState, useContext } from "react";
import * as u4 from 'uuid'
import { AppContext } from "../../../Context";
import './filterItem.css'
const FilterItem = ({ title, subItems }) => {
    const context = useContext(AppContext)

    const setFilterOrOrder = (item) => {
        if (item.type === 1) {
            context.brand === undefined || context.brand === "" ? context.setBrand(item.name) : context.setBrand("")
        }
        else if (item.type === 2) {
            context.color === undefined || context.color === "" ? context.setColor(item.name) : context.setColor("")
        }
        else {
            context.setOrder(item.value)
        }
    }


    return (
        <div className="filterItem">
            <div className="filterTitle" data-testid="filter-item-title">
                {title}
            </div>
            <div className="filterSubItemList">
                {
                    subItems ? <div>
                        {

                            subItems.map((item) => {
                                return (<div key={u4.v4()} data-testid={`filter-item-${item.name}`} className={
                                    item.name === context.brand || item.name === context.color || (item.type === 3 && item.value === context.order) ? "selectedSubItem" : "filterSubItem"
                                } onClick={() => {
                                    setFilterOrOrder(item)
                                }}>
                                    {
                                        item.type !== 3 ? item.name + `(${item.count})` : item.name
                                    }
                                </div>)
                            })
                        }
                    </div> : null
                }
                <div className="filterSubItem">

                </div>

            </div>
        </div>
    )
}

export default FilterItem;

