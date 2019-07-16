import $ from "jquery"
import { GET_LIST } from "../config/index.js"
import createTtem from "./createItem.js"


export default class List{
    constructor(app){
        this.app = app 
        this.$el = $('div')

    }
    // 获取数据
    loadData(){
        // 返回 Promise 实例
        return fetch(GET_LIST).then(res => {
            return res.json()
        })


    }
   // 生成列表 
    initItemList(data){
        data.forEach((itemData) => {
            let item = createTtem(this, itemData)
            item.init()
        })
    }
    // 渲染
    render(){
        this.app.$el.append(this.$el)
    }

    init(){
        this.loadData().then(data =>{
            this.initItemList(data)
        }).then(() => {
            this.render()
        })

    }
}