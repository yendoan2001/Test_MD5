import {useRouter} from "next/router";
import axios from "axios";
import {useEffect, useState} from "react";
import Link from "next/link";

export default function DetailProduct() {
    const route = useRouter();
    const [product, setProduct] = useState({})
    let id = route.query.id;
    useEffect(() => {
        axios.get(`http://localhost:3001/products/${id}`).then(res => setProduct(res.data))
    }, []);
    return (<div>
            <h1>Detail Product</h1>
            <p>Name Product: {product.name}</p>
            <p>Price: {product.price}</p>
            <p>Stock: {product.stock}</p>
            <p>Description: {product.description} </p>
            <Link passHef href="/products">
                <button className="btn btn-primary">Cancel</button>
            </Link>
        </div>)
}