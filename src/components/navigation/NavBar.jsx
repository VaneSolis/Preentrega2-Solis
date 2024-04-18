import { Link } from "react-router-dom";
import './NavBar.css';
import { CartContext } from "../../context/CartContext";
import CartWidget from "../CartWitdget";
export default function NavBar() {

    

    return (
        <> 
        <section className="Nav">
        <Link to={'/'} className="logo"><h1>TechnoShop</h1></Link>
        <ul style={{display: "flex", gap:10, alignItems: "center", marginBottom: 15 }}>
        <li><Link to={'/'} className="link">Inicio</Link></li>
        <li><Link to={'/contact'} className="link">Contacto</Link></li>
        <li><Link to={'/Catalogo'} className="link">Catálogo</Link></li>
        <li><CartWidget /></li>
        </ul>
        </section>


        
        
        
        </>
    )
}