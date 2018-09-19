import React, { Component } from 'react'
import classes from './Home.css'
import PostGrid from '../../PostGrid/PostGrid';
import CategoryList from '../../CategoryList/CategoryList';
import { getCategories } from '../../../actions/CategoryActions';
import { getAllPosts } from '../../../actions/PostActions';
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
    return (
      <div className={classes.container}>
        <PostGrid 
          postList={postList}
          currentCategory={currentCategory}
        />
        <CategoryList categories={categoryList}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  categoryList: state.categoryData.categoryList,
  currentCategory: state.categoryData.currentCategory,
  postList: state.postData.postList
});

const mapDispatchToProps = {
  getCategories,
  getAllPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

