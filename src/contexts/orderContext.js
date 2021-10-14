import { createContext, useState, useEffect } from 'react';
import axios from '../config/axios';

const OrderContext = createContext();

function OrderContextProvider({ children }) {
  // state
  const [order, setOrder] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const getOrder = async () => {
      try {
        const res = await axios.get('/order');
        setOrder(res.data.orders);

        //=======================
        // console.log(resOrder);
        //=====================
      } catch (err) {
        console.log(err);
        // console.dir();
      }
    };
    getOrder();
  }, [toggleFetch]);

  // console.log(order);

  return <OrderContext.Provider value={{ order, setOrder, setToggleFetch }}>{children}</OrderContext.Provider>;
}

export { OrderContext, OrderContextProvider };
