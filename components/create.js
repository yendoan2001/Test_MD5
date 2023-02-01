import {useState} from "react";
import axios from "axios";
import Link from "next/link";
import Form from 'react-bootstrap/Form';

export default function Create() {
    const [product, setProduct] = useState({});
    const handleChange = (e) => {
        setProduct({
            ...product, [e.target.name]: e.target.value
        })
    }
    const handleSubmit = () => {
        axios.post('http://localhost:3001/products', product)
    }
    return (
        <div>
            <div style={{marginTop:'20px'}}><h3>Create product</h3></div>
            <hr/>
            <Form style={{margin:'50px'}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>

                    <Form.Control onChange={handleChange} type="text" name="name" placeholder="Enter product name"/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Price</Form.Label>
                    <Form.Control onChange={handleChange} type="text" name="price" placeholder="Enter product price"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Stock</Form.Label>
                    <Form.Control onChange={handleChange} type="text" name="stock" placeholder="Enter stock"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={handleChange} name="description" type="text"
                                  placeholder="Enter product description"/>
                </Form.Group>
                <Link href="/products">
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </Link>
                <Link href="/products">
                    <button style={{marginLeft: '20px'}} className="btn btn-secondary">Cancel</button>
                </Link>
            </Form>
        </div>)
}