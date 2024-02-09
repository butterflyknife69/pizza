import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  categoryId: 0,
  totalitems:[],
}

const filterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCategoryId(state, action) { state.categoryId = action.payload },
    setSort(state, action) { state.sort = action.payload },
    setCurentPage(state, action) { state.currentPage = action.payload },
    setFilters(state,action){
      state.currentPage=Number(action.payload.currentPage),
      state.sort=action.payload.sort,
      state.categoryId=Number(action.payload.categoryId)
    }
  }
})

export const { setCategoryId,setSort, setCurentPage,setFilters} = filterSlice.actions
export default filterSlice.reducer