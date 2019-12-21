import React, { Component } from 'react';
import './index.css'
import CommentInput from '../../component/Comment/CommentInput'
import CommentList from '../../component/Comment/CommentList'

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="comment-container">
                <CommentInput/>
                <CommentList/>
            </div>
        );
    }
}

export default Comment;