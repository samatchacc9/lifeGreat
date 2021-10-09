import React from 'react';
import './CardCart.css';
import { useHistory } from 'react-router-dom';

function CardCart() {
  const history = useHistory();

  const handlepayment = () => {
    history.push('/CustomerPayment');
  };

  return (
    <>
      <div className='cart'>
        <div className='products'>
          <div className='product-order-header'>ตะกร้าสินค้า</div>
          <div className='product'>
            <div className='cart-img'>
              <img src='https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' />
            </div>
            <div className='product-info'>
              <p>แบรนด์</p>
              <p>
                <span>Lorem ipsum dolor sit amet consectetur</span>{' '}
              </p>
              <p>
                ราคาต่อชิ้น : <span>200</span>
              </p>
              <p>
                รวม : <span>1000</span>
              </p>

              <div className='product-order-amount'>
                <div className='count-product'>
                  <div className='manage-product'>
                    <i className='fa fa-minus'></i>
                    <span className='product-number'>1</span>
                    <i className='fa fa-plus'></i>
                  </div>

                  <div className='btn-cart-delete '>
                    <button>
                      <i className='fa fa-trash' aria-hidden='true'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='product'>
            <div className='cart-img'>
              <img src='https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=626&q=80' />
            </div>
            <div className='product-info'>
              <p>แบรนด์</p>
              <p>
                <span>Lorem ipsum dolor sit amet consectetur</span>
              </p>
              <p>
                ราคาต่อชิ้น : <span>200</span>
              </p>
              <p>
                รวม : <span>1000</span>
              </p>

              <div className='product-order-amount'>
                <div className='count-product'>
                  <div className='manage-product'>
                    <i className='fa fa-minus'></i>
                    <span className='product-number'>1</span>
                    <i className='fa fa-plus'></i>
                  </div>

                  <div className='btn-cart-delete '>
                    <button>
                      <i className='fa fa-trash' aria-hidden='true'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='cart-total'>
          <p>
            รวมทั้งหมด :<span>3,000</span>
          </p>

          <p>
            จำนวน :<span>2</span>
          </p>

          <a href='#' onClick={handlepayment}>
            ชำระเงิน
          </a>
        </div>
      </div>
    </>
  );
}

export default CardCart;
