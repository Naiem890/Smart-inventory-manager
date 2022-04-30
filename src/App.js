import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/shared/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Footer from "./components/shared/Footer/Footer";
import ManageProduct from "./components/ManageProduct/ManageProduct";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/products/:id"
            element={<ManageProduct></ManageProduct>}
          ></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
