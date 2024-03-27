import { Link } from "react-router-dom";
import './NavBar.css';
export default function NavBar() {

    return (
        <> 
        <section className="Nav">
          <img className="wiz" src="./src/assets/logo.png" alt="logo" /> 
        <div style={{display: "flex", gap:10, alignItems: "center", marginBottom: 15 }}>
        <button><Link to={'/'}>Home</Link></button>
        <button><Link to={'/contact'}>Contact</Link></button>
        <button><Link to={'/category'}>Category</Link></button>
        </div>
        </section>


        
        
        
        </>
    )
}