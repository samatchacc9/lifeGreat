import React from 'react';
import './CardProductDetail.css';
import '../Container/ContainerCover.css';
import './CardHorizaltal.css';
import { useHistory, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext';

function CardProductDetail() {
  const location = useLocation();
  const history = useHistory();

  const { onAdd, onRemove } = useContext(CartContext);

  const handleClickCancle = () => {
    history.push('/CustomerProduct');
  };

  return (
    <div className='card-frame-hz width-950'>
      <div className='btn-card-header'>
        <i class='fas fa-times' onClick={handleClickCancle}></i>
      </div>

      <div className='card-product-detail-body'>
        <div className='card-part1-hz'>
          <div className='image-detail-square '>
            <img src={location.state.picurl} alt='' />
          </div>
        </div>
        <div className='card-part2-hz'>
          <div className='text-detail'>
            <p>
              {location.state.productbrand}&nbsp;:&nbsp; <span> {location.state.productname}</span>
            </p>
            <p>
              Price&nbsp;:&nbsp;<span>{location.state.productprice}฿</span>
            </p>
            <p>
              Detail&nbsp;:&nbsp;
              <span>{location.state.productdetail}</span>
            </p>

            {/* <div className='addProduct'>
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProductDetail;
