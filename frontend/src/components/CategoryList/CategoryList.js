import React from 'react'
import classes from './CategoryList.css';

const CategoryList = (props) => {
  const { categories } = props;
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
                    {cat.name}
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
