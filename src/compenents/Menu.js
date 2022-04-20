import React, { useEffect } from 'react'
import { useAuth } from '../contexts/authContext'
import { DeleteFollowing } from '../services/api'


function Menu() {
  const {GetUsers,users,follow,follows,Getfollow,removeFollowing} =useAuth()
  useEffect(() => {
    GetUsers()
    Getfollow()
  }, [])
  const checkFollowing =(id)=>{
    const findUser=follows.findIndex(x=>x.heId===id);
    if(findUser >-1){
      return "Unfollow"
    }
    else if(findUser===-1){
       return "Follow"
    }
   
  }
  const followsUser =async(userid)=>{
    
  
    const findUser=follows.findIndex(x=>x.heId===userid);
    
    if(findUser >-1){
      const a=follows.find(x=>x.heId===userid).id
     
      removeFollowing(a)
    }
    else if(findUser===-1)
    follow(userid)
   
    
    
  }
  

  return (
    
    <div> 
     
        <div className="menu px-auto border-color text-start p-3 card" style={{color:"white", backgroundColor:"#1d2226"}}>
         <div className="card-title">
           Akışınıza Ekleyin
         </div>
       {
         users.map(user=>(
          <div key={user.id} className="d-flex justify-content-start pb-2">
          <div className="profile-img">
            <img
              src="http://alz.org.tr/wp-content/uploads/2021/06/nopic.png"
              alt=""
            />
          </div>
          <div className="content ms-2">
            <div className="card-title">
              <span className="tx-14">
                {" "}
                <b>{user.firstName} {user.lastName}</b>
              </span>
              <div className="tx-12">@{user.userName}</div>
            
            </div>
           
            <button style={{height:40}} className='btn w-100  border-button primary-color ' onClick={()=>followsUser(user.id)} >{checkFollowing(user.id)}</button>

          </div>
        </div>
         ))
       }
     
      
        </div>
        
    </div>
  )
}

export default Menu