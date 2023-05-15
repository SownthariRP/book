import React from "react";
import BtnRender from "./BtnRender";

const ProductItem = ({product, isAdmin, deleteProduct, handleCheck}) => {

    return (
        <div className="product_card">
            {
                isAdmin && <input type="checkbox" checked={product.checked}
                onChange={() => handleCheck(product._id)} />
            }
            <img src={product.images.url} alt="" /> 
            
            <div class="product_box"> 
                <div className="row">
                    <h2 title={product.title}>{product.title}</h2>
                </div>    
                <span>Rs {product.price}</span>
            </div>


            <BtnRender product={product} deleteProduct={deleteProduct} />
        </div>
    )
}
export default ProductItem;