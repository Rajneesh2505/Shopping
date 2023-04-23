import "./App.css"
import Header from "./component/header";
import Trimmer from"./component/assets/teimmer.jpg"
import IPhone from"./component/assets/iphone - Copy.jpg"
import Tele from"./component/assets/tele.jpg"
import Puma from"./component/assets/puma.jpg"
import One8 from"./component/assets/one8.jpg"
import Laptop from"./component/assets/laptop - Copy.jpg"
import Taddy from"./component/assets/taddy.jpg"
import SurfExcel from"./component/assets/surf excel.jpg"
import Envy from"./component/assets/envy.jpg"
import Jewellery from"./component/assets/jewellery.jpg"
import Canon from"./component/assets/canon.jpg"
import Cricket from"./component/assets/cricket bat.jpg"
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
const App=()=>{
  const data=[
    {
      name:"Phillips Trimmer",
      image:Trimmer,
      price:1250,
    },
    {
      name:"IPhone",
      image:IPhone,
      price:65000,
    },
    {
      name:" LG Televison",
      image:Tele,
      price:18000,
    },
    {
      name:"Puma Cap",
      image:Puma,
      price:520,
    },
    {
      name:"one8 Tshirt",
      image:One8,
      price:850,
    },
    {
      name:"Laptop",
      image:Laptop,
      price:25870,
    },
    {
      name:"kookaburra cricket bat",
      image:Cricket,
      price:1800,
    },
    {
      name:"Canon Camera",
      image:Canon,
      price:115000,
    },
    {
      name:"Taddy",
      image:Taddy,
      price:980,
    },
    {
      name:"Surf Excel",
      image:SurfExcel,
      price:190,
    },
    {
      name:"Jewellery",
      image:Jewellery,
      price:5340,
    },
    {
      name:"Envy Perfume",
      image:Envy,
      price:280,
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
    <Header></Header>
    <div className="modes">
     <Link to="/grocery"><img src="https://tse2.mm.bing.net/th?id=OIP.39L6KLL0JbTW5qQCZoHWOwHaE3&pid=Api&P=0" className="img"/></Link>
     <span className="title">Grocery</span>
     <Link to="/mobiles"><img src="https://tse2.mm.bing.net/th?id=OIP.vberqWHYVaXBZU8FYqt1NAHaE7&pid=Api&P=0" className="img"/></Link>
     <span className="title">Mobile</span>
     <Link to="/feshion"><img src="https://tse4.mm.bing.net/th?id=OIP.ewIPWgQ3Hr91j6RAzqgnKAHaEK&pid=Api&P=0"  className="img"/></Link>
     <span className="title">Feshion</span>
     <Link to="/electronics"><img src="https://tse4.mm.bing.net/th?id=OIP.-VKAINgf50ay6wNGG8j75gHaFj&pid=Api&P=0" className="img"/></Link>
     <span className="title">Electronics</span>
     <Link to="/beauty"><img src="https://tse4.explicit.bing.net/th?id=OIP.3XlHnZsAwzvBE_RMLRDmiwHaHv&pid=Api&P=0" className="img"/></Link>
     <span className="title">Beauty,Tous & more</span>
    </div>
    <hr></hr>
    {data.map((e)=>{
      return (
        <>
        <div className="items">
        <p><img src={e.image} className="itemImage"/></p>
        <p><b>{e.name}</b></p>
        <p><span style={{"fontSize":"20px","color":"black"}}>&#8377;</span>{e.price}</p>
        <button onClick={()=>{setA([...a,e])}}>Add To Cart</button>
        </div>
        </>
      )
    })}
    </>
  )
}
export default App;