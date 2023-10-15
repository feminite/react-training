import React, {useRef} from "react";

export const Modal = ({ openModal, setOpenModal }) => {
    const checkboxRef = useRef(null);
    const categoryRef = useRef(null);
    const priceRef = useRef(null);
    const nameRef = useRef(null);

    function handleSubmit(event) {
        event.preventDefault();
        alert(`Name: ${categoryRef.current.value}, Price: ${priceRef.current.value}, stocked: ${checkboxRef.current.checked}, Name: ${nameRef.current.value}`);
    }

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
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="category"
                            placeholder="Category"
                            ref={categoryRef}
                        />
                        <input
                            type="text"
                            name="price"
                            placeholder="Price"
                            ref={priceRef}
                        />
                        <div>
                            <label>Stocked</label>
                            <input
                                type="checkbox"
                                name="stocked"
                                ref={checkboxRef}
                            />
                        </div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            ref={nameRef}
                        />

                        <div className="modal-footer">
                            <button type="submit">
                                    Add to list
                            </button>
                            <button type="button"
                                onClick={()=>{
                                    setOpenModal(false);
                                }}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>;
};
