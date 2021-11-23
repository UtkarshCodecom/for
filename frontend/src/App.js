import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import axios from "axios";
import ProductDetails from "./component/Home/ProductDetails";

const App = () => {
  const [products, setProducts] = useState([]);

  // Get All Products
  const getProduct = async () => {
    let link = `/nse/get_indices`;

    const da = await axios.get(link);
    setProducts(da.data.data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  console.log(products);
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/nse/:id" element={<ProductDetails products={products} />} />
          <Route exact path="/" element={<Home products={products} />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
