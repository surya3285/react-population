import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { action } from "../store";

function Counter() {
  const counter = useSelector((state) => state.counter);
  const student = useSelector((state) => state.student);
  const dispatch = useDispatch();
  let increment = () => {
    dispatch(action.increment());
  };
  let decrement = () => {
    dispatch(action.decrement());
  };

  const [inc, setInc] = useState(0);

  let byinc = () => {
    dispatch(action.incrementby(inc));
  };

  let bydec = () => {
    dispatch(action.decrementby(inc));
  };

  return (
    <div>
      <div>
        <p> Counter Value : {counter}</p>
        <p> ID :{student.id}</p>
        <p> Student :{student.name}</p>
      </div>
      <div>
        <button type="button" onClick={increment}>
          Increment
        </button>
      </div>
      <div>
        <button type="button" onClick={decrement}>
          Decrement
        </button>
      </div>
      <form>
        <div>
          <label>Enter value to increment by :</label>
          <input
            type="text"
            id="inp1"
            onBlur={(e) => {
              setInc(parseInt(e.target.value));
            }}
          />
          <button type="button" onClick={byinc}>
            Increment value
          </button>
        </div>
        <div>
          <label>Enter value to decrement by :</label>
          <input
            type="text"
            id="inp2"
            onBlur={(e) => {
              setInc(parseInt(e.target.value));
            }}
          />
          <button type="button" onClick={bydec}>
            Decrement value
          </button>
        </div>
      </form>
    </div>
  );
}

export default Counter;
