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
import Login from "./components/Login/Login/Login";
import Register from "./components/Login/Register/Register";
import Blog from "./components/Blog/Blog";
import RequireAuth from "./components/Login/RequireAuth/RequireAuth";
import ManageMyItem from "./components/ManageMyItem/ManageMyItem";
import ResetPassword from "./components/Login/ResetPassword/ResetPassword";
import NotFound from "./components/shared/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/manage-inventory"
          element={
            <RequireAuth>
              <ManageInventory></ManageInventory>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manage-my-items"
          element={
            <RequireAuth>
              <ManageMyItem></ManageMyItem>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/products/:id"
          element={
            <RequireAuth>
              <ManageProduct></ManageProduct>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/add-product"
          element={
            <RequireAuth>
              <AddProduct></AddProduct>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/reset-password"
          element={<ResetPassword></ResetPassword>}
        ></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </BrowserRouter>
  );
}

export default App;
