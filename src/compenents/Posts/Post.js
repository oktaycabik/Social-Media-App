import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link, useRouteMatch } from "react-router-dom";


import {
  AiOutlineLike,
  AiOutlineComment,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { usePost } from "../../contexts/postContext";
function Post() {
    const [addcom, setAddcom] = useState("")
const {getPost,post,addNewComment,setPost,newLikes,removeLike} = usePost()
  const { id } = useParams();
  useEffect(() => {
    getPost(id)
  }, []);
console.log('post', post)
 const submitComment=(e)=>{
  addNewComment(post.id,addcom)
  
    e.preventDefault();
 }
 const tokens1 = localStorage.getItem("access_token");
 const handleLike = (postId) => {
    
  const b=post.likes?.find(a=>a.userId===Number(tokens1))
  const likeId=post?.likes.find(a=>a.userId===Number(tokens1))?.id
  console.log('b', postId)
  if(b){
   removeLike(likeId,postId);
  }
  else{
    newLikes(postId);
  }
  
   
 };
 console.log('post', post?.likes?.length)
  const likeClass = () => {

   const b = post.likes?.find((a) => a.userId === Number(tokens1));
   if (b) {
     return "colors";
   }
   return "";
 };
  return (
    <div >
      <div
        key={post.id}
        className="p-3 mt-2 border-color card"
        style={{ backgroundColor: "#1d2226",color:"white" }}
      >
        <div className="d-flex  pb-2">
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
                <b>
                  {post.firstName} {post.lastName}{" "}
                </b>
              </span>
              <span className="tx-12">@{post.userName}</span>
            </div>
          </div>
        </div>
        <div className=" ">
          <div className="content-text tx-14 ms-2 mb-2 card-text">
            {post.descripton}
          </div>
          {post.imageUrl && (
                <>
                  <img className="card-img me-3 " src={post.imageUrl} alt="" />
                </>
              )}
       
        </div>
        <div className="d-flex align-items-center">
              {
                post?.likes?.length > 0 && (
                  <img className="like-icon mt-3" src="https://static-exp1.licdn.com/sc/h/4ut9ok04wzw6pt96fc04pio7p" alt="" />
                )
              }
            
            <span className="tx-12 pt-3 ms-1">
              {post?.likes?.length > 0
                ? +post.likes.length + " kişi beğendi"
                : ""}{" "}
            </span>
            </div>
        <div className="icon ms-5 me-5 d-flex justify-content-between  mt-2 tx-14">
          <span   className={likeClass()} onClick={()=>handleLike(post.id)}>
            <AiOutlineLike  className="mb-1 " size={18} /> Beğen{" "}
          </span>
          <span>
            <AiOutlineComment className="mb-1" size={18} />{" "}
            <Link to={`/post/${post.id}`}>Yorum</Link>
          </span>
          <span>
            <AiOutlineShareAlt className="mb-1" size={18} /> Paylaş{" "}
          </span>
        </div>
        <div className="profile-img d-flex p-2 ">
            <img
              src="http://alz.org.tr/wp-content/uploads/2021/06/nopic.png"
              alt=""
            />
            <form className="d-flex w-100" onSubmit={submitComment} type="submit">
            <input
             style={{backgroundColor:"#3c4345" ,color:"white"}}
              className="form-control ms-2 comment"
              placeholder="Yorum yaz..."
              type="text"  
              value={addcom}
              onChange={(e)=>setAddcom(e.target.value)}
            />
            <button type="submit" className="btn primary-color ms-3 ">Gönder</button>
            </form>
          </div>
       {
           post.comments?.map(comment=>(
<div className="border-top p-1">
         
          <div className="">
            <div className="profile-img d-flex mt-4  pt-2">
              <img
                src="http://alz.org.tr/wp-content/uploads/2021/06/nopic.png"
                alt=""
              />
              <div style={{backgroundColor:"#3c4345"}} className="card ms-2 p-2 content w-100">
                  <div className=" tx-14"><b>{comment.firstName} {comment.lastName}</b> </div>
                  <div className=" tx-12 pt-0">@{comment.userName}</div>
                  <div  className="card-text tx-14 mt-2">{comment.body}</div>
              </div>
            </div>
             </div>
        </div>
           ))
       }
        
     
      </div>
    </div>
  );
}

export default Post;
