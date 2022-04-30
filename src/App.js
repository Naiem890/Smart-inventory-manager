import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/shared/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Footer from "./components/shared/Footer/Footer";
import ManageProduct from "./components/ManageProduct/ManageProduct";
import { ToastContainer } from "react-toastify";
import ManageInventory from "./components/ManageInventory/ManageInventory/ManageInventory";
import AddProduct from "./components/ManageInventory/AddProduct/AddProduct";

function App() {
  return (
    <div>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/manage-inventory"
            element={<ManageInventory></ManageInventory>}
          ></Route>
          <Route
            path="/products/:id"
            element={<ManageProduct></ManageProduct>}
          ></Route>
          <Route
            path="/add-product"
            element={<AddProduct></AddProduct>}
          ></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
