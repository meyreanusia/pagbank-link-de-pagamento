import { createSlice } from "@reduxjs/toolkit";
import data from "../../../../mocks/data.json";


const initialState = data
const productsSlice = createSlice({
    name:"linksPagamentos",
    initialState
})

export default productsSlice.reducer;