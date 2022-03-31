import React from "react";
import { namesAndCategories } from "../data";

class CategoryList extends React.Component {

    navButtons = namesAndCategories.map(x => (
        <button>
          {x.category}
        </button>
      ));

    render () {
        return (
            this.navButtons
        )
    }
}

export default CategoryList;