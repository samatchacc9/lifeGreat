import React from 'react';
import './CardCart.css';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext';

function CardCart() {
  const history = useHistory();

  const { cartItems, onAdd, onRemove, onDeleteItem, setTotal, total } = useContext(CartContext);

  let itemPrices = cartItems.reduce((a, c) => a + c.productprice * c.qty, 0);

  setTotal(itemPrices);
  const qty = cartItems.reduce((acumulator, item) => acumulator + item.qty, 0);

  const handlepayment = () => {
    history.push('/CustomerPayment');
  };

  // console.log(qty);
  // console.log(cartItems.qty);
  return (
    <>
      {/* {errorAddForm.errBack && <div className="invalid-feedback">{errorAddForm.errBack}</div>} */}
      {cartItems.length === 0 ? (
        <div>
          <h1 style={{ fontWeight: 'bold', color: '#01aacd' }}>ไม่พบสินค้า</h1>
        </div>
      ) : (
        <div className='cart' style={{ margin: '30px' }}>
          <div className='products'>
            <div className='product-order-header'>ตะกร้าสินค้า</div>

            {cartItems.map((item) => (
              <div className='product' key={item.id}>
                <div className='cart-img'>
                  <img src={item.picurl} />
                </div>
                <div className='product-info'>
                  <p>{item.productbrand}</p>
                  <p>
                    <span>{item.productdetail}</span>
                  </p>
                  <p>
                    ราคาต่อชิ้น : <span>{item.productprice}</span>
                  </p>
                  {/* <p>
                  รวม : <span>1000</span>
                </p> */}

                  <div className='product-order-amount'>
                    <div className='count-product'>
                      <div className='manage-product'>
                        <i className='fa fa-minus' onClick={() => onRemove(item)}></i>
                        <span className='product-number'>{item.qty}</span>
                        <i className='fa fa-plus' onClick={() => onAdd(item)}></i>
                      </div>

                      <div className='btn-cart-delete '>
                        {/* <button>
                        <i className='fa fa-trash' aria-hidden='true'></i>
                      </button> */}

                        <button onClick={() => onDeleteItem(item)}>
                          <i className='fa fa-trash' aria-hidden='true'></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='cart-total'>
            <p>
              รวมทั้งหมด :<span>฿{total.toFixed(2)}</span>
            </p>

            <p>
              จำนวน :<span>{qty}</span>
            </p>

            <a href='#' onClick={handlepayment}>
              ชำระเงิน
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default CardCart;
