import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { Link } from 'react-router-dom';
const Navbar=()=>{
    return(
        <div className="navbar">
            
            <div>
            <Link to={"/"} style={{textDecoration:"none"}}><div className='header'>ICHIBA<WbSunnyTwoToneIcon fontSize="large" style={{marginBottom:"1.5vh"}}/></div></Link>
            </div>
            <Link to={'/cart'}><ShoppingCartTwoToneIcon fontSize='large' style={{color:"#f1faee",marginLeft:"35vw"}}/></Link>
        </div>
    )
}

export default Navbar;