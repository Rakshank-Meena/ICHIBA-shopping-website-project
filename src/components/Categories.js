import Axios  from "axios";
import { useEffect,useState } from "react";
import React from 'react';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import SidePanel from "./SidePanel";
import { ToastContainer } from "react-toastify";

const Categories=({ADD_ITEM})=>{
    const [products,setProducts]=useState([])
    const cat =useParams();
    
    useEffect(()=>{const fetchProducts=async ()=>{
        let dataFetch=false
        const {data}=await Axios.get(`https://fakestoreapi.com/products/category/${cat.cat}`)
        if(dataFetch===false){ 
            const product= data.map((items)=>({id:items.id,img:items.image,name:items.title,price:items.price,desc:items.description}))
            setProducts(product)
            }
       return dataFetch=true
        
    };fetchProducts()},[cat])



    return (
    <>
    <Navbar/>
    <div style={{display:"flex",flexFlow:"row"}}>
        <SidePanel/>
        <div className="body">
            <div className="categ-container">
                {products.map(items=>{
                    return (
                        <div key={items.id} className="card text-center mt-5 mx-2" style={{width:"14.5vw",height:'18rem',alignItems:"center",justifyItems:"center",display:"flex",backgroundColor:"#a8dadc"}}>
                        <img src={items.img} className="card-img-top pt-2" style={{width:"20vh",height:"20vh"}} alt="..."/>
                        <div className="card-body">
                            <div className="card-title" style={{display:"flex",flexWrap:"wrap",height:"10vh",overflowX:"hidden",overflowY:"hidden"}}>{items.name}</div>
                            
                            <div className="tag">${items.price}<button className="btn" onClick={()=>{return (ADD_ITEM(items))}} ><AddShoppingCartSharpIcon fontSize="small"/></button></div>
                        </div>
                        </div>
                    )
                    })}
                
            </div>
        </div>
    </div>
    <ToastContainer/>
    </>
        
    

 
 
)
}
export default Categories;