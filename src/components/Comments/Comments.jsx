import React, { Component } from 'react';
import CommentForm from '../CommentForm/CommentForm';

function Comments(props){
    return(
        <div>
            <CommentForm post={props.post} videoId ={props.videoId}/>
        </div>
    )
}