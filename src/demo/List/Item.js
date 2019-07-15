import $ from "jquery"
import getCart from "../ShoppingCart/cart.js"

export default class Item{
    constructor(list, data){
        this.$el = $('div')
        this.list = list
        this.data = data
        this.cart = getCart()
    }
    
}