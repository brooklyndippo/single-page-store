import React, {useState} from "react";
import { inventory } from "../data";


class AllProducts extends React.Component {

    inventory = inventory.map(item => (
        <div>
          <h2>{item.name}</h2>
          <p>{item.price}</p>
          <p>{item.category}</p>
        </div>
      ));

    render () {
        return (
            this.inventory
        )
    }
}

export default AllProducts;