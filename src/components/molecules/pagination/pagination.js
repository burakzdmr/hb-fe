import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../Context";
import "./style.css";
const Pagination = () => {
    const context = useContext(AppContext)
    const setPage = (pageNo) => {
        let newPage = 0;
        if (pageNo !== "-1" && pageNo !== "+1") {
            newPage = pageNo;
        }
        else {
            const nPage = parseInt(context.page) + parseInt(pageNo)
            newPage = nPage >= 1 && nPage <= context.pageCount ? nPage : context.page;
        }
        context.setPage(newPage.toString())
    }
    useEffect(() => {
    }, [context.page])
    return (
        <div className="paginationBody">
            <div className="paginationButtons">
                {
                    context?.pageCount > 1 ? <div className="pageButton" onClick={() => { setPage("-1") }}>
                        {"<"}
                    </div> : null
                }
                {[...Array(context?.pageCount)].map((x, i) => (
                    <div className="pageButton" key={i} onClick={() => { setPage((i + 1).toString()) }}>
                        {i + 1}
                    </div>
                ))}
                {
                    context?.pageCount > 1 ? <div className="pageButton" onClick={() => { setPage("+1") }}>
                        {">"}
                    </div> : null
                }
            </div>
        </div>
    )

}



export default Pagination;