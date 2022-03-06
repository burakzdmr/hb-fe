import React, { useContext } from "react";
import { AppContext } from './Context'
import Modal from "./components/molecules/modal/modal"
const ModalHandler = () => {
    const context = useContext(AppContext);
    if (context.modal)
        return <Modal />
    else
        return null;
}
export default ModalHandler;
