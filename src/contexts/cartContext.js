import { createContext, useState, useEffect } from 'react';
import axios from '../config/axios';

// ประกาศ Context
const CartContext = createContext();

function CartContextProvider({ children }) {
  //======================================= state =======================================
  //useState Product
  const [product, setProduct] = useState([]);

  //useState Product
  const [cartItems, setCartItems] = useState([]);

  const [total, setTotal] = useState(0);

  //======================================= useEffect fetch product =======================================

  // use Effect fetch products
  useEffect(() => {
    const getproducts = async () => {
      try {
        const res = await axios.get('/product');
        const resProducts = res.data.products;
        //==========================
        // console.log(resProducts);
        //==========================
        setProduct(resProducts);
      } catch (err) {
        console.log(err);
      }
    };
    getproducts();
  }, []);

  //======================================= function เพิ่ม =======================================

  const onAdd = (product) => {
    const newCart = [...cartItems];
    const idx = newCart.findIndex((x) => x.id === product.id);
    if (idx > -1) {
      newCart[idx] = { ...newCart[idx], qty: newCart[idx].qty + 1 };
    } else {
      newCart.push({ ...product, qty: 1 });
    }

    setCartItems(newCart);
  };

  //======================================= function ลบ =======================================

  const onRemove = (product) => {
    // const exist = cartItems.find(x => x.id === product.id)
    if (product.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(cartItems.map((x) => (x.id === product.id ? { ...product, qty: product.qty - 1 } : x)));
    }
  };
  //======================================= function ลบ item =======================================

  const onDeleteItem = (item) => {
    const idx = cartItems.findIndex((x) => x.id === item.id);

    if (idx !== -1) {
      const newProducts = [...cartItems];
      newProducts.splice(idx, 1);
      setCartItems(newProducts);
    }
  };
  //ส่ง prop
  return (
    <CartContext.Provider
      value={{ product, setProduct, cartItems, setCartItems, onAdd, onRemove, onDeleteItem, total, setTotal }}>
      {children}
    </CartContext.Provider>
  );
}

// export ออกไป
export { CartContext, CartContextProvider };
