import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const cartSlices = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromCart: (state, action) => {
        let newBasket = [...state.items];
        let itemIndex = state.items.findIndex(item=> item.id==action.payload.id);
        if(itemIndex>=0){
          newBasket.splice(itemIndex, 1);
        }else{
          console.log("can't remove item as its not in the basket");
        }
        state.items = newBasket
      },
      emptyCart: (state, action) => {
        state.items = []
      },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, emptyCart } = cartSlices.actions

export const selectCartItems = state => state.cart.items;

export const selectCartItemsById = (state, id)=> state.cart.items.filter(item=> item.id==id);

export const selectCartTotal = state => state.cart.items.reduce((total, item) => total = total+item.price, 0)

export default cartSlices.reducer