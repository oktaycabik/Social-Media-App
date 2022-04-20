import React from "react";
import "./singin.css";
import { useState,  } from "react";
import { useAuth } from "../contexts/authContext";
import {useHistory} from "react-router-dom"




function SingIn() {
  const [name, setName] = useState("");
 
  const [password, setPassword] = useState("");
  const history = useHistory()
 const { login } = useAuth();
 
  const handleRegister =  (e) => {
      login({username:name,password:password})
      history.push("/home")
     e.preventDefault();
    
  };

  return (
    <div  className="mt-5 d-flex align-items-center justify-content-center">
     
      <main style={{backgroundColor:"#fff"}} className="form-signin col-md-4 p-3 ">
        <form onSubmit={handleRegister} type="submit">
          <h1 className="h3 mb-3 fw-normal">Giriş Yap</h1>
         
          <div className="form-floating">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              className="form-control"
              id="floatingName"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Kullanıcı Adı</label>
          </div>
        
          <div className="form-floating">
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Şifre</label>
          </div>

         
           
      
          <button className="w-100 btn btn-lg primary-color" type="submit">
           Giriş Yap
          </button>
        </form>
      </main>
    </div>
  );
}

export default SingIn;
