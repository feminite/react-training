import React from "react";

export const Modal = ({ openModal, setOpenModal }) => {
    return <>
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="modal-header">
                    Header
                    <button
                        className="modal-close"
                        onClick={()=>{
                            setOpenModal(false);
                        }}
                    >
                        ×
                    </button>
                </div>
                <div className="modal-content">

                </div>
                <div className="modal-footer">
                    <button>Submit</button>
                    <button
                        onClick={()=>{
                            setOpenModal(false);
                        }}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    </>;
};
