import Beauty from "./component/beauty";
import Electronics from "./component/electronics";
import Mobile from "./component/mobile";
import Grocery from "./component/grocery";
import Feshion from "./component/feshion"
import App from "./App"
import Cart from "./component/CartItems";
import { BrowserRouter,Switch,Route } from "react-router-dom";
const Paths=()=>{
return (
    <>
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/grocery" component={Grocery}></Route>
        <Route exact path="/feshion" component={Feshion}></Route>
        <Route exact path="/mobiles" component={Mobile}></Route>
        <Route exact path="/beauty" component={Beauty}></Route>
        <Route exact path="/electronics" component={Electronics}></Route>
        <Route exact path="/myCart" component={Cart}></Route>
    </Switch>
    </BrowserRouter>
    </>
)
}
export default Paths;