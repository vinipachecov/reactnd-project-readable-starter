import React from 'react'
import classes from './PostGrid.css';
import PostItem from './PostItem/PostItem';
import Divider from '@material-ui/core/Divider';

const postList = [
  {
    postName: 'Postagem 1',
    commentsNumber: 12000, 
    overallScore: 12
  },
  {
    postName: 'Postagem 4',
    commentsNumber: 500, 
    overallScore: 58
  },
  {
    postName: 'Postagem 2',
    commentsNumber: 300, 
    overallScore: -58
  },
  {
    postName: 'Postagem 3',
    commentsNumber: 100, 
    overallScore: -5
  }
];


const PostGrid = (props) => {
  return (    
    <div className={classes.postGridContainer}>
      <div className={classes.categoryTitle}>
        <div>Categoria</div>      
      </div>
      <ul className={classes.categoryPostList}>   
        {postList.map(post => {
          return (
            <li>
              <PostItem 
                overallScore={post.overallScore}
                postName={post.postName}
                commentsNumber={post.commentsNumber}
              />
              <Divider />
            </li>            
          )
        })}
      </ul>
    </div>    
  )
}

export default PostGrid
