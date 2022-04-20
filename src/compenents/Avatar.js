import React, { useEffect } from 'react'
import { useAuth } from '../contexts/authContext'

function Avatar() {
  const {GetProfile,profile}=useAuth()
  useEffect(() => {
    GetProfile( )
    
  }, [])
  

  return (
    <>
     <div className="avatar border-color card pt-2 "style={{backgroundColor:"#1d2226",color:"white"}}>
          <div className="border-bottom p-2 ">
          <div className="avatar-img d-flex justify-content-center">
              <img src="http://alz.org.tr/wp-content/uploads/2021/06/nopic.png" alt="" />
          </div>
             <div className="card-title d-flex justify-content-center mt-3">
                 {profile?.firstName}  {profile?.lastName} 
             </div>
          </div>
          <div className="card-text p-2 text-center">
          @{profile?.userName} 
          </div>
     </div>
    </>
  )
}

export default Avatar