import axios from "axios"
import Cart from "../../../apis/Cart"



export const addProductToCart =({commit, dispatch},{product, quantity}) =>{
    commit('ADD_TO_CART',{ product, quantity })
    dispatch('addNotification',{
        type: 'success',
        message: 'Product added to cart'
    },{root:true})
    Cart.store({
        product_id: product.id,
        quantity

    })

}
export const getCartItems = ({commit}) => {
    Cart.all().then(response => {
            commit('SET_CART', response.data)
        })
}
export const removeItemFromCart =({commit, dispatch}, product) => {
        commit('REMOVE_FROM_CART', product )
        dispatch('addNotification',{
            type: 'warning',
            message: 'Product removed from cart'
        },{root:true})
    // axios.delete(`http://127.0.0.1:8000/api/cart/${product.id}`)
    Cart.delete(product.id)
}

export const cleanTheCart = ({commit, dispatch}) =>{
    commit('CLEAR_CART_ITEMS')
    dispatch('addNotification',{
        type: 'warning',
        message: 'All products removed from cart'
    },{root:true})
    Cart.deleteAll()
}