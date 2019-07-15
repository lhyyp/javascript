import $ from 'jquery'
import ShoppingCart from "./ShoppingCart/index"
import List from "./List/index"

export default class APP{
    constructor(id){
        this.$el = $("#"+id)

    }
    //  初始化購物車
    initShoppingCart(){
        let ShoppingCart = new ShoppingCart(this)
        ShoppingCart.init()
    }
    // 初始化列表
    initList(){
        let List = new List(this)
        List.init()

    }
    init(){
        this.initList()
        this.initShoppingCart()
    }
}