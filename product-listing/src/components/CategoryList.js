import React from "react";
import { namesAndCategories } from "../data";
import {Button} from '@shopify/polaris'
import './CategoryList.css'


function CategoryList(props) {
  const {category, onClick } = props

  return (
    <div className="categoryList">
      {namesAndCategories.map(obj => {
        const className = obj.category === category ? 'selected' : ''
        return (
        <button
          className={className}
          onClick={() => onClick(obj.category)}
          >
          {obj.category}
          <span> {obj.count}</span>
        </button>    
        )
      })}
      <button
      onClick={() => onClick('All')}
      >
      All
      </button>
    </div>
  )
}


export default CategoryList;