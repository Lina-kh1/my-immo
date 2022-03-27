import { Link  } from "react-router-dom";
import "./NavBar.css"

export default function NavBar() {
 
  
  
  return (
   
    <div class="Nav">
      <div class="Navleft">
 <i className="fa-solid fa-building-ngo"> IMMO </i>
 <i className="NavIcon fa-solid fa-brush"></i>
      <i className="NavIcon fa-solid fa-paint-roller"></i>
      
      <i className="NavIcon fa-solid fa-person-digging"></i>
      <i className="NavIcon fa-solid fa-wrench"></i>
   </div>
      <div class="NavCenter">
          <ul className="Navlist">
             
              <Link to="/" className="NavlistItem">Acceuil</Link>
              <Link to="/Fournisseur" className="NavlistItem">Fournisseur</Link>
             
              <Link to="/Agences" className="NavlistItem">Agences</Link>
              <li className="NavlistItem">Contact</li>
              <li className="NavlistItem">Categories</li>

              <Link to="/Login" className="NavlistItem">Connecter</Link>
              
          </ul>
      </div>
      <div className="NavRight">
      
     
          
   <i className="NavSearchIcon fas fa-search"></i>
      </div>
    </div>
   
  )
}
