import React from 'react';
import Topic from '../Topic/Topic';
import './CardProduct.css';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function CardProduct() {
  const history = useHistory();

  const handleClickCard = () => {
    history.push('/CustomerProductDetail');
  };

  return (
    <section>
      <Topic title={'Product'} />
      <div className='cards'>
        <div className='card' onClick={handleClickCard}>
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
            {/* <div className='product-amount'>
                <i className='fa fa-minus'></i>
                <span className='product-number'>1</span>
                <i className='fa fa-plus'></i>
              </div> */}
            {/* <div className='btn-add-cart'>
                <button>add</button>
              </div> */}
          </div>
        </div>

        <div className='card'>
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
            {/* <div className='product-amount'>
                <i className='fa fa-minus'></i>
                <span className='product-number'>1</span>
                <i className='fa fa-plus'></i>
              </div> */}
            {/* <div className='btn-add-cart'>
                <button>add</button>
              </div> */}
          </div>
        </div>

        <div className='card'>
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
            {/* <div className='product-amount'>
                <i className='fa fa-minus'></i>
                <span className='product-number'>1</span>
                <i className='fa fa-plus'></i>
              </div> */}
            {/* <div className='btn-add-cart'>
                <button>add</button>
              </div> */}
          </div>
        </div>

        <div className='card'>
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
            {/* <div className='product-amount'>
                <i className='fa fa-minus'></i>
                <span className='product-number'>1</span>
                <i className='fa fa-plus'></i>
              </div> */}
            {/* <div className='btn-add-cart'>
                <button>add</button>
              </div> */}
          </div>
        </div>

        <div className='card'>
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
            {/* <div className='product-amount'>
                <i className='fa fa-minus'></i>
                <span className='product-number'>1</span>
                <i className='fa fa-plus'></i>
              </div> */}
            {/* <div className='btn-add-cart'>
                <button>add</button>
              </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardProduct;
