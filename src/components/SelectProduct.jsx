import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { action } from "../store";

function SelectProduct() {
  const dispatch = useDispatch();
  const [plist, setPlist] = useState([
    {
      id: "1001",
      name: "Colgate 100gm",
      cost: "20",
      quantity: 0,
      status: false,
    },
    {
      id: "1002",
      name: "Rice 1kg",
      cost: "150",
      quantity: 0,
      status: false,
    },
    {
      id: "1003",
      name: "Sugar 100gm",
      cost: "100",
      quantity: 0,
      status: false,
    },
    {
      id: "1004",
      name: "Salt 1kg",
      cost: "30",
      quantity: 0,
      status: false,
    },
    {
      id: "1005",
      name: "Tamarind 500gm",
      cost: "250",
      quantity: 0,
      status: false,
    },
    {
      id: "1006",
      name: "Atta flour 1kg",
      cost: "80",
      quantity: 0,
      status: false,
    },
    {
      id: "1007",
      name: "Basmati rice 1kg",
      cost: "250",
      quantity: 0,
      status: false,
    },
    {
      id: "1008",
      name: "Chocolate 250gm",
      cost: "150",
      quantity: 0,
      status: false,
    },
    {
      id: "1009",
      name: "Cashew 250gm",
      cost: "700",
      quantity: 0,
      status: false,
    },
    {
      id: "1010",
      name: "Badam 250gm",
      cost: "200",
      quantity: 0,
      status: false,
    },
  ]);

  const addcart = (product) => {
    dispatch(action.addProduct(product));
  };

  const handleIncrement = (id) => {
    setPlist((list) => {
      const updateList = [...list];
      updateList[id] = {
        ...updateList[id],
        quantity: updateList[id].quantity + 1,
      };
      return updateList;
    });
  };

  const handleDecrement = (id) => {
    setPlist((list) => {
      const updateList = [...list];
      if (updateList[id].quantity > 0) {
        updateList[id] = {
          ...updateList[id], // copies entire data of one id
          quantity: updateList[id].quantity - 1,
        };
      }
      return updateList;
    });
  };

  const prepareList = () => {
    return plist.map((product, index) => (
      <div key={product.id} className="product">
        <li className="list-group-item mb-5">
          <div>{product.id}</div>
          <div className="fs-3">{product.name}</div>
          <div className="fs-5">${product.cost}</div>
          <div>quantity:{product.quantity}</div>
          <div>
            <button
              className="btn btn-primary add-btn"
              onClick={() => handleIncrement(index)}
            >
              +
            </button>
            <button
              className="btn btn-secondary remove-btn"
              onClick={() => handleDecrement(index)}
            >
              -
            </button>
          </div>
          <div>
            <button
              className=" btn bg-warning mt-3"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                addcart(product);
              }}
            >
              Add to Cart
            </button>
          </div>
        </li>
      </div>
    ));
  };

  return (
    <div className="product-page">
      <p className="display-4 m-auto w-25">Products</p>
      {prepareList()}
    </div>
  );
}

export default SelectProduct;
