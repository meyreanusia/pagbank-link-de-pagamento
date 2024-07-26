import { createSlice } from "@reduxjs/toolkit";

let initialState = null;
const productsSlice = createSlice({
  name: "linksPagamentos",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      return action.payload;
    },
    addProduct: (state, action) => {
      const newProduct = {
        data: action.payload.data,
        id: action.payload.id,
        produto: action.payload.produto,
        valor: action.payload.valor,
        status: action.payload.status,
        vendas: action.payload.vendas,
      };
      const newState = [newProduct, ...state];
      localStorage.setItem("links-payments", JSON.stringify(newState));
      return newState;
    },

    deleteProduct: (state, action) => {
      const newState = state.filter((product) => product.id !== action.payload);
      localStorage.setItem("links-payments", JSON.stringify(newState));
      return newState;
    },
    resetProduct: (state, action) => {
      const newState = state.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            vendas: 0,
            status: "ativo",
          };
        }
        return product;
      });
      localStorage.setItem("links-payments", JSON.stringify(newState));
      return newState;
    },
    pauseProduct: (state, action) => {
      const newState = state.map(product => {
        if (product.id === action.payload) {
          return {
            ...product,
            status: "pausado"
          };
        }
        return product;
      });
      localStorage.setItem("links-payments", JSON.stringify(newState));
      return newState;
    }
  },
});
export const { addProduct, setProducts, deleteProduct, pauseProduct,resetProduct } = productsSlice.actions;
export default productsSlice.reducer;
