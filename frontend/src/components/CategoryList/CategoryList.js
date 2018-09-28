import React from 'react'
import { Link } from 'react-router-dom';
import classes from './CategoryList.css';
import { Button } from '@material-ui/core';

const CategoryList = (props) => {
  const { categories } = props;   
  console.log(props); 
  return (
    <div className={classes.CategoryContainer}>
      <div className={classes.content}>
        <div className={classes.CategoryHeader}>
            <h2>Categories</h2>
          </div>
          <div className={classes.CategoryList}>
            <ul >
              {
                categories.map((cat,index) => {
                return (
                  <li key={index}>
                  <Link
                     to={`/${
                       cat.name === 'all' ?
                       ''
                       :
                       cat.name
                      }`}
                    >                    
                  <Button 
                    color="primary" 
                    className={classes.button}
                    onClick={() => props.onPress(cat.name)}
                  >                    
                      {cat.name}                    
                  </Button>
                  </Link>
                  </li>                  
                )
              })}
            </ul>
          </div>          
      </div>      
    </div>
  )
}

export default CategoryList
