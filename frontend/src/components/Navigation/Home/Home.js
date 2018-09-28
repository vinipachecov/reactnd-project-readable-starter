import React, { Component } from 'react'
import classes from './Home.css'
import PostGrid from '../../PostGrid/PostGrid';
import CategoryList from '../../CategoryList/CategoryList';
import { getCategories, setCurrentCategory } from '../../../actions/CategoryActions';
import { getAllPosts, setCurrentPost, updatePost, votePost } from '../../../actions/PostActions';
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
      setCurrentCategory
    } = this.props;    
    return (
      <div className={classes.container}>
        <PostGrid
          onVotePost={votePost} 
          postList={postList}
          currentCategory={currentCategory}
          onSelectPost={setCurrentPost}
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

});

const mapDispatchToProps = {
  votePost,
  getCategories,
  getAllPosts,
  setCurrentPost,
  setCurrentCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

