
import $ from 'jquery'
import getCart  from "./cart.js"
export default class ShoppingCart{
    constructor(app){
        this.app = app
        this.$el = $('div').css({
            'border-bottom':'1px solid red'
        })
        this.cart = getCart()

    }
    initBtn(){
        let $btn= $('<button>购物车</button>')
        $btn.click(()=>{
            this.showCart()
        })
        this.$el.append($btn)

    }
    showCart(){
        alert(this.cart.getList())
    }
    render(){
        this.app.$el.append(this.$el)

    }

    init(){
        this.initBtn()
        this.render()
    }
}