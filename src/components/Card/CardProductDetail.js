import React from 'react';
import './CardProductDetail.css';
import '../Container/ContainerCover.css';
import './CardHorizaltal.css';
function CardProductDetail() {
  return (
    <div className='card-frame-hz width-950'>
      <div className='btn-card-header'>
        <i class='fas fa-times'></i>
      </div>

      <div className='card-product-detail-body'>
        <div className='card-part1-hz'>
          <div className='image-detail-square '>
            <img
              src='https://images.unsplash.com/photo-1619893072134-1699f6856102?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80'
              alt=''
            />
          </div>
        </div>
        <div className='card-part2-hz'>
          <div className='text-detail'>
            <p>
              Brand&nbsp;:&nbsp; <span> Good Life</span>
            </p>
            <p>
              Price&nbsp;:&nbsp;<span>50฿</span>
            </p>
            <p>
              Detail&nbsp;:&nbsp;
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quo mollitia quia accusantium
                inventore sit! Sequi facere eius et est error, aliquid, quidem dicta hic dolorem accusantium placeat
                neque nobis?
              </span>
            </p>

            <div className='addProduct'>
              <div className='product-amount'>
                <i className='fa fa-minus'></i>
                <span className='product-number'>1</span>
                <i className='fa fa-plus'></i>
              </div>

              <div className='btn-add-cart-detail'>
                <button>
                  <i class='fas fa-shopping-cart'></i> <span>เพิ่มสินค้าลงในตระกร้า</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProductDetail;
