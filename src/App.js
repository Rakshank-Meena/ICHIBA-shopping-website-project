import {   useState } from 'react';
import Cart from './components/Cart';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Categories from './components/Categories';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';


function App() {
  const [item,setItem]=useState([])

  const ADD_ITEM=(prod)=>{
    const alreadyInCart = item.findIndex((arr)=>{return arr.id === prod.id}) 
    const alreadyInCartAlert=()=>{toast(`${prod.name} already in cart`,{type:"error"})}
    
    if(alreadyInCart !== -1){alreadyInCartAlert()}
    else {return (
      (setItem([...item,prod]))
      )}
      
    }

  const REMOVE_ITEM=(prod)=>{
    setItem(item.filter((item)=>{return item.id!==prod.id}))
    
  }
  const CLEAR_CART=()=>{
    return setItem([])
  }
  const BUY_ITEM=()=>{
    const purchaseCompletAlert=()=>{return toast("Congrats!!!purchase complete",{type:"success"})}
    return (
      setItem([]),purchaseCompletAlert()
    )
  }

  
    
    return (<>
    
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<LandingPage/>}/>
      <Route exact path='/cart' element={<><Cart REMOVE_ITEM={REMOVE_ITEM} BUY_ITEM={BUY_ITEM} CLEAR_CART={CLEAR_CART} item={item}/></>}/>
      <Route path='/:cat' element={<><Categories ADD_ITEM={ADD_ITEM}/></>}/>
    </Routes>
    
    </BrowserRouter>
  </>)
  
    
}

export default App;
