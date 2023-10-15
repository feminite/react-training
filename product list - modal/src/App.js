import { useState } from 'react';
import { FilterableProductTable } from "./components/list";
import { Modal} from "./components/modal";


const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
      <FilterableProductTable products={PRODUCTS} />

      <button
          className="open-modal"
          onClick={()=>{
              setOpenModal(true);
          }}
      >
        Open modal
      </button>
      {openModal && <Modal openModal={openModal} setOpenModal={setOpenModal}/>}
    </div>
  );
}

export default App;
