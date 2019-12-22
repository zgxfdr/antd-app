import React, { Component } from 'react';
import { Input,Button  } from 'antd';
const { TextArea } = Input;
class CommentInput extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="comment-input-container">
                <div><Input placeholder="username" /></div>
                <div>
                <TextArea rows={4} />
                </div>
               <div>
               <Button type="primary" >Primary</Button>
               </div>

            </div>
        );
    }
}

export default CommentInput;