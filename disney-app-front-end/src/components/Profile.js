import React, {useState}from "react";
import {Link} from "react-router-dom";

import PostForm from "./PostForm";



export default function Profile({user}){
    const [posts,setPosts] = useState(user.posts);

    const [showPostForm,setShowPostForm] = useState(false)
    return(
        <div className="profile__info">
            <h1>Hello {user.name}</h1>
            <Link to="/settings"><button className="settings__button">Settings</button></Link>
            <button onClick={()=> setShowPostForm(true)}>Add New Post</button>
            {showPostForm?<PostForm userData={user} setShowPostForm={setShowPostForm} setPosts={setPosts}/>:null}                    
                
            {posts?posts.map(post =>{
                return(
                    <div className="post__wrapper">
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </div>
                )
            }):<p>No current requests</p>}
        </div>

    )

}