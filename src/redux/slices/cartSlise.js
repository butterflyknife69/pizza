import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  totalPrice: 0,
  items: [],
}


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItems(state, action) {
      const findItem = state.items.find(obj => obj.id === action.payload.id)
      if (findItem) {
        findItem.count++
      } else {
        state.items.push({
          ...action.payload,
          count: 1
        })
      }
    },
    removeItems(state, action) {
      state.items.filter(obj => obj.id !== action.payload)
    },
    clearItems(state) {
      state.items = []
    }
  }
})

export const { addItems, removeItems, clearItems } = cartSlice.actions
export default cartSlice.reducer