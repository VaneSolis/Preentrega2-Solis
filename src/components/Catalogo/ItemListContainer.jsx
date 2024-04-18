import { useNavigate, useParams } from "react-router-dom";
import './ItemListCont.css'
import { useEffect, useState } from "react";
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from '../../Firebase/Config';
export default function ProductsComponent() {
    const navigate = useNavigate();

    const[products, setProducts] = useState([]);

    const category = useParams().category;

    useEffect(()=> {

        const productsRef =collection(db, "productos");

        const q = category ? query(productsRef, where("category", "==", category )) : productsRef;

        getDocs(q)
        .then((resp) => {

            setProducts(

                resp.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id}
                })
            )
        })
        
    },[category]);

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