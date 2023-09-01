import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const eliminate = (product) => {};
function BillProduct() {
  const cart = useSelector((state) => state.product);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    calTotal();
  }, []);
  const calTotal = () => {
    let price = 0;
    for (let product of cart) {
      price += product.cost * product.quantity;
    }
    setTotal(price);
  };

  const displayProduct = () => {
    return cart.map((product) => {
      if (product.id !== "" && product.quantity !== 0) {
        return (
          <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.cost}</td>
            <td>{product.quantity}</td>
            <td>{product.cost * product.quantity}</td>
          </tr>
        );
      } else {
        return null;
      }
    });
  };

  return (
    <div className="receipt">
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>{displayProduct()}</tbody>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th>Checkout total</th>
            <th>{total}</th>
          </tr>
        </table>
      </div>
    </div>
  );
}
export default BillProduct;
