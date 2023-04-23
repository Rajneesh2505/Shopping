import Header from "./header";
import Formal from "./feshionAssets/formal.jpg"
import Gucci from "./feshionAssets/gucci.jpg"
import Jacket from "./feshionAssets/jacket.jpg"
import Pants from "./feshionAssets/pants.jpg"
import Watch from "./feshionAssets/watch.jpg"
import Scarf from "./feshionAssets/scarf.jpg"
import Shirt from "./feshionAssets/shirt.jpg"
import Shorts from "./feshionAssets/shorts.jpg"
import Slipper from"./feshionAssets/slipperWomen.jpg"
import Sun from "./feshionAssets/sunglasses.jpg"
import Track from "./feshionAssets/track pants.jpg"
import Women from "./feshionAssets/women.jpg"
import { useEffect,useState } from "react";
const Feshion=()=>{
    const feshion=[
        {
            image:Formal,
            name:"Men Leather Shoes (Black)",
            price:"850"
        },
        {
            image:Gucci,
            name:"Gucci Sneakers White Casual Shoes",
            price:"2180"
        },
        {
            image:Jacket,
            name:"Puma Mens Jacket",
            price:"3350"
        },
        {
            image:Pants,
            name:"Men Jogger Cargo Pants",
            price:"990"
        },
        {
            image:Watch,
            name:"Fast Track Wrist Watch ",
            price:"1,799"
        },
        {
            image:Scarf,
            name:"Womens Scarf",
            price:"360"
        },
        {
            image:Sun,
            name:"Ray Ban Sunglasses For Men  ",
            price:"680"
        },
        {
            image:Track,
            name:"Adidas Track Pants",
            price:"1,140"
        },
        {
            image:Women,
            name:"Part Wear Dress For Women",
            price:"650"
        },
        {
            image:Slipper,
            name:"Slippers For Women",
            price:"550"
        },
        {
            image:Shirt,
            name:"Casual Shirt For Men",
            price:"830"
        },
        {
            image:Shorts,
            name:"Jeans Short For Women",
            price:"1,040"
        },
    ]
    const CartItemAdd=()=>{
        let cartItem=localStorage.getItem("newCart")
        if(cartItem===[]){
            return []
        }
        else{
            return JSON.parse(cartItem)
        }
    }
    const Data=CartItemAdd()
    const [a,setA]=useState(Data)
    useEffect(()=>{
        localStorage.setItem("newCart",JSON.stringify(a))
    },[a])
    return (
        <>
        <Header/>
        {
            feshion.map((e)=>{
                return (
                    <>
                    <div className="fes">
                    <img src={e.image} className="feshion-img"/>
                    <p>{e.name}</p>
                    <p><b style={{"fontSize":"30px","color":"black"}}><span  style={{"fontSize":"30px","color":"black"}}>&#8377;</span>{e.price}</b></p>
                    <button onClick={()=>{setA([...a,e])}}>Add To Cart</button>
                    </div>
                    </>
                )
            })
        }
        </>
    )
}
export default Feshion;