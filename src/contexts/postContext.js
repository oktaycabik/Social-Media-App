import { useState, createContext, useContext, useEffect } from "react";
import {
  newPost,
  addComment,
  GetPost,
  getAllPost,
  addLikes,
  DeleteLike,
} from "../services/api";
const tokens1 = localStorage.getItem("access_token");

const postContext = createContext();
const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const getAll = async () => {
    const a = await getAllPost();
    setPosts(a);
  };
  const removeLike = async (id, postId) => {
    await DeleteLike(id);
     const index = posts.findIndex((a) => a.id === postId);
     const index2 = posts[index]?.likes?.findIndex((a) => a.id === id);
     const index3 = post.likes.findIndex((a) => a.id === id);
    const list =[...posts]
        list[index]?.likes?.splice(index2,1)
       setPosts(list)
    
        const list2={...post}
      
       list2.likes.splice(index3,1)
       setPost(list2)
       console.log('list2', list2)
  };

  const newLikes = async (id) => {
    const b = await addLikes(id, { userId: tokens1 });
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, likes: [...post.likes, b] } : { ...post }
      )
    );
    setPost({...post, likes: [...post.likes, b] } )
    console.log("posts", posts);
  };
  const addNewPost = async (data, img) => {
    const newpost = await newPost({ descripton: data, imageUrl: img });
    setPosts([...posts, newpost]);
    console.log("newpost", newpost);
  };

  const addNewComment = async (id, body) => {
    const a = await addComment(id, { body: body, userId: tokens1 });
    console.log("post.comments", a);
    setPost(a);
  };

  const getPost = async (id) => {
    const singlePost = await GetPost(id);
    setPost(singlePost);
  };

  const values = {
    posts,
    setPosts,
    addNewPost,
    getPost,
    post,
    addNewComment,
    setPost,
    getAll,
    newLikes,
    removeLike,
  };
  return <postContext.Provider value={values}>{children}</postContext.Provider>;
};

const usePost = () => useContext(postContext);

export { PostProvider, usePost };
