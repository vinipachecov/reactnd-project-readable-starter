import React, { Component } from 'react'
import classes from './Home.css'
import PostGrid from '../../PostGrid/PostGrid';
import CategoryList from '../../CategoryList/CategoryList';
import { getCategories, setCurrentCategory } from '../../../actions/CategoryActions';
import { getAllPosts, setCurrentPost, updatePost } from '../../../actions/PostActions';
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
      postList
    } = this.props;
    console.log(this.props.currentPost)
    return (
      <div className={classes.container}>
        <PostGrid
          onPressItem={this.props.updatePost} 
          postList={postList}
          currentCategory={currentCategory}
          onSelectPost={this.props.setCurrentPost}
        />
        <CategoryList 
          categories={categoryList}
          onPress={this.props.setCurrentCategory}
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
  updatePost,
  getCategories,
  getAllPosts,
  setCurrentPost,
  setCurrentCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

