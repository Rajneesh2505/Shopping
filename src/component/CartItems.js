import "./CartItem.css"
const Cart=()=>{
    const cartShow=()=>{
        let items=localStorage.getItem("newCart")
        if(items===[]){
            return []
        }
        else{
            return JSON.parse(items)
        }
    }
    const CartData=cartShow()
    // const userCart=CartData.reduce((a,b)=>{
    //     return a+parseInt(b.price)
    // },0)
    // console.log(userCart)
return (
    <>
    {CartData.map((e)=>{
        return (
            <>
            <div className="carts">
                <img src={e.image} className="cart-img"/>
                <p className="itemName"><b>{e.name}</b></p>
                <p className="amount"><b style={{"fontSize":"30px","color":"black"}}><span  style={{"fontSize":"30px","color":"black"}}>&#8377;</span>{e.price}</b></p>
            </div>
            </>
        )
    })}
   
    </>
)
}
export default Cart