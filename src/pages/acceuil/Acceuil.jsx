import { useLocation } from "react-router";
import Header from "../../Components/header/Header";
import Sidebar from "../../Components/sidebar/Sidebar";
import "./acceuil.css";

export default function Acceuil() {

  return (
    <>
      
      
   <Header/>
    <div className="acceuil">
   <Sidebar/>
   </div>
    </>
  );
}
