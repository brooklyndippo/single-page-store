import './App.css';
import data, { productCount, namesAndCategories} from './data'
import CategoryList from './components/CategoryList';
import Header from './components/Header';
import React from 'react';
import { useState } from 'react';
import ProductList from './components/ProductList';

function App() {

  //create a category filtering function

  const [category, setCategory] = useState('Toys')

  console.log(category)

  return (
    <div className="App">
      <Header title="Wamazon" productCount={productCount} categoryCount={namesAndCategories.length}/>
      <CategoryList 
      category={category}
      onClick={newCategory => setCategory(newCategory)}
      />
      <ProductList 
      category={category}
      />
    </div>
  );
}

// AllProducts.data.filter(obj)
// obj obj.category || obj category all
//

export default App;
