import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CommentInput from '../components/CommentInput'
import { addComment } from '../reducers/comments'

// CommentInputContainer
// 负责用户名的加载、保存，评论的发布
class CommentInputContainer extends Component {
  static propTypes = {
    comments: PropTypes.array,
    onSubmit: PropTypes.func
  }

  constructor () {
    super()
    this.state = { username: '' }
  }

  componentWillMount () {
    // componentWillMount 生命周期中初始化用户名
    this._loadUsername()
  }

  _loadUsername () {
    // 从 LocalStorage 加载 username
    // 然后可以在 render 方法中传给 CommentInput
    const username = localStorage.getItem('username')
    if (username) {
      this.setState({ username })
    }
  }

  _saveUsername (username) {
    // 看看 render 方法的 onUserNameInputBlur
    // 这个方法会在用户名输入框 blur 的时候的被调用，保存用户名
    localStorage.setItem('username', username)
  }

  handleSubmitComment (comment) {
    // 评论数据的验证
    if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    // 新增评论保存到 LocalStorage 中
    const { comments } = this.props
    const newComments = [...comments, comment]
    localStorage.setItem('comments', JSON.stringify(newComments))
    // this.props.onSubmit 是 connect 传进来的
    // 会 dispatch 一个 action 去新增评论
    if (this.props.onSubmit) {
      this.props.onSubmit(comment)
    }
  }

  render () {
    return (
      <CommentInput
        username={this.state.username}
        onUserNameInputBlur={this._saveUsername.bind(this)}
        onSubmit={this.handleSubmitComment.bind(this)} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (comment) => {
      dispatch(addComment(comment))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentInputContainer)    
// import React, { Component } from 'react'
// import PropTypes from 'prop-types'

// // static 开头的类属性，如 defaultProps、propTypes。
// // 构造函数，constructor。
// // getter/setter（还不了解的同学可以暂时忽略）。
// // 组件生命周期。
// // _ 开头的私有方法。
// // 事件监听方法，handle*。
// // render*开头的方法，有时候 render() 方法里面的内容会分开到不同函数里面进行，这些函数都以 render* 开头。
// // render() 方法。



// class CommentInput extends Component {
//     static propTypes = {
//         onSubmit: PropTypes.func
//       }

//     constructor() {
//         super()
//         this.state = {
//             username: '',
//             content: ''
//         }
//     }
//     // 所有私有方法都以 _ 开头
//     _saveUsername(username) {
//         localStorage.setItem('username', username)
//     }

//     handleUsernameBlur(event) {
//         this._saveUsername(event.target.value)
//     }

//     handleUsernameChange(event) {
//         this.setState({
//             username: event.target.value
//         })
//     }

//     handleContentChange(event) {
//         this.setState({
//             content: event.target.value
//         })
//     }

//     handleSubmit() {
//         if (this.props.onSubmit) {

//             this.props.onSubmit({
//                 username: this.state.username,
//                 content: this.state.content,
//                 createdTime: +new Date()
//             })
//         }
//         this.setState({ content: '' })
//     }
//     _loadUsername() {
//         const username = localStorage.getItem('username')
//         if (username) {
//             this.setState({ username })
//         }
//     }

//     componentWillMount() {
//         this._loadUsername()
//     }
//     componentDidMount() {
//         this.textarea.focus()
//     }
//     render() {
//         return (
//             <div className='comment-input'>
//                 <div className='comment-field'>
//                     <span className='comment-field-name'>用户名：</span>
//                     <div className='comment-field-input'>
//                         <input value={this.state.username} onBlur={this.handleUsernameBlur.bind(this)}
//                             onChange={this.handleUsernameChange.bind(this)} />
//                     </div>
//                 </div>
//                 <div className='comment-field'>
//                     <span className='comment-field-name'>评论内容：</span>
//                     <div className='comment-field-input'>
//                         <textarea ref={(textarea) => this.textarea = textarea} value={this.state.content} onChange={this.handleContentChange.bind(this)} />
//                     </div>
//                 </div>
//                 <div className='comment-field-button'>
//                     <button onClick={this.handleSubmit.bind(this)}>
//                         发布
//           </button>
//                 </div>
//             </div>
//         )
//     }
// }

// export default CommentInput