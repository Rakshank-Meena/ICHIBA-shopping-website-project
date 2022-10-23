import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


const LandingPage=({ADD_ITEM})=>{
    return(<>
    <Navbar/>
    <div className="mainpage">
        <div className="landingpage"></div>
        <div className="ichiba">ICHIBA</div>
        <div className="category">
            <div className="electronics"><div style={{backgroundColor:"#a8dadc" ,width:"18vw",display:"flex",justifyContent:"flex-end",alignItems:"center",fontSize:"x-large",paddingRight:"1vw",textTransform:"uppercase",fontFamily:"'merriweather',serif",boxShadow:"-4vh 0vh 5vh #5f7071"}}>
                <Link to={`/electronics`} style={{textDecoration:"none",color:"#1d3557"}} ><ArrowForwardIosIcon/>electronics</Link> 
                </div></div>
            <div className="men"><div style={{backgroundColor:"#a8dadc" ,width:"10vw",display:"flex",justifyContent:"flex-start",alignItems:"center",fontSize:"x-large",paddingLeft:"1vw",textTransform:"uppercase",fontFamily:"'merriweather',serif",boxShadow:"4vh 0vh 5vh #5f7071"}}>
                <Link to={`/men's%20clothing`} style={{textDecoration:"none",color:"#1d3557"}}>men<ArrowBackIosNewIcon/></Link>
                </div></div>
            <div className="women"><div style={{backgroundColor:"#a8dadc" ,width:"12vw",display:"flex",justifyContent:"flex-end",alignItems:"center",fontSize:"x-large",paddingRight:"1vw",textTransform:"uppercase",fontFamily:"'merriweather',serif",boxShadow:"-4vh 0vh 5vh #5f7071"}}>
                <Link to={`/women's%20clothing`} style={{textDecoration:"none",color:"#1d3557"}}><ArrowForwardIosIcon/>women</Link>
                </div></div>
            <div className="jewelery"><div style={{backgroundColor:"#a8dadc" ,width:"16vw",display:"flex",justifyContent:"flex-start",alignItems:"center",fontSize:"x-large",paddingLeft:"1vw",textTransform:"uppercase",fontFamily:"'merriweather',serif",boxShadow:"4vh 0vh 5vh #5f7071"}}>
                <Link to={'/jewelery'} style={{textDecoration:"none",color:"#1d3557"}}>jewellery<ArrowBackIosNewIcon/></Link>
                </div></div>
        </div>
    </div>
    </>)
};
export default LandingPage;