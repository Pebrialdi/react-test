import React, { useState } from 'react';
import Nav from './comp/nav';
import { BrowserRouter } from 'react-router-dom';
import Rout from './comp/rout';
import Footer from './comp/footer';
import Homeproduct from './comp/home_product';

const App = () => {
  // State management
  const [cart, setCart] = useState([]);
  const [shop, setShop] = useState(Homeproduct);
  const [search, setSearch] = useState('');

  // Shop category filter
  const filterByCategory = (category) => {
    const filteredProducts = Homeproduct.filter((product) => product.cat === category);
    setShop(filteredProducts);
  };

  const resetCategoryFilter = () => {
    setShop(Homeproduct);
  };

  // Shop search filter
  const handleSearch = () => {
    if (search.trim().length === 0) {
      alert("Please search for something!");
      setShop(Homeproduct);
    } else {
      const searchResults = Homeproduct.filter((product) => product.cat === search);
      setShop(searchResults);
    }
  };

  // Add to cart functionality
  const addToCart = (product) => {
    const productExists = cart.find((item) => item.id === product.id);

    if (productExists) {
      alert("This product is already added to the cart.");
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      alert("Added to cart.");
    }
  };

  console.log(cart);

  return (
    <BrowserRouter>
      <Nav search={search} setSearch={setSearch} searchProduct={handleSearch} />
      <Rout 
        setCart={setCart} 
        cart={cart} 
        shop={shop} 
        filter={filterByCategory} 
        resetCategoryFilter={resetCategoryFilter} 
        addToCart={addToCart} 
      />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
