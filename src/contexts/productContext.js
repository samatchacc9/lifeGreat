import { createContext, useState, useEffect } from 'react';
import axios from '../config/axios';

// ประกาศ Context
const ProductContext = createContext();

function ProductContextProvider({ children }) {
  //useState Product
  const [products, setProducts] = useState([]);

  // use Effect
  useEffect(() => {
    const getproducts = async () => {
      try {
        const res = await axios.get('/product');
        const resProducts = res.data.products;
        //==========================
        // console.log(resProducts);
        //==========================
        setProducts(resProducts);
      } catch (err) {
        console.log(err);
      }
    };
    getproducts();
  }, []);

  //ส่ง prop
  return <ProductContext.Provider value={{ products, setProducts }}>{children}</ProductContext.Provider>;
}

// export ออกไป
export { ProductContext, ProductContextProvider };
