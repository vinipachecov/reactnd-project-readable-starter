import React from 'react'
import classes from './PostGrid.css';
import PostItem from './PostItem/PostItem';
import Divider from '@material-ui/core/Divider';

// const postList = [
//   {
//     postName: 'Postagem 1',
//     commentsNumber: 12000, 
//     overallScore: 12
//   },
//   {
//     postName: 'Postagem 4',
//     commentsNumber: 500, 
//     overallScore: 58
//   },
//   {
//     postName: 'Postagem 2',
//     commentsNumber: 300, 
//     overallScore: -58
//   },
//   {
//     postName: 'Postagem 3',
//     commentsNumber: 100, 
//     overallScore: -5
//   }
// ];


const PostGrid = (props) => {
  const {
    currentCategory,
    postList,
    onSelectPost,
    onPressItem
  } = props;
  let postToShow = [...postList];
  if (currentCategory !== '' && currentCategory !== 'all') {
    postToShow = postList.filter(post => post.category === currentCategory);
  }  
  return (    
    <div className={classes.postGridContainer}>
    
      <div className={classes.categoryTitle}>
        <div>
        {
          currentCategory !== '' && currentCategory !== 'all' ?
          currentCategory : 'Posts' 
        }
         </div>      
      </div>
      <ul className={classes.categoryPostList}>   
        {
          postToShow.length > 0 ?           
          postToShow.map((post, index) => {
          return (
            <li 
              key={index}
            >            
              <PostItem 
                onUpdateVote={onPressItem}
                post={post}    
                onPress={onSelectPost}           
              />             
              <Divider />
            </li>            
          )
          })
          :
          <div>
            Oops, no posts in this category!
          </div>
        }
      </ul>
    </div>    
  )
}

export default PostGrid
