import logo from './logo.svg';
import './App.css';
import data, {allCategories, productCount, namesAndCategories} from './data'
import CategoryList from './components/category_list';
import AllProducts from './components/all_products';

function App() {
  return (
    <div className="App">
      <p> Product Count : {productCount}</p>
      <CategoryList/>
      <AllProducts/>
    </div>
  );
}

export default App;
