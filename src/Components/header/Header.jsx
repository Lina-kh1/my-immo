import "./header.css";
import bg from "../../assets/bg.png"
export default function Header() {
  return (
      
     
      <div className="header">
      <div className="headerTitles">
        <span className="headerTilleLg">Produit</span>
    
      </div>
      <img className="headerImg"
       src={bg} alt=""/>
    
  
    </div>
  
  );
}
