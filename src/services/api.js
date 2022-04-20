import axios from "axios"
const tokens1 = localStorage.getItem("access_token");
export const getAllPost =async()=>{
    const res =await axios("https://localhost:44383/api/users/get?myId=3")
    return res.data
}

export const userLogin =async(input)=>{
    const res =await axios.post("https://localhost:44383/api/users/login",input)
    return res.data
}

export const newPost =async(input)=>{
    const res =await axios.post(`https://localhost:44383/api/posts/add?userId=${tokens1}`,input)
    
    return res.data
}
export const GetAllUsers =async()=>{
    const res =await axios(`https://localhost:44383/api/users?userId=${tokens1}`)
    return res.data
}
export const GetUser =async()=>{
    const res =await axios(`https://localhost:44383/api/users/profile?userId=${tokens1}`)
    return res.data
}
export const fallowHe =async(input)=>{
    const res =await axios.post(`https://localhost:44383/api/users/fallow`,input)
    
    return res.data
}
export const GetFollowing =async()=>{
    const res =await axios(`https://localhost:44383/api/users/getfollowing?userId=${tokens1}`)
    return res.data
}
export const GetPost =async(id)=>{
    const res =await axios(`https://localhost:44383/api/posts/getpost?postId=${id}`)
    return res.data
}
export const addComment =async(id,input)=>{
    const res =await axios.post(`https://localhost:44383/api/comments/add?postId=${id}`,input)
    
    return res.data
}
export const DeleteFollowing =async(followid)=>{
    const res =await axios.delete(`https://localhost:44383/api/users/deletefollowing?followId=${followid}`)
    
    return res.data
}
export const addLikes =async(id,input)=>{
    const res =await axios.post(`https://localhost:44383/api/likes/add?postId=${id}`,input)
    
    return res.data
}
export const DeleteLike =async(likeId)=>{
    const res =await axios.delete(`https://localhost:44383/api/likes/delete?likeId=${likeId}`)
    
    return res.data
}