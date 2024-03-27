import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../asyncMock";
import './ItemDetailCont.css'
export default function ItemDetailContainer() {

    const {prodId} = useParams();
    const [product, setProduct] = useState({})

    useEffect (() => {
        setProduct(getProduct(prodId))
    }, [prodId])
    
    return (
        <>
        <div className="carddet">
        <h1>single product {prodId}</h1>
        <h3>Nombre: {product.title}</h3>
        <img src={product.image} alt={product.title} />
        <p>{product.description}</p>
        <p>{product.category}</p>
        <p>precio ${product.price}</p>
        </div>
        
        </>
    )
}