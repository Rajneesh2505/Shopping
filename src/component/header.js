import "./header.css"
import { Link } from "react-router-dom"
const Header=()=>{
return(
    <>
    <div className="body">
    <nav className="nav">
     <span>Flipkart</span>
     <button className="btn">LogIn</button>
     <Link to="/myCart"><img src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png" className="cart" /></Link>
    </nav>
    </div>
    </>
)
}
export default Header