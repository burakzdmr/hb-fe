import React from "react";

const contextDefaultValues = {
    itemList: [],
    search: "",
    color: "",
    brand: "",
    page: "0",
    modal: null,
    filterList: [],
    order: "",
    basketItemList: [],
    pageCount: 0,
    loading: null,
    setModal: () => { },
    setItemList: () => { },
    setBrand: () => { },
    setSearchText: () => { },
    setFilterList: () => { },
    setColor: () => { },
    setOrder: () => { },
    addBasketItemList: () => { },
    removeBasketItemList: () => { },
    setPageCount: () => { },
    setPage: () => { },
    setLoading: () => { }
};

export const AppContext = React.createContext(contextDefaultValues);


function ContextReducer(state, action) {

    const { type, payload } = action;
    switch (type) {
        case "SET_ITEMLIST": {
            return {
                ...state,
                itemList: payload
            }
        }
        case "SET_FILTERLIST": {
            return {
                ...state,
                filterList: payload
            }
        }
        case "SET_MODAL": {
            return {
                ...state,
                modal: payload
            }
        }
        case "SET_SEARCHTEXT": {
            return {
                ...state,
                search: payload
            }
        }
        case "SET_LOADING": {
            return {
                ...state,
                loading: payload
            }
        }
        case "SET_BRAND": {
            return {
                ...state,
                page: "0",
                brand: payload
            }
        }
        case "SET_COLOR": {
            return {
                ...state,
                page: "0",
                color: payload
            }
        }
        case "SET_PAGECOUNT": {
            return {
                ...state,
                pageCount: payload
            }
        }
        case "SET_PAGE": {
            return {
                ...state,
                page: payload
            }
        }
        case "SET_ORDER": {
            return {
                ...state,
                order: payload.order,
                itemList: payload.list
            }
        }
        case "SET_BASKET": {
            return {
                ...state,
                basketItemList: payload
            }
        }

    }
}

const getLocalBasketList = () => {
    let list = []
    let local = localStorage.getItem('basket');
    if (local && local !== null) {
        list = JSON.parse(local);
    }
    return list;
}


const ContextProvider = ({ children }) => {

    let initialState = {
        basketItemList: getLocalBasketList()
    };
    const [state, dispatch] = React.useReducer(ContextReducer, initialState);
    const setItemList = (data) => {
        dispatch({ type: "SET_ITEMLIST", payload: data })
    }
    const setModal = (data) => {
        dispatch({ type: "SET_MODAL", payload: data })
    }

    const setSearchText = (data) => {
        dispatch({ type: "SET_SEARCHTEXT", payload: data })
    }

    const setBrand = (data) => {
        dispatch({ type: "SET_BRAND", payload: data })
    }

    const setColor = (data) => {
        dispatch({ type: "SET_COLOR", payload: data })
    }
    const setLoading = (data) => {
        dispatch({ type: "SET_LOADING", payload: data })
    }
    const setPageCount = (data) => {
        dispatch({ type: "SET_PAGECOUNT", payload: data })
    }
    const setPage = (data) => {
        dispatch({ type: "SET_PAGE", payload: data })
    }
    const setFilterList = (data) => {
        dispatch({ type: "SET_FILTERLIST", payload: data })
    }

    const addBasketItemList = (data) => {
        let currentBasket = getLocalBasketList();
        const basketItem = {
            id: data.id,
            name: data.name,
            imageUrl: data.imageurl,
            addTime: new Date().getTime()
        }
        currentBasket.push(basketItem)
        currentBasket.sort(function (a, b) {
            return a.addTime - b.addTime;
        });

        const localStorageString = JSON.stringify(currentBasket);
        localStorage.setItem('basket', localStorageString);

        dispatch({ type: "SET_BASKET", payload: currentBasket })
    }

    const removeBasketItemList = (data) => {
        let currentBasket = [];
        currentBasket = Object.assign([], state.basketItemList);
        currentBasket = currentBasket.filter(x => x.id !== data.id);
        currentBasket.sort(function (a, b) {
            return a.addTime - b.addTime;
        });

        const localStorageString = JSON.stringify(currentBasket);
        localStorage.setItem('basket', localStorageString);

        dispatch({ type: "SET_BASKET", payload: currentBasket })
    }


    const setOrder = (data) => {
        let newList = Object.assign([], state.itemList)
        switch (data) {
            case "lowestPrice": {
                newList.sort(function (a, b) {
                    return a.price - b.price;
                });
                break
            }
            case "highestPrice": {
                newList.sort(function (a, b) {
                    return b.price - a.price;
                });
                break
            }
            case "newestA": {
                newList.sort(function (a, b) {
                    return parseInt(a.createddate) - parseInt(b.createddate);
                });
                break
            }
            case "newestZ": {
                newList.sort(function (a, b) {
                    return parseInt(b.createddate) - parseInt(a.createddate);
                });
                break
            }
        }
        dispatch({ type: "SET_ORDER", payload: { order: data, list: newList } })
    }
    return (
        <AppContext.Provider value={{
            itemList: state.itemList,
            modal: state.modal,
            search: state.search,
            brand: state.brand,
            color: state.color,
            page: state.page,
            filterList: state.filterList,
            order: state.order,
            basketItemList: state.basketItemList,
            pageCount: state.pageCount,
            loading: state.loading,
            setBrand,
            setColor,
            setSearchText,
            setModal,
            setItemList,
            setFilterList,
            setOrder,
            setPageCount,
            addBasketItemList,
            removeBasketItemList,
            setPage,
            setLoading
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default ContextProvider;