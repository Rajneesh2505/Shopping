import Header from "./header";
import Canon from"./electronicsAssets/canon.jpg"
import Dryer from"./electronicsAssets/dryer.jpg"
import Ear from"./electronicsAssets/earbuds.jpg"
import Fan from"./electronicsAssets/fan.jpg"
import Head from"./electronicsAssets/headPhones.jpg"
import Iron from"./electronicsAssets/iron.jpg"
import Led from"./electronicsAssets/led.jpg"
import Motor from"./electronicsAssets/motor.jpg"
import Oven from"./electronicsAssets/oven.jpg"
import Power from"./electronicsAssets/powerBank.jpg"
import Ref from"./electronicsAssets/ref.jpg"
import Ac from"./electronicsAssets/voltas.jpg"
import "./header.css"
import { useEffect,useState } from "react";
const Electronics=()=>{
    const ele=[
        {
            image:Canon,
            name:"Canon 350 DSLR ",
            price:"88,990"
        },
        {
            image:Dryer,
            name:"LG Hair Dryer",
            price:"2,340"
        },
        {
            image:Ear,
            name:"Boult Blutooth Ear Buds",
            price:"1,250"
        },
        {
            image:Fan,
            name:"Ceiling Fan",
            price:"1,450"
        },
        {
            image:Head,
            name:"Realme Wireless HeadPhones",
            price:"3,300"
        },
        {
            image:Iron,
            name:"Electric Iron",
            price:"1,200"
        },
        {
            image:Led,
            name:"Mi Led Television",
            price:"41,800"
        },
        {
            image:Motor,
            name:"Ac Water Motor",
            price:"3,100"
        },
        {
            image:Oven,
            name:"Microwave Oven",
            price:"10,870"
        },
        {
            image:Power,
            name:"Mi Power Bank 3000mAh",
            price:"999"
        },
        {
            image:Ref,
            name:"LG Refrigrator",
            price:"40,500"
        },
        {
            image:Ac,
            name:"Voltas Air Conditioner 1 Ton",
            price:"25,800"
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
        ele.map((e)=>{
          return (
            <>
            <div className="ele">
                <img src={e.image} className="ele-img"/>
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
export default Electronics;