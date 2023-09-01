import { configureStore, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "state1",
  initialState: {
    counter: 10,
    student: { id: "1001", name: "Surya" },
    isLogin: false,
    user: { username: "", password: "" },
    product: [
      {
        id: "",
        name: "",
        cost: "",
        quantity: "",
      },
    ],
  },
  reducers: {
    increment(state, action) {
      let data = { counter: state.counter + 1, student: state.student };
      return data;
    },
    decrement(state, action) {
      let data = { counter: state.counter - 1, student: state.student };
      return data;
    },
    incrementby(state, action) {
      let data = {
        counter: state.counter + action.payload,
        student: state.student,
      };
      return data;
    },
    decrementby(state, action) {
      let data = {
        counter: state.counter - action.payload,
        student: state.student,
      };
      return data;
    },
    addData(state, action) {
      let data = { counter: state.counter, student: action.payload };
      return data;
    },
    changeLogin(state, action) {
      let data = {
        counter: state.counter,
        student: state.student,
        isLogin: action.payload,
        user: state.user,
        product: state.product,
      };
      return data;
    },
    changeUser(state, action) {
      let data = {
        counter: state.counter,
        student: state.student,
        isLogin: state.isLogin,
        user: action.payload,
        product: state.product,
      };
      return data;
    },
    addProduct(state, action) {
      let addItem = [...state.product, action.payload];
      let data = {
        counter: state.counter,
        student: state.student,
        isLogin: state.isLogin,
        user: state.user,
        product: addItem,
      };
      return data;
    },
  },
});
export const action = slice.actions;

const store = configureStore({ reducer: slice.reducer });

export default store;
