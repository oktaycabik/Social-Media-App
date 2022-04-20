import React from "react";
import "./singin.css";
import { useState,  } from "react";




function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
 
  const handleRegister = async (e) => {
  
    e.preventDefault();
    
  };
  return (
    <div  className="mt-5 d-flex align-items-center justify-content-center">
     
      <main style={{backgroundColor:"#fff"}} className="form-signin col-md-4 p-3 ">
        <form onSubmit={handleRegister} type="submit">
          <h1 className="h3 mb-3 fw-normal">Kayıt Ol</h1>
          <div className="form-floating">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              className="form-control"
              id="floatingName"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Ad</label>
          </div>
          <div className="form-floating">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              className="form-control"
              id="floatingName"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Soyad</label>
          </div>
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
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">E-Posta</label>
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

          <div className="checkbox mb-3">
           
          </div>
          <button className="w-100 btn btn-lg primary-color" type="submit">
            Kayıt ol
          </button>
        </form>
      </main>
    </div>
  );
}

export default Register;
