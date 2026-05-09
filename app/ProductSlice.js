import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  value: [],
}

export const ProductSlice = createSlice({
  name: 'value',
  initialState,
  reducers: {
    // GetProducts:(state,action)=>{
    //     state.value = action.payload
    // },
    GetProducts:(state ,action)=> {
      state.value = action.payload.map(item => ({
    ...item,
    discount: item.discount === null ? 0 : item.discount,
    original_price: item.original_price === null ? item.price : item.original_price
  }));
    },
    // FilterReducer:(state,action)=>{
    //     state.value = action.payload
    // },
    // CartReducer:(state,action)=>{
    //     state.cart = [...state.cart , action.payload]
    //     localStorage.setItem('cartItems', JSON.stringify(state.cart))
    // },
    // WishlistReducer:(state,action)=>{
    //     state.Wishlist = [...state.Wishlist, action.payload]
    //     localStorage.setItem('WishlistItems',JSON.stringify(state.Wishlist))
    // },
    // RemoveReducer:(state,action)=>{
    //    state.cart = state.cart.filter((item)=> item.id !== action.payload)
    //    localStorage.setItem('cartItems', JSON.stringify(state.cart))
    // },
    // WishlistRemoveReducer:(state,action)=>{
    //    state.Wishlist = state.Wishlist.filter((item)=> item.id !== action.payload)
    //   localStorage.setItem('WishlistItems',JSON.stringify(state.Wishlist))
    // },
    // IncrementReducer:(state,action) => {
    //   state.cart = state.cart.map((item)=>{
    //     return item.id == action.payload ? {...item, quan: item.quan + 1} : item 
    //   })
    //   localStorage.setItem("cartItems", JSON.stringify(state.cart))
    // },
    // DecrementReducer: (state, action)=> {
    //   state.cart = state.cart.map((item)=>{
    //     return item.id == action.payload ? {...item, quan: item.quan -1 } : item        
    //   })
    //   localStorage.setItem("cartItems", JSON.stringify(state.cart))
    // },
    // SubTotalReducer: (state,)=> {
    //   state.subTotal = state.cart.reduce((current,item)=> current + (item.quan * item.price),0)
    // }


  }
})


export const { GetProducts } = ProductSlice.actions


export default ProductSlice.reducer