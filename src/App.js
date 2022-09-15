import pizza from './pizza.jpg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, {useState} from 'react'
function App() {

  const[user,setUser] = useState('')
  const[pass,setPass] = useState('')

  const handleValidate=(e)=>{
     e.preventDefault()
    if(user== 'reactjs12@gmail.com' && pass==123456)
    alert("Successful Login")
    else
    alert("Wrong credental")
  }
  return (
    <div className="App-header">
      <h1>Authentication Portal</h1>
      <div className="row"/>
      <div className="col-md-6 ">
        <img className="float-centre" src={pizza} width="670" height="300"/>
      </div>
      <div className="col-md-6 my-auto bg-dark p-5 rounded">
      <form onSubmit={handleValidate}>
  <div className="form-group">
    <label className="form-label">Email address</label>
    <input type="email" value={user} className="form-control" placeholder="Enter Email Address" onChange={(e)=>setUser(e.target.value)}/>
   </div> 
  <div className="form-group">
    <label className="form-label">Password</label>
    <input type="password" value={pass} className="form-control" placeholder="Enter your password" onChange={(e) => setPass(e.target.value)}/>
  </div>
  <br></br>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
      </div>
    </div>
  );
}

export default App;
