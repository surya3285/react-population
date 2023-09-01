import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { action } from "../store";

function Student() {
  const [id, setID] = useState();
  const [name, setName] = useState();
  const student = useSelector((state) => state.student);
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const addData = () => {
    dispatch(action.addData({ id: id, name: name }));
  };

  return (
    <div>
      <div>
        <form>
          <div>
            <label> Enter ID: </label>
            <input
              type="text"
              id="inp1"
              defaultValue={student.id}
              onBlur={(e) => {
                setID(e.target.value);
              }}
            />
          </div>
          <div>
            <label> Enter Name: </label>
            <input
              type="text"
              id="inp2"
              defaultValue={student.name}
              onBlur={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div>
            <button type="button" onClick={addData}>
              {" "}
              Add Data
            </button>
          </div>
        </form>
      </div>
      <div>
        <p> Counter : {counter} </p>
        <p> Student ID :{student.id} </p>
        <p> Student ID :{student.name} </p>
      </div>
    </div>
  );
}

export default Student;
