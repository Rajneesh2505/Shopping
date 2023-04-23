import Header from "./header";
import RedBull from "./GroceryAssets/redBull.jpg"
import Harpic from"./GroceryAssets/harpic.jpg"
import Horlicks from "./GroceryAssets/horlicks.jpg"
import Atta from "./GroceryAssets/aashirwadAtta.jpg"
import Coca from "./GroceryAssets/coca.jpg"
import Utensils from "./GroceryAssets/kitchen.jpg"
import Johnson from"./GroceryAssets/johnsonBaby.jpg"
import Jaggery from "./GroceryAssets/jeggery.jpg"
import Soap from "./GroceryAssets/soap.jpg"
import Shampoo from "./GroceryAssets/shampoo.jpg"
import Oil from"./GroceryAssets/oil.jpg"
import Goldiee from "./GroceryAssets/goldiee.jpg"
import "./header.css"
import { useEffect,useState } from "react";
const Grocery=()=>{
    const products=[
        {
            name:"Red Bull Energy Drink",
            image:RedBull,
            price:"120"
        },
        {
            name:"Harpic Toilet Cleaner 750 ml",
            image:Harpic,
            price:"309"
        },
        {
            name:"Horlicks Protein Plus",
            image:Horlicks,
            price:"290"
        },
        {
            name:"Aashirwad Organic Atta",
            image:Atta,
            price:"870"
        },
        {
            name:"Coca Cola ",
            image:Coca,
            price:"45"
        },
        {
            name:"Brown SG kitchen Spoons",
            image:Utensils,
            price:"466"
        },
        {
            name:"Johnson's Baby Hair Oil 200ml",
            image:Johnson,
            price:"170"
        },
        {
            name:"Gud Jaggery",
            image:Jaggery,
            price:"155"
        },
        {
            name:"Pears Bath Soap",
            image:Soap,
            price:"244"
        },
        {
            name:"Goldiee Sabji Masala 250mg ",
            image:Goldiee,
            price:"80"
        },
        {
            name:"Chambal fresh oil",
            image:Oil,
            price:"489"
        },
        {
            name:"Clinic Plus Shampoo 1 L",
            image:Shampoo,
            price:"243"
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
            products.map((e)=>{
                return (
                    <>
                    <div className="grocery" >
                        <img src={e.image} className="grocery-image"/>
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
export default Grocery;