import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import axios from "axios";
import Link from "next/link";
import Form from "react-bootstrap/Form";

export default function Update() {
    const route = useRouter()
    const [product, setProduct] = useState({});
    let id = route.query.id;
    useEffect(() => {
        axios.get(`http://localhost:3001/products/${id}`).then((response) => setProduct(response.data))
    }, [])
    const handleChange = (e) => {
        setProduct({
            ...product, [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (id) => {
        axios.put(`http://localhost:3001/products/${id}`, product)
    }
    return (<div>
            <div style={{margin:'30px'}}><h1>Create product</h1></div>
            <hr/>
            <Form style={{margin: '50px'}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>

                    <Form.Control onChange={handleChange} type="text" name="name" placeholder="Enter product name"
                                  defaultValue={product.name}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Price</Form.Label>
                    <Form.Control onChange={handleChange} type="text" name="price" placeholder="Enter product price"
                                  defaultValue={product.price}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Stock</Form.Label>
                    <Form.Control onChange={handleChange} type="text" name="stock" placeholder="Enter stock"
                                  defaultValue={product.stock}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={handleChange} name="description" type="text"
                                  placeholder="Enter product description" defaultValue={product.description}/>
                </Form.Group>
                <Link href="/products">
                    <button type="submit" className="btn btn-primary" onClick={() => handleSubmit(product.id)}>Submit
                    </button>
                </Link>
                <Link href="/products">
                    <button style={{marginLeft: '20px'}} className="btn btn-secondary">Cancel</button>
                </Link>
            </Form>
        </div>)
}