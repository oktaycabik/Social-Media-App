import React from "react";
import Menu from "../compenents/Menu";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/authContext";
import Avatar from "../compenents/Avatar";
import { Button, Modal } from "react-bootstrap";
import { usePost } from "../contexts/postContext";
import {
  AiOutlineLike,
  AiOutlineComment,
  AiOutlineShareAlt,
  
} from "react-icons/ai";
import { Link ,useRouteMatch} from "react-router-dom";
function Profile() {
  const [show, setShow] = useState(false);
  const { setPosts, posts, addNewPost } = usePost();
  const [content, setContent] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { GetProfile, profile } = useAuth();
  useEffect(() => {
    GetProfile();
  }, []);
  const handleNewPost = async (e) => {
    addNewPost(content, imgUrl);
    handleClose()
    e.preventDefault();
  };
  
  return (
    <div className="mt-4">
      <div className="row">
        <div className="col-3 p-2 ">
          <Avatar />
        </div>
        <div className="col-6 p-2 ">
          <div
            className=" add-post p-3 border-color "
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
          </div>
           {profile?.posts?.map((post,key) => (
        <div key={key} > 
        <div
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
                    {profile.firstName} {profile.lastName}{" "}
                  </b>
                </span>
                <span className="tx-12">@{profile.userName}</span>
              </div>
            </div>
          </div>
          <div className=" ">
            <div className="content-text tx-14 ms-2 mb-2 card-text">
              {post.descripton}
            </div>
            <img className="card-img me-3 " src={post.imageUrl} alt="" />
          </div>

          <div className="icon ms-5 me-5 d-flex justify-content-between  mt-2 tx-14">
            <span>
              <AiOutlineLike className="mb-1 " size={18} /> Beğen{" "}
            </span>
           <Link to={`/post/${post.id}/${post.userName}`} >
            <span    >
              <AiOutlineComment className="mb-1" size={18} />  Yorum
              
            </span>
            </Link>
            <span>
              <AiOutlineShareAlt className="mb-1" size={18} /> Paylaş{" "}
            </span>
            
          </div>
         
        </div>
     
        </div>
      ))} 
        </div>
        <div className="col-3 p-2 pe-5">
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default Profile;
