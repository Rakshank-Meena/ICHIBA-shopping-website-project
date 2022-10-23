import ReplayIcon from '@mui/icons-material/Replay';
import { Link } from 'react-router-dom';
const SidePanel=()=>{
return(
    <>
    <div className="side-panel">
        <header style={{fontSize:"x-large",margin:"2vh auto",fontFamily: "'Noto Serif JP', serif",backgroundColor:"rgba(45, 63, 76)",width:"100%",paddingLeft:"6.3vh",color: '#f1faee'}}>Categories</header>
        <div  style={{marginTop:"2vh",textDecoration:"none",cursor:"pointer",fontSize:"larger",color: '#1d3557',fontWeight:"normal"}}>
            <ul><Link to={`/electronics`} style={{textDecoration:"none",color:'#1d3557'}} >Electronics</Link></ul>
            <ul><Link to={`/men's%20clothing`} style={{textDecoration:"none",color:'#1d3557'}} >Men's clothing</Link></ul>
            <ul><Link to={`/women's%20clothing`} style={{textDecoration:"none",color:'#1d3557'}} >Women's Clothing</Link></ul>
            <ul><Link to={`/jewelery`} style={{textDecoration:"none",color:'#1d3557'}} >Jewelery</Link></ul> 
        </div>
        <button style={{marginTop:"auto",marginBottom:"3vh",border:"none",backgroundColor:"#a8dadc",fontSize:"medium"}}>
        <Link to={`/`} style={{textDecoration:"none",color:'#1d3557'}} ><ReplayIcon/>Back to home</Link></button>
    </div>
    </>
)
}
export default SidePanel;