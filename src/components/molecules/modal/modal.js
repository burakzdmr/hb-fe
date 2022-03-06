import React, { useContext } from "react";
import { AppContext } from "../../../Context";
import "./modal.css";
const Modal = () => {
    const context = useContext(AppContext)
    return (
        <div className="modalBack">
            <div className="modal">
                <div className="modalHeader">
                    <div className="modalTitle">
                        Ürünü silmek istediğinize emin misiniz?
                    </div>
                </div>
                <div className="modalContent">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentiall....
                </div>
                <div className="modalFooter">
                    <button className="modalDeclineButton" onClick={() => {
                        context.setModal(null)
                    }}>
                        HAYIR
                    </button>
                    <button className="modalAcceptButton buttonText" onClick={() => {
                        context.removeBasketItemList(context.modal.data)
                        context.setModal(null)
                    }}>
                        EVET
                    </button>
                </div>
            </div>
        </div>
    )

}



export default Modal;