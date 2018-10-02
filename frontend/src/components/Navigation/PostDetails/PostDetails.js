import React, { Component } from 'react'
import { connect } from 'react-redux';
import { 
  updatePost,
  getPostById,
  votePost,
  setCurrentPost,
  deletePostById
 } from '../../../actions/PostActions';
import { 
  getPostComments, 
  updateComment, 
  selectCommentToEdit,
  onNewCommentAuthorChange,
  onNewCommentMessageChange,
  createNewComment,
  deleteCommentById,
  voteComment
 } from '../../../actions/CommentActions';
import CircularProgress from '@material-ui/core/CircularProgress';
import Post from './Post/Post';
import Comment from './Comment/Comment';
import AnswerBox from './AnswerBox/AnswerBox';

// styles
import classes from './PostDetails.css';
import Aux from '../../../hoc/Aux/Aux';


export class PostDetails extends Component {      

  async componentDidMount() {       
    const { currentPost } = this.props;
    
    if (currentPost) {      
      await this.props.getPostComments(currentPost, currentPost.id);
    } else {      
      // Fetch post data       
      const { postId } = this.props.match.params;
      const post = await this.props.getPostById(postId);     
      await this.props.getPostComments(post, postId);
    }      
  }

  renderCommentNumber = (numberOfComments) => {
    if (numberOfComments > 0) {
      if (numberOfComments > 1) {
        return `${numberOfComments} Comments`
      } 
      return `1 Comment`;     
    }    
    return 'No Comments'
  }

  onDeletePost = async (id) => {    
    await this.props.deletePostById(id);
    this.props.history.goBack();
  }

  onRenderValidPost = () => {
    const { 
      currentPost, 
      updatePost, 
      commentList, 
      updateComment,
      selectCommentToEdit,
      onNewCommentAuthorChange,
      onNewCommentMessageChange,
      deleteCommentById,
      selectedComent,
      createNewComment,
      commentMessage,
      votePost,
      setCurrentPost,
      voteComment,
      deletePostById,
      commentAuthor
    } = this.props;  

    if (currentPost) {      
      if (!currentPost.deleted && JSON.stringify(currentPost) !== JSON.stringify({})) {
        return (
          <Aux>
          <div className={classes.topContainer}>        
            <Post 
              onVotePost={votePost}
              onUpdatePost={updatePost}
              data={currentPost}
              onEditPost={setCurrentPost}
              onDeletePost={deletePostById}
            />
            <div className={classes.numberOfComments}>
              {this.renderCommentNumber(currentPost.commentCount)}
            </div>
            <div className={classes.lineSeparator}/>          
          </div> 

          <div className={classes.commentList}>
            {
              commentList.map((comment, index) => {
                return (
                  <Comment 
                    data={comment}
                    key={index}
                    onVoteComment={voteComment}                    
                    onSelectComment={selectCommentToEdit}
                    onDeleteComment={this.onDeletePost}
                  />
                )
              })
            }          
          </div>
          <AnswerBox
            currentPost={currentPost}
            createComment={createNewComment}
            updateComment={updateComment}
            selectedComment={selectedComent}
            onAuthorChange={onNewCommentAuthorChange}
            onMessageChange={onNewCommentMessageChange}
            message={commentMessage}
            author={commentAuthor}
          />
        </Aux>          
        )
      }
    } else {
      console.log('comparação =', JSON.stringify(currentPost) !== JSON.stringify({}))
      if (JSON.stringify(currentPost) !== JSON.stringify({})) {
        return (
          <div className={classes.loaderContainer}>
            Post not found or deleted!
          </div>   
          );
      } 
      return (
        <div className={classes.loaderContainer}>
          <CircularProgress />
        </div>   
      );      
    }
    
  }
  
  render() {    
    return (
      <div className={classes.container}>
        {this.onRenderValidPost()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({    
  currentCategory: state.categoryData.currentCategory,  
  currentPost: state.postData.currentPost,
  commentList: state.commentData.commentList,
  selectedComent: state.commentData.selectedComent,
  commentAuthor: state.commentData.newCommentAuthor,
  commentMessage: state.commentData.newCommentMessage
})

const mapDispatchToProps = {  
  updatePost,
  voteComment,
  votePost,
  getPostById,
  getPostComments,
  updateComment,
  setCurrentPost,
  deletePostById,
  selectCommentToEdit,
  onNewCommentAuthorChange,
  onNewCommentMessageChange,
  createNewComment,
  deleteCommentById
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
