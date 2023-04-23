import Header from "./header";
import "./header.css"
import Beard from "./beautyAssets/beard.jpg"
import Cell from "./beautyAssets/cell.jpg"
import Deo from "./beautyAssets/deo.jpg"
import Face from "./beautyAssets/face.jpg"
import Joy from "./beautyAssets/joy.jpg"
import Pampers from "./beautyAssets/pamers.jpg"
import Pool from "./beautyAssets/pool.jpg"
import Powder from "./beautyAssets/powder.jpg"
import Serum from "./beautyAssets/serum.jpg"
import Taddy from "./beautyAssets/taddy.jpg"
import Toy from "./beautyAssets/toy.jpg"
import Wild from "./beautyAssets/wild.jpg"
import { useState } from "react";
import { useEffect } from "react";
const Beauty=()=>{
    const beauty=[
        {
            image:Beard,
            name:"God Father Beard Oil",
            price:"280"
        },
        {
            image:Cell,
            name:"Toy Cell Phone ",
            price:"180"
        },
        {
            image:Deo,
            name:"Degree Spray For Women",
            price:"240"
        },
        {
            image:Face,
            name:"CharCoal Face Cream",
            price:"90"
        },
        {
            image:Pampers,
            name:"Pampers Baby Dry",
            price:"300"
        },
        {
            image:Pool,
            name:"Water Pool For Children",
            price:"560"
        },
        {
            image:Powder,
            name:"Wild Stone Powder",
            price:"460"
        },
        {
            image:Serum,
            name:"Livon Hair Serum",
            price:"160"
        },
        {
            image:Taddy,
            name:"Taddy Bear",
            price:"899"
        },
        {
            image:Toy,
            name:"Toy Dog",
            price:"689"
        },
        {
            image:Wild,
            name:"Wild Stone Ultra Sensual",
            price:"540"
        },
        {
            image:Joy,
            name:"Joy Suns Cream",
            price:"135"
        }
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
            beauty.map((e)=>{
                return (
                    <>
                    <div className="beauty">
                        <img src={e.image} className="b-img"/>
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
export default Beauty;