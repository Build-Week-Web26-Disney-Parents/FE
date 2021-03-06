import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { retreiveMessages, postComment } from '../actions';
import Header from './Header';

const ViewAllPosts = props => {
            
    useEffect(() => {
        props.retreiveMessages();
        
    },[]);

    const sendToComment = id => {
        props.history.push(`/comment/${id}`)
    }

    

    return (
        
        <>
        <Header />
        <h1>Available Care Requests</h1>
        {props.allPosts ? props.allPosts.map(post => {
            return(
                <>
                <div className="post__wrapper" key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.contents}</p>
                    <button 
                        onClick={() => sendToComment(post.id)}>Reply
                    </button>
                </div>
                
                </>
            )}):<p>No Requests Available</p>}

        
        
        </>
    )
};

const mapStateToProps = state => {
    return {
        allPosts: state.allPosts
    }
};

export default connect(mapStateToProps, {retreiveMessages, postComment})(ViewAllPosts);