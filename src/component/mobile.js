import Header from "./header";
import Iphone from "./MobileAssets/12mini.jpg"
import Blackberry from "./MobileAssets/BlackBerry-5G.jpg"
import OnePlus from "./MobileAssets/oneplus.jpg"
import Oppo from "./MobileAssets/oppo.jpg"
import Pixcel from"./MobileAssets/pixcel.jpg"
import Samsung from "./MobileAssets/samsung.jpg"
import "./header.css"
import { useEffect,useState } from "react";
const Mobile=()=>{
    const mobiles=[
        {
        image:Iphone,
        name:"APPLE iPhone 12 mini (Blue, 64 GB)",
        storage:"64 GB ROM",
        display:"13.72 cm (5.4 inch) Super Retina XDR Display",
        camera:"12MP + 12MP | 12MP Front Camera",
        processor:"A14 Bionic Chip with Next Generation Neural Engine Processor",
        additional:"12MP TrueDepth Front Camera with Night Mode, 4K Dolby Vision HDR Recording , 3000mAh battery",
        price:"67,000"
        },
        {
            image:Blackberry,
            name:"BlackBerry KEY2 LE",
            storage:"64GB, microSDXC",
            display:"4.5 inches 1620 x 1080 pixels",
            camera:"13 MP (Dual camera)/ 8 MP front",
            processor:"Qualcomm Snapdragon 636",
            additional:"Android 8.1 Oreo, 3000mAh battery",
            price:"26,999"
            },
            {
                image:OnePlus,
                name:"OnePlus Nord N10",
                storage:"8ram/256rom",
                display:"6.49 inches, 101.7 cm2",
                camera:"64+2+2MP (Dual camera)/ 8 MP front",
                processor:"Qualcomm SM6350 Snapdragon 690 5G (8 nm)",
                additional:"Fingerprint (rear-mounted), accelerometer, gyro, proximity, compass 4300mAh battery",
                price:"25,890"
                },
                {
                    image:Oppo,
                    name:"OPPO Reno5 Pro 5G ",
                    storage:"8Ram/128Rom",
                    display:"16.64 cm (6.55 inch) Full HD+ Display",
                    camera:"64MP + 8MP + 2MP + 2MP | 32MP Front Camera",
                    processor:"MediaTek Dimensity 1000+ (MT6889) Processor",
                    additional:"3D Borderless Sense Screen | AI Highlight Video (Ultra Night Video + Live HDR) | Super AMOLED Display,4350 mAh Lithium-ion Polymer Battery",
                   price:"19,500"
                },
                    {
                        image:Pixcel,
                        name:"OnePlus Nord N10",
                        storage:"6ram/256rom",
                        display:"6 inches, 101.7 cm2",
                        camera:"64+ (Dual camera)/ 8 MP front",
                        processor:" Snapdragon 690 5G (8 nm)",
                        additional:"Fingerprint (rear-mounted), accelerometer, gyro, proximity, compass 4000mAh battery",
                        price:"38,999"
                        },
                        {
                            image:Samsung,
                            name:"samsung Galaxy S20 Ultra(Cloud Navy)",
                            storage:"8ram/128rom",
                            display:"15.83cm (6.2) full rectangle / 15.41cm (6.1) rounded corners",
                            camera:"12.0 MP + 64.0 MP + 12.0 MP/ 10 MP front",
                            processor:" Snapdragon 690 5G (8 nm)",
                            additional:"Accelerometer, Barometer, Fingerprint Sensor, Gyro Sensor, Geomagnetic Sensor, Hall Sensor, RGB Light Sensor, Proximity Sensor 4000mAh battery",
                            price:"89,000"
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
      {mobiles.map((e)=>{
        return (
            <>
            <div className="mobiles">
                <img src={e.image} className="mobile-image"/>
                <p><b>{e.name}</b></p>
                <p>
                    <ul>
                        <li>{e.storage}</li>
                        <li>{e.display}</li>
                        <li>{e.camera}</li>
                        <li>{e.processor}</li>
                        <li>{e.additional}</li>
                        <li style={{"listStyle":"none","margin":"2rem 0rem"}}><b style={{"font-size":"30px","color":"black"}}><span  style={{"font-size":"30px","color":"black"}}>&#8377;</span>{e.price}</b></li>
                        <li style={{"listStyle":"none","margin":"3rem 0rem"}}><button className="cart-btn" onClick={()=>{setA([...a,e])}}>Buy Now / Add To Cart</button></li>
                    </ul>
                </p>
            </div>
            </>
        )
      })}
    </>
)
}
export default Mobile;