
import "./fournisseur.css";
import Table from 'react-bootstrap/Table';

export default function Fournisseur() {
  return (
    <div className="fournisseur">
      <div className="hh">
      <h4>Liste des fournisseurs</h4>
      <Table className="table" striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Fournisseur</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
  
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
  
    </tr>
    <tr>
      <td>3</td>
      <td>Jacob</td>
    
    </tr>
  </tbody>
</Table>
</div>
      </div>
    
  );
}
