import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Footer from "./components/Footer";
// import ProductsDetails from "./components/ProductsDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        {/* <Route path="/products/:id" element={<ProductsDetails />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
