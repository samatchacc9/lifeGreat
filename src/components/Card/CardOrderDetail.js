import React from 'react';
import './CardOrderDetail.css';
import './CardCart.css';

function CardOrderDetail() {
  return (
    <div className='cart'>
      <div className='products'>
        <div className='product-order-header'>รายการสั่งซื้อ</div>
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
          </div>
        </div>
      </div>

      <div className='cart-total-order-detail'>
        <p>
          รวมทั้งหมด :<span>3,000</span>
        </p>

        <p>
          จำนวน :<span>2</span>
        </p>
        <a href='#'>ย้อนกลับ</a>
      </div>
    </div>
  );
}

export default CardOrderDetail;
