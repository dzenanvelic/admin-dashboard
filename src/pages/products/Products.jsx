import React,{useState} from 'react'
import './products.css'
import {DeleteOutline} from '@material-ui/icons'
import { DataGrid } from '@material-ui/data-grid';
import {productRows} from '../../dummyData'
import { Link } from 'react-router-dom';
function Products() {
     const [data, setData]= useState(productRows)
      const handleDelete=(id)=>{
setData(data.filter(item=>item.id !== id))
    }
     const columns = [
  { field: 'product', headerName: 'Product', width: 90 },
  { field: 'user', headerName: 'Username', width: 200,renderCell:(params)=>{return (
      <div className="productListItem" >
          <img className="productListImg" src={params.row.img} alt="" />
          {params.row.name}
      </div>
  )}},
  { field: 'stock', headerName: 'Stock', width: 200 },
  {
    field: 'status',
    headerName: 'Status',
    
    width: 120,
  },
  {
    field: 'prce',
    headerName: 'Price',
    
    width: 160,
  },
  {field: "action",
headerName:"Action",
width:150,
renderCell:(params)=>{
    return(<>
    <Link to={'/product/' + params.row.id}>
    <button className="productListEdit">
    Edit
</button>
    </Link>

<DeleteOutline className="productListDelete" onClick={()=>handleDelete(params.row.id)}/>
    </>)
}}
];
    return (
       
        <div className="products">
            <DataGrid disableSelectionOnClick rows={data} columns={columns} pageSize={8} checkboxSelection />
        </div>
    )
}

export default Products
