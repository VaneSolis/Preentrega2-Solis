import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from 'react-router-dom';
import './Carrito.css';
export default function Carrito () {

    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }
    
return (
    <>
    <section className="carrito-cont">
      <h1 className="main-title">Carrito</h1>

    {
        carrito.map((product) => (
            <div key={product.id}>
            <h2>{product.title}</h2>
            <p>Precio unitario: ${product.price}</p>
            <p>Precio total: ${product.price*product.cantidad}</p>
            <p>Cant: {product.cantidad}</p>
            </div>
        ))
    }  
    { carrito.length > 0 ?
    <div>
        <h2>Precio total: $ {precioTotal()}</h2>
    <button onClick={handleVaciar}>Vaciar</button>
    <Link to="/Checkout">Finalizar compra</Link>
    </div> :
    <h2>El carrito está vacío</h2>
    }
    </section>

    </>
   ) 

}