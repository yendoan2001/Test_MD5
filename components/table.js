import {useEffect, useState} from "react";
import axios from 'axios';
import Link from "next/link";

export default function TableProduct() {
    const [products, setProducts] = useState([]);
    const [status, setStatus] = useState('');
    useEffect(() => {
        axios.get('http://localhost:3001/products').then(res => {
            setProducts(res.data);
        });
    }, [status])
    const handleDelete = (id) => {
        let returnConfirm = confirm('Are you sure you want to delete this item?');
        if (returnConfirm) {
            axios.delete(`http://localhost:3001/products/${id}`).then(response => {
                setStatus(response.data)
            });
        }
    }
    return (<div>
        <h1>Products List</h1>
        <Link href="/products/addProduct">
            <button className="btn btn-primary">Create Products</button>
        </Link>
        <table className="table table-striped">
            <thead>
            <tr>
                <th className='text-center' scope="col">Name</th>
                <th className='text-center' scope="col">Price</th>
                <th className='text-center' scope="col">Stock</th>
                <th className='text-center' scope="col">Description</th>
                <th className='text-center' scope="col">Functions</th>

            </tr>
            </thead>
            <tbody>
            {products.map((product, index) => (<tr key={product.id} className="lol">
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.stock}</td>
                    <td>{product.description}</td>
                    <td>
                        <button style={{marginRight: '10px'}} className="btn btn-danger"
                                onClick={() => handleDelete(product.id)}>Delete
                        </button>
                        <Link href={`/products/${product.id}`}>
                            <span className="btn btn-success">Update</span>
                        </Link>
                        <Link href={`/products/details/${product.id}`}>
                            <span style={{marginLeft: '10px'}} className="btn btn-primary">Detail</span>
                        </Link>
                    </td>
                </tr>))}
            </tbody>
        </table>
    </div>)
}