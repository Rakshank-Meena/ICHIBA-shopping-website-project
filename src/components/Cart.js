import Navbar from "./Navbar";
import SidePanel from "./SidePanel";
import RemoveShoppingCartTwoToneIcon from '@mui/icons-material/RemoveShoppingCartTwoTone';
import { Button } from "@mui/material";
import { ToastContainer } from "react-toastify";




const Cart=({CLEAR_CART,BUY_ITEM,REMOVE_ITEM,item})=>{

  let totalAmount=0
  item.forEach(items => {
    totalAmount=parseFloat(totalAmount)+parseFloat(items.price)
  });
   let total=totalAmount-(totalAmount*0.1)
   let taxed=total+(total*0.15)
return (
    <>
    <Navbar/>
    <SidePanel/>
    
      <div className="cart">
        <div>Your cart<span style={{float:'right',fontSize:'medium',marginRight:'3vh',cursor:'pointer',color:'#e63946'}} onClick={()=>{return CLEAR_CART()}}>Clear Cart</span></div>
        <div className="subsection">
          <div className="cartlist">
        {item.map(items=>{return(
        <div key={items.id}>
          <div className="cartitems">
              <img style={{height:"15vh",width:"15vh",marginRight:'2vh',marginLeft:'2vh'}}src={items.img} alt="still loading"/>
              <div style={{color:'black',fontFamily:"'Noto Serif JP', 'serif'"}}>{items.name}<br/><br/><div style={{color:'rgb(10, 75, 43)',fontSize:'larger'}}>Price:-${items.price}</div><RemoveShoppingCartTwoToneIcon fontSize="medium" style={{cursor:'pointer',color:"#e63946",marginLeft:'37vw',marginBottom:'2vh'}}onClick={()=>{return REMOVE_ITEM(items)}}/></div>
          </div>
        </div>)})}</div>
            <div className="total">
              {item.length<1? <>your cart is empty</>:
              <div style={{display:'flex',flexDirection:'row',marginLeft:"1vh",fontSize:'medium',marginTop:'2vh'}}>
                <div>
                Item Total :<br/><br/>
                coupon discount:<br/><br/><hr/>
                TOTAL:<br/><br/>
                taxes and other charges :<br/><br/><hr/>
                GRANDTOTAL:<br/><br/>
                </div>
                <div style={{color:'black'}}>
                  ${parseFloat(totalAmount).toFixed(2)}<br/><br/>
                  10%<br/><br/><hr/>
                  $ {total}<br/><br/>
                  15%<br/><br/><hr/>
                  ${parseFloat(taxed).toFixed(2)}<br/><br/>
                <Button variant="contained" style={{fontSize:'x-small'}} onClick={()=>{return BUY_ITEM()}}>checkout</Button>
                </div>
              </div>}
              
            </div>
        </div>
        
      </div>
    <ToastContainer/>
    </>
)
}
export default Cart;