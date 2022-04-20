import React, { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import {
  AiOutlineLike,
  AiOutlineComment,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { usePost } from "../../contexts/postContext";
import { getAllPost } from "../../services/api";
import { Button, Modal, Card, Accordion, CustomToggle } from "react-bootstrap";

function Posts() {
  const [show, setShow] = useState(false);

  const [content, setContent] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { setPosts, posts, addNewPost, getAll, newLikes,removeLike } = usePost();
  
  useEffect(() => {
    getAll();
  }, []);
  const handleLike = (postId) => {
    
   const a= posts.find(a=>a.id===postId)
  const likeId= a.likes.find(a=>a.userId===Number(tokens1))?.id
   const b= a.likes.find(a=>a.userId===Number(tokens1))
   if(b){
    removeLike(likeId,postId);
   }
   else{
     newLikes(postId);
   }
   
    
  };
  const handleNewPost = async (e) => {
    addNewPost(content, imgUrl);
    handleClose();
    e.preventDefault();
  };
  const tokens1 = localStorage.getItem("access_token");
  const likeClass = (id) => {
    const a = posts.find((a) => a.id === id);
    const b = a.likes.find((a) => a.userId === Number(tokens1));
    if (b) {
      return "colors";
    }
    return "";
  };
  console.log("posts", posts);
  return (
    <div>
      <div
        className=" add-post p-3 border-color w-100 "
        style={{ backgroundColor: "#1d2226", color: "white" }}
      >
        <div className="profile-img d-flex">
          <img
            src="http://alz.org.tr/wp-content/uploads/2021/06/nopic.png"
            alt=""
          />
          <button
            className="w-100 ms-2 ps-3 p-2 text-start"
            type="button"
            style={{ backgroundColor: "#1d2226", color: "white" }}
            onClick={handleShow}
          >
            Gönderi Paylaş
          </button>
        </div>
      </div>

      {posts.map((post, key) => (
        <div key={key}>
          <div
            className="p-3 mt-2 border-color card"
            style={{ backgroundColor: "#1d2226", color: "white" }}
          >
            <div className="d-flex  pb-2">
              <div className="profile-img">
                <img
                  src="http://alz.org.tr/wp-content/uploads/2021/06/nopic.png"
                  alt=""
                  className="w-100"
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
            
            <div className="icon ms-4 me-4 pt-2 d-flex justify-content-between  mt-2 tx-14">
              <span
                className={likeClass(post.id)}
                onClick={() => handleLike(post.id)}
              >
                <AiOutlineLike className="mb-1 " size={18} /> Beğen{" "}
              </span>
              <Link to={`/post/${post.id}/${post.userName}`}>
                <span>
                  <AiOutlineComment className="mb-1" size={18} /> Yorum
                </span>
              </Link>
              <span>
                <AiOutlineShareAlt className="mb-1" size={18} /> Paylaş{" "}
              </span>
            </div>
          </div>
        </div>
      ))}
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Gönderi Oluşturun</Modal.Title>
        </Modal.Header>
        <form type="submit" onSubmit={handleNewPost}>
          <Modal.Body>
            <div class="form-floating">
              <textarea
                onChange={(e) => setContent(e.target.value)}
                className="form-control mb-2"
                placeholder=""
                value={content}
                id="content"
              ></textarea>
              <input
                type="text"
                className="form-control"
                placeholder="İmage URL "
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
              />
              <label htmlFor="">Ne hakkında konuşmak istiyorsun?</label>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button className="primary-color" type="submit">
              Yayınla
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}

export default Posts;
