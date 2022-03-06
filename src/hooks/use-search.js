import { useLazyQuery } from "@apollo/client";
import { useContext, useEffect } from "react";
import { getData } from "../graphql/query"
import { AppContext } from "../Context"

export const UseSearch = () => {
    const context = useContext(AppContext)
    const [dataQuery, { data, loading }] = useLazyQuery(getData);

    useEffect(() => {
        if (data?.fetchData) {
            if (data?.fetchData?.filters) {
                context.setFilterList(data?.fetchData?.filters)

            }
            if (data?.fetchData?.paginatedItemList) {
                context.setItemList(data?.fetchData?.paginatedItemList)
            }
            if (data?.fetchData) {
                context.setPageCount(data.fetchData.pageCount)
            }
        }
    }, [data])

    useEffect(() => {
        context.setLoading(loading)
    }, [loading])

    useEffect(() => {
        if (context.search === undefined || context.search === "")
            getItems()
        else if (context.search && context.search.length >= 2)
            getItems()
    }, [context.search])

    useEffect(() => {
        getItems()
    }, [context.brand])

    useEffect(() => {
        getItems()
    }, [context.color])

    useEffect(() => {
        getItems()
    }, [context.page])

    const getItems = () => {
        dataQuery(
            {
                variables:
                {
                    name: context.search ? context.search : "",
                    brand: context.brand ? context.brand : "",
                    color: context.color ? context.color : "",
                    page: context.page ? context.page : "0"
                }
            }
        )
    }

    return {
        data,
        getItems
    }
}