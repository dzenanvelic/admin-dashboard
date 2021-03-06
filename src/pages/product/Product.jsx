import React from 'react'
import { Link } from 'react-router-dom'
import Charts from '../../components/charts/Charts'
import {productData} from '../../dummyData'
import {Publish} from '@material-ui/icons'
import './product.css'
function Product() {
    return (
        <div className="product">
          <div className="productTitleContainer">
              <h1 className="productTitle">Product</h1>
              <Link to="/newproduct">
              <button className="productAddButton">Create</button>
              </Link>

          </div>
          <div className="productTop">
              <div className="productTopLeft">
                  <Charts data={productData} dataKey="Sales" title="Sales Performance"/> 
              </div>
              <div className="productTopRight">
                  <div className="productInfoTop">
<img className="productInfoImg" src="https://cdn.pixabay.com/photo/2017/03/31/18/02/strawberry-dessert-2191973_960_720.jpg" alt="" />
<span className="productName">Strawberry cake</span>
                  </div>
                  <div className="productInfoBottom">
<div className="productInfoItem">
    <span className="productInfoKey">id:</span>
    <span className="productInfoValue">123</span>
</div>
<div className="productInfoItem">
    <span className="productInfoKey">sales:</span>
    <span className="productInfoValue">$123</span>
</div>
<div className="productInfoItem">
    <span className="productInfoKey">active:</span>
    <span className="productInfoValue">yes</span>
</div>
<div className="productInfoItem">
    <span className="productInfoKey">in stock:</span>
    <span className="productInfoValue">no</span>
</div>
                  </div>
              </div>
          </div>
          <div className="productBottom">
              <form className="productForm">
                  <div className="productFormLeft">
                      <label >Product Name</label>
                      <input type="text" placeholder="strawberry cake" />
                      <label >In stock</label>
                      <select name="instock" id="idstock">
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                      </select>
                      <label >Active</label>
                      <select name="active" id="active">
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                      </select>
                  </div>
                  <div className="productFormRight">
                      <div className="productUpload">
                          <img className="productFormImg" src="https://cdn.pixabay.com/photo/2017/03/31/18/02/strawberry-dessert-2191973_960_720.jpg" alt="" />
                          <label for="file">
                              <Publish/>
                          </label>
                          <input type="file"id="file" style={{display:"none"}}/>
                      </div>
                      <button className="productButton">Update</button>
                  </div>
              </form>
          </div>
        </div>
    )
}

export default Product
