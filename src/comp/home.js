import React, { useEffect, useState } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import Homeproduct from './home_product';
import { AiFillEye, AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoYoutube } from "react-icons/bi";

const Home = ({ addToCart }) => {
  // Product category
  const [newProduct, setNewProduct] = useState([]);
  const [featuredProduct, setFeaturedProduct] = useState([]);
  const [topProduct, setTopProduct] = useState([]);
  // Trending Product
  const [trendingProduct, setTrendingProduct] = useState(Homeproduct);

  // Filter of trending product
  const filtercate = (type) => {
    const filteredProducts = Homeproduct.filter((product) => product.type === type);
    setTrendingProduct(filteredProducts);
  };

  // All Trending Product
  const allTrendingProduct = () => {
    setTrendingProduct(Homeproduct);
  };

  // Product Type
  useEffect(() => {
    productcategory();
  }, []);

  const productcategory = () => {
    // New Product
    const newcategory = Homeproduct.filter((product) => product.type === 'new');
    setNewProduct(newcategory);

    // Featured Product
    const featuredcategory = Homeproduct.filter((product) => product.type === 'featured');
    setFeaturedProduct(featuredcategory);

    // Top Product
    const topcategory = Homeproduct.filter((product) => product.type === 'top');
    setTopProduct(topcategory);
  };

  return (
    <div className='home'>
      <div className='top_banner'>
        <div className='content'>
          <h3>silver aluminum</h3>
          <h2>Apple Watch</h2>
          <p>30% off at your first order</p>
          <Link to='/shop' className='link'>Shop Now</Link>
        </div>
      </div>
      <div className='trending'>
        <div className='container'>
          <div className='left_box'>
            <div className='header'>
              <div className='heading'>
                <h2 onClick={allTrendingProduct}>trending product</h2>
              </div>
              <div className='cate'>
                <h3 onClick={() => filtercate('new')}>New</h3>
                <h3 onClick={() => filtercate('featured')}>Featured</h3>
                <h3 onClick={() => filtercate('top')}>Top selling</h3>
              </div>
            </div>
            <div className='products'>
              <div className='container'>
                {trendingProduct.map((product) => (
                  <div className='box' key={product.id}>
                    <div className='img_box'>
                      <img src={product.image} alt={product.Name}></img>
                      <div className='icon'>
                        <div className='icon_box'>
                          <AiFillEye />
                        </div>
                        <div className='icon_box'>
                          <AiFillHeart />
                        </div>
                      </div>
                    </div>
                    <div className='info'>
                      <h3>{product.Name}</h3>
                      <p>${product.price}</p>
                      <button className='btn' onClick={() => addToCart(product)}>Add to cart</button>
                    </div>
                  </div>
                ))}
              </div>
              <button>Show More</button>
            </div>
          </div>
          <div className='right_box'>
            <div className='right_container'>
              <div className='testimonial'>
                <div className='head'>
                  <h3>our testimonial</h3>
                </div>
                <div className='detail'>
                  <div className='img_box'>
                    <img src='image/T1.jpg' alt='testimonial'></img>
                  </div>
                  <div className='info'>
                    <h3>T1Bot</h3>
                    <h4>Shopping User</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur eu fringilla odio. Nam feugiat nibh et turpis
                      rutrum ultrices. Proin ullamcorper sed erat vel
                      pellentesque. Praesent viverra velit eget egestas semper</p>
                  </div>
                </div>
              </div>
              <div className='newsletter'>
                <div className='head'>
                  <h3>newsletter</h3>
                </div>
                <div className='form'>
                  <p>join our mailing list</p>
                  <input type='email' placeholder='E-mail' autoComplete='off'></input>
                  <button>subscribe</button>
                  <div className='icon_box'>
                    <div className='icon'>
                      <BiLogoFacebook />
                    </div>
                    <div className='icon'>
                      <BiLogoTwitter />
                    </div>
                    <div className='icon'>
                      <BiLogoInstagram />
                    </div>
                    <div className='icon'>
                      <BiLogoYoutube />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='banners'>
        <div className='container'>
          <div className='left_box'>
            <div className='box'>
              <img src='image/Multi-Banner-1.avif' alt='banner'></img>
            </div>
            <div className='box'>
              <img src='image/Multi-Banner-2.avif' alt='banner'></img>
            </div>
          </div>
          <div className='right_box'>
            <div className='top'>
              <img src='image/Multi-Banner-3.webp' alt=''></img>
              <img src='image/Multi-Banner-4.avif' alt=''></img>
            </div>
            <div className='bottom'>
              <img src='image/Multi-Banner-5.webp' alt=''></img>
            </div>
          </div>
        </div>
      </div>
      <div className='product_type'>
        <div className='container'>
          <div className='box'>
            <div className='header'>
              <h2>New Product</h2>
            </div>
            {newProduct.map((product) => (
              <div className='productbox' key={product.id}>
                <div className='img-box'>
                  <img src={product.image} alt={product.Name}></img>
                </div>
                <div className='detail'>
                  <h3>{product.Name}</h3>
                  <p>$ {product.price}</p>
                  <div className='icon'>
                    <button><AiFillEye /></button>
                    <button><AiFillHeart /></button>
                    <button onClick={() => addToCart(product)}><AiOutlineShoppingCart /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='box'>
            <div className='header'>
              <h2>Featured Product</h2>
            </div>
            {featuredProduct.map((product) => (
              <div className='productbox' key={product.id}>
                <div className='img-box'>
                  <img src={product.image} alt={product.Name}></img>
                </div>
                <div className='detail'>
                  <h3>{product.Name}</h3>
                  <p>$ {product.price}</p>
                  <div className='icon'>
                    <button><AiFillEye /></button>
                    <button><AiFillHeart /></button>
                    <button onClick={() => addToCart(product)}><AiOutlineShoppingCart /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='box'>
            <div className='header'>
              <h2>Top Product</h2>
            </div>
            {topProduct.map((product) => (
              <div className='productbox' key={product.id}>
                <div className='img-box'>
                  <img src={product.image} alt={product.Name}></img>
                </div>
                <div className='detail'>
                  <h3>{product.Name}</h3>
                  <p>$ {product.price}</p>
                  <div className='icon'>
                    <button><AiFillEye /></button>
                    <button><AiFillHeart /></button>
                    <button onClick={() => addToCart(product)}><AiOutlineShoppingCart /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
