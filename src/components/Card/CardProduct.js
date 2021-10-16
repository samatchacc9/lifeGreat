import React, { useContext } from 'react';
import Topic from '../Topic/Topic';
import './CardProduct.css';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { ProductContext } from '../../contexts/productContext';
// import {ProductContext } from '../../';
import Swal from 'sweetalert2';

function CardProduct() {
  // const {products} = useContext(ProductContext)

  const { products } = useContext(ProductContext);

  // console.log(products);

  const history = useHistory();

  const handleClickCard = () => {
    history.push('/CustomerProductDetail');
  };

  const handleClickProduct = (e) => {
    Swal.fire({
      title: 'กรุณาเข้าสู่ระบบ',
      // text: 'Do you want to continue',
      icon: 'warning',
      confirmButtonText: 'OK',
    });
  };
  return (
    <section>
      <Topic title={'Product'} />
      <div className='cards' onClick={handleClickProduct}>
        {products.map((item) => {
          return (
            <div className='card' onClick={handleClickCard}>
              <div className='image-section'>
                <img src={item.picurl} alt='' style={{ margin: '10px 0px' }} />
              </div>
              <div className='product-description'>
                <h1 className='product-brand'>{item.productbrand}</h1>
                <p className='product-detail'>{item.productdetail}</p>
                <p className='product-price'>
                  <span>฿</span>
                  {item.productprice}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CardProduct;
