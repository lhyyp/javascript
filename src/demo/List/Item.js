import $ from "jquery"
import getCart from "../ShoppingCart/cart.js"
import StateMachine from "javascript-state-machine"
import { log } from "../unitl/log.js";
 

export default class Item{
    constructor(list, data){
        this.$el = $('div')
        this.list = list
        this.data = data
        this.cart = getCart()
    }
    
    initContent(){
        let $el = this.$el
        let data = this.data
        $el.append($(`<p>名称：${data.name}</p>`))
        $el.append($(`<p>价格：${data.price}</p>`))

    }
    initBtn(){
        let $el = this.$el
        let $btn = $('<button>')
        let _this = this
        let fsm = new StateMachine({
            init:'加入购物车',
            transitions:[
                {
                    name:'addToCart',
                    from:'加入购物车',
                    to:'从购物车删除'
                },{
                    name:'deleteFromCart',
                    from:'从购物车删除',
                    to:'加入购物车'
                }
            ],
            methods:{
                //加入购物车
                onAddToCart:()=>{
                    this.addToCartHandle()
                    updataText()
                },
                onDeleteFromCart:() => {
                    this.deleteFromCartHanel()
                    updataText()
                }
            }
        })
        function updataText(){
            $btn.text(fsm.state)
        }

        $btn.click(() => {
            if(fsm.is("加入购物车")){
                fsm.addToCart()
            }else{
                fsm.deleteFromCart()

            }

        })
        updataText()
        $el.append($btn)


    }

    // @log('add')
    addToCartHandle(){
        this.cart.add(this.data)

    }

    // @log('del')
    deleteFromCartHanel(){
        this.cart.del(this.data)

    }
    render(){
        this.list.$el.append(this.$el)
    }
    init(){
        this.initContent()
        this.initBtn()
        this.render()

    }


    
}