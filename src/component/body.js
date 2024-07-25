import { Link } from "react-router-dom";
import logo from "./asset/z5516048378814_c672a717c467636cf9adf3bd6a2c2264.jpg"
function Body(){

return (
    <div class="body-web">
            <div class="body-web-img">
            <img
                src={logo}
                alt="abcxyz"></img>
            </div>
            <div class="body-web-des">
                <span class="des-1">‘Denim’</span>
                <span class="des-2">GHỆ ĐẸP</span>
                <span class="des-3">Stunt on ‘em with the Tatum 2 ‘Denim’. This
                    special
                    edition pairs old-school denim-inspired accents with<br></br>
                    court-ready tech designed to help you with energy
                    return.</span>

            </div>
            <Link to={"/shop"}><button
                    class="button-des">Shop</button></Link>

        </div>
);
}
export default Body;