import React, {useState} from "react";
import { inventory } from "../data";
import {Card, Badge} from '@shopify/polaris';
import StarRatingComponent from 'react-star-rating-component';


function ProductList(props) {
  const {category} = props

  return (
    <div id='product-results' className="ProductList">
      {inventory.filter(obj => obj.category === category || category === 'All').map(item => {
        return (
        <Card
        title={item.name}
        class="single-item"
        primaryFooterAction={{content: 'Add to Cart'}}
        >
          <Card.Section title ="">
            <p>{item.description}</p>
            <br/>
            <StarRatingComponent 
            editing={false}
            starCount={5}
            value={item.rating}
            />
            <br/>
            <small>Average rating: {item.rating} stars</small>
            <br/>
            <h3><strong>{item.price}</strong></h3>            

          </Card.Section>
          <Card.Section>
            <p>Available: {item.units}</p>
            <br/>
            <Badge>{item.category}</Badge>
          </Card.Section>
        </Card>
        )
      })}

    </div>


  )
}


export default ProductList;