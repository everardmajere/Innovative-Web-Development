import './app.css'
import { useState } from 'react';
import ListData from './Components/ListData.jsx';


function App() {
  const[search, setSearch] = useState('');

  return (
<>
<main data-bs-theme="dark" className="bg-dark text-white min-vh-100">
 <div className="container mt-3">
  <h4> Search for a pet by type (e.g., Dog, Cat): </h4>
  <input type="text" 
  value={search} 
  onChange={(e)=>setSearch(e.target.value)} 
  className="form-control mb-3" 
  placeholder = "Enter animal type..."/>
 </div>

 <div className="container sm-3">
  <table className="table table-striped">
    <thead>
      <tr>
      <th>Image</th>
      <th className="text-start">Name</th>
      <th className="text-start">Animal</th>
      <th className="text-start">Specialty</th>
      </tr>
    </thead>
    <tbody>
      <ListData value={search}/>
    </tbody>
  </table>
 </div>
</main>
</>
 );
}

export default App;