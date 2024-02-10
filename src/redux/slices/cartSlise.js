import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  totalPrice: 0,
  items: [],
}

const filterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
addItems(state,action){
state.items.push(action.payload)
},
removeItems(state,action){
  state.items.push(action.payload)
}
  }
})

export const { setCategoryId, setSort, setCurentPage, setFilters } = filterSlice.actions
export default filterSlice.reducer