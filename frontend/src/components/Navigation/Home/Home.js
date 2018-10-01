import React, { Component } from 'react'
import classes from './Home.css'
import PostGrid from '../../PostGrid/PostGrid';
import CategoryList from '../../CategoryList/CategoryList';
import { getCategories, setCurrentCategory } from '../../../actions/CategoryActions';
import { 
  getAllPosts, 
  setCurrentPost, 
  votePost, 
  changePostFilter,
  deletePostById
} from '../../../actions/PostActions';
import { connect } from 'react-redux'


export class Home extends Component {  

  async componentDidMount() {
    await this.props.getCategories();
    await this.props.getAllPosts();
  }

  render() {    
    const { 
      categoryList,
      currentCategory,
      postList,
      votePost,
      setCurrentPost,
      setCurrentCategory,
      changePostFilter,
      deletePostById,
      postFilter
    } = this.props;   
             
    return (
      <div className={classes.container}>       
    
        <PostGrid
          onVotePost={votePost} 
          postList={postList}
          currentCategory={currentCategory}
          onSelectPost={setCurrentPost}
          postFilter={postFilter}
          onChangeFilter={changePostFilter}
          onDeletePost={deletePostById}
        />
        <CategoryList 
          categories={categoryList}
          onPress={setCurrentCategory}
        />         
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  categoryList: state.categoryData.categoryList,
  currentCategory: state.categoryData.currentCategory,
  postList: state.postData.postList,
  currentPost: state.postData.currentPost,
  postFilter: state.postData.postFilter

});

const mapDispatchToProps = {
  votePost,
  getCategories,
  getAllPosts,
  setCurrentPost,
  setCurrentCategory,
  changePostFilter,
  deletePostById
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

