import React from 'react'
import {Container,Nav,Navbar} from "react-bootstrap"
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../contexts/authContext';
import {GoHome} from "react-icons/go"
import {FiUser} from "react-icons/fi"
import {useHistory} from "react-router-dom"
function Navbars() {
  const { loggedin,logout} = useAuth();
  let history=useHistory()
  const logoutHandle =()=>{
    logout()
    history.push("/singin")
  }
  return (
    
    <nav>
       <Navbar collapseOnSelect expand="lg"  style={{backgroundColor:"#1d2226"}} className="fixed-top" variant="dark">
  <Container>
 <Link to="/"> <Navbar.Brand >Social Media</Navbar.Brand></Link> 
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
   
    
    {
      !loggedin && (
        <>
         <Nav.Link> <Link to="singin">Giriş Yap</Link>  </Nav.Link>
   <Nav.Link> <Link to="register">Kayıt Ol</Link>  </Nav.Link></>
      )
    }
    {
      loggedin && (
        <>
         <Nav.Link  > <Link to="/home" >  <GoHome size={19} className="mb-1" />  Ana Sayfa  </Link> </Nav.Link> 
           <Nav.Link > <Link to="/profile" ><FiUser size={19} className="mb-1"/> Profilim </Link>  </Nav.Link> 

<button onClick={()=>logoutHandle()} className='btn btn-sm primary-color'>Çıkış Yap</button>
        </>
      )
    }
 
    </Nav>
  
  </Navbar.Collapse>
  </Container>
</Navbar>
    </nav>
  )
}

export default Navbars