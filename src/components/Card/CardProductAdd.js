import React from 'react';
import Topic from '../Topic/Topic';
import './CardProduct.css';
import { useHistory, Link } from 'react-router-dom';
// import { ProductContext } from '../../contexts/productContext';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext';

function CardProductAdd() {
  const history = useHistory();
  // const historyProductDetail = useHistory();
  // const { products } = useContext(ProductContext);
  // console.log(products);
  // const handleClickCard = () => {
  //   historyProductDetail.push('/CustomerProductDetail');
  // };

  const { product, onAdd } = useContext(CartContext);

  // console.log('views product:' + { products });
  // console.log(products);

  // const handleClickCard = () => {
  //   history.push('/CustomerProductDetail');
  // };

  return (
    <section>
      <Topic title={'Product'} />
      <div className='cards'>
        {product.map((item) => {
          return (
            <div className='card' key={item.id}>
              <Link to={{ pathname: `/CustomerProductDetail/${item.id}`, state: item }} className='image-section'>
                {/* <div className='image-section' onClick={handleClickCard}> */}

                <img src={item.picurl} alt='' />
              </Link>
              <div className='product-description'>
                <h1 className='product-brand'>{item.productbrand}</h1>
                <p className='product-detail'>{item.productdetail}</p>
                <p className='product-price'>
                  <span>฿</span>
                  {item.productprice}
                </p>

                <div className='btn-add-cart'>
                  <button onClick={() => onAdd(item)}>
                    <i className='fas fa-shopping-cart'></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        {/* <div className='card'>
          <div className='image-section'>
            <img
              src='https://images.unsplash.com/photo-1619166855062-f63c187def3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=662&q=80'
              alt=''
            />
          </div>
          <div className='product-description'>
            <h1 className='product-brand'>brand</h1>
            <p className='product-detail'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, non!</p>
            <p className='product-price'>
              <span>฿</span>150
            </p>
            <div className='product-amount'>
              <i className='fa fa-minus'></i>
              <span className='product-number'>1</span>
              <i className='fa fa-plus'></i>
            </div>
            <div className='btn-add-cart'>
              <button>
                <i class='fas fa-shopping-cart'></i>
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default CardProductAdd;
