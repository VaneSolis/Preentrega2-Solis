import { useParams } from "react-router-dom";
import { getProducts } from "../../asyncMock";
import { useEffect, useState } from "react";
export default function CategoryComponent () {

    const [products, setProducts] = useState([])

    const {catName} = useParams ();

    useEffect(()=>{
        getProducts.then(data => setProducts(data))
    }, []);
    
    return (
        <>
        <div>Category Component {catName}
        
        </div>
        </>
    )
}