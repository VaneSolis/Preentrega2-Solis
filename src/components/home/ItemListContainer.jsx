import { useNavigate } from "react-router-dom";
import { getProducts } from "../../asyncMock";
import './ItemListCont.css'
import { useEffect, useState } from "react";
export default function ProductsComponent() {
    const navigate = useNavigate();

    const[products, setProducts] = useState([]);

    useEffect(()=> {
        getProducts.then((data) => setProducts(data));
    });

    const handleClick = (id) => {
        navigate(`/product/${id}`);
    };
    return (
        <>
        <div className="contbig">
            <h1>Catálogo</h1>
        <section className="prodcards">
        {
            products.map(product => (
                <article key={product.id}>
                    <h4>{product.title}</h4>
                    <img src={product.image} alt={product.title} />
                    <p>Price $ {product.price}</p>
                    <button onClick={()=>handleClick(product.id)}>Ver detalles</button>
                </article>
            ))
        }
        </section>
        </div>
        
        
        
        </>
    )
}