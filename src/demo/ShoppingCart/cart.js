class Cart{
    constructor(){
        this.list = []
    }
    add(data){
        this.list.push(data)
    }

    del(data){
        this.list.forEach((item, index) => {
            if(item.id == data.id){
                this.list.splice(index,1)
            }
        })
    }

    getList(){
        return this.list.map(item => {
            return item.name
        }).join('\n')
    }

}
let getCart = (function(){
    let cart 
    return function(){
        if(!cart){
            cart = new Cart()
        }
        return cart
    }
})()

export default getCart