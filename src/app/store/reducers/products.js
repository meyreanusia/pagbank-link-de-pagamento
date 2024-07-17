import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
// import data from "../../../../mocks/data.json";


let data = [
    {
      "data": "01/07/2024",
      "produto": "Produto A",
      "status": "ativo",
      "vendas": 150,
      "valor": 29.99,
      "id": uuidv4()
  },
  {
      "data": "15/06/2024",
      "produto": "Produto B",
      "status": "expirado",
      "vendas": 75,
      "valor": 19.99,
      "id": uuidv4()
  },
  {
      "data": "30/05/2024",
      "produto": "Produto C",
      "status": "pausado",
      "vendas": 50,
      "valor": 9.99,
      "id": uuidv4()
  },
  {
      "data": "10/07/2024",
      "produto": "Produto D",
      "status": "ativo",
      "vendas": 200,
      "valor": 39.99,
      "id": uuidv4()
  }
  ]


const initialState = data
const productsSlice = createSlice({
    name:"linksPagamentos",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            // console.log(JSON.stringify(state, null, 2));
            const newProduduct = {
                "data": action.payload.data,
                "id": action.payload.id,
                "produto": action.payload.produto,
                "valor": action.payload.valor,
                "status": action.payload.status,
                "vendas": action.payload.vendas
            }
            return [newProduduct, ...state]
        }
        
    }
})
export const {addProduct} = productsSlice.actions
export default productsSlice.reducer;