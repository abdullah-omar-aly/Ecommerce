import { createSlice } from "@reduxjs/toolkit";

const syncCartWithLocalStorage = (state) => {
    const cart = {
        cartProducts: state.cartProducts,
        totalPrice: state.totalPrice
    }
    window.localStorage.setItem('cart' , JSON.stringify(cart))
}

const calcTotalPrice = (state) => {
    let sum = 0
    for (let i = 0; i < state.cartProducts.length; i++) {
        sum = sum + state.cartProducts[i].price * state.cartProducts[i].quantity
    }
    state.totalPrice = sum
}

const cartSlice = createSlice({
    name: "cart",
    initialState : {
        isVisible: false,    
        cartProducts: [],
        totalPrice: null
    },
    reducers: {
        showCart: (state) => {
            state.isVisible = true
        },
        hideCart: (state) => {
            state.isVisible = false 
        },
        addToCart: (state, action) => {
            const  product  = action.payload 
            const cartProduct = {
                id: product.id,
                title: product.title,
                quantity: 1,
                price: product.price,
                image: product.image
            }
            state.cartProducts = [...state.cartProducts, cartProduct]
            calcTotalPrice(state)
            syncCartWithLocalStorage(state)
        },
        increaseProductQuantity: (state, action) => {
            const Ind = state.cartProducts.findIndex(item => item.id === action.payload.productId)
            state.cartProducts[Ind].quantity += action.payload.quantity
            calcTotalPrice(state)
            syncCartWithLocalStorage(state)

        },
        decreaseProductQuantity: (state, action) => {
            const Ind = state.cartProducts.findIndex(item => item.id === action.payload.productId)
            state.cartProducts[Ind].quantity -= action.payload.quantity
            if(state.cartProducts[Ind].quantity === 0 ){
                state.cartProducts.splice(Ind , 1)
            }
            calcTotalPrice(state)
            syncCartWithLocalStorage(state)

        },
        removeCartProduct: (state , action ) => {
            state.cartProducts = state.cartProducts.filter(item => item.id !== action.payload.productId)
            calcTotalPrice(state)
            syncCartWithLocalStorage(state)
        },
        handleAppInit: (state , action) => {
            if (window.localStorage.getItem('cart')){
                state.cartProducts = JSON.parse(window.localStorage.getItem('cart')).cartProducts
            }
            calcTotalPrice(state)
        }
    } 

})


export const selectCartItems = (state) => state.cart

export const cartActions = cartSlice.actions

export default (cartSlice.reducer)
