import React from 'react'
import classes from './PostGrid.css';
import PostItem from './PostItem/PostItem';
import Divider from '@material-ui/core/Divider';
import { Button } from '@material-ui/core';
import Link from 'react-router-dom/Link';



const PostGrid = (props) => {
  const {
    currentCategory,
    postList,
    onSelectPost,
    onVotePost,
    postFilter,
    onChangeFilter,
    onDeletePost
  } = props;
  let postToShow = [...postList];
  if (currentCategory !== '' && currentCategory !== 'all') {
    postToShow = postList.filter(post => post.category === currentCategory);
  }  
  return (    
    <div className={classes.postGridContainer}>

      <div className={classes.filterContainer}>          
      <div>Filtered By</div>
          <select 
            onChange={(event) => {                
              onChangeFilter(event.target.value)}                               
            }                            
            value={postFilter}
          >                
            <option value="Score">Score</option>
            <option value="Date">Date</option>                
          </select>        
      </div>
    
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
                onDeletePost={onDeletePost}
                onUpdateVote={onVotePost}
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
      <Link
        to={'/post/newPost'}
       >
        <Button 
            variant="contained"
            color="primary"      
          >
          Create New Post           
        </Button>      
      </Link>
    </div>    
  )
}

export default PostGrid
