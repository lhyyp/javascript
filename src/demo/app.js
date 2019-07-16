import $ from 'jquery'
import ShoppingCart from "./ShoppingCart/index.js"
import List from "./List/index.js"

export default class APP{
    constructor(id){
        this.$el = $("#"+id)

    }
    //  初始化購物車
    initShoppingCart(){
        let shoppingCart = new ShoppingCart(this)
        shoppingCart.init()
    }
    // 初始化列表
    initList(){
        let list = new List(this)
        list.init()

    }
    init(){
        this.initShoppingCart()
        this.initList()
    }
}