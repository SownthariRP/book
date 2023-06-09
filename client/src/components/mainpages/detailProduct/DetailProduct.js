import React, {useContext, useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import { GlobalState } from "../../../GlobalState";
import ProductItem from "../utils/productitem/ProductItem";

const DetailProduct = ({pro,deleteProduct}) =>{
    const params = useParams()
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    const [detailProduct, setDetailProduct] = useState([])

    useEffect(() =>{
        if(params.id){
            products.forEach(product => {
                if(product._id === params.id) setDetailProduct(product)
            });
        }
    },[params.id, products])

    if(detailProduct.length === 0) return null;
    console.log(detailProduct)
    return(
        <>
           <div className="detail">
                <img src={detailProduct.images.url} alt="" />
                <div className="box-detail">
                    <div className="row">
                        <h2>{detailProduct.title}</h2>
                        <h6>#id: {detailProduct.product_id}</h6>
                    </div>
                    <span>Rs {detailProduct.price}</span>
                    <p>{detailProduct.description}</p>
                    <h6>{detailProduct.content}</h6>
                    <p>Sold: {detailProduct.sold}</p>
                    <Link to="/address" className="cart">Buy now</Link> 
                </div>
            </div>

            <div>
                <h2>Related Books</h2>
                <div className="products">
                    {
                        products.map(product =>{
                            return product.category === detailProduct.category
                                ? <ProductItem key={product._id} product={product}/> : null
                        })
                    }
                </div>
                
            </div>
        </>
    )
}

export default DetailProduct;