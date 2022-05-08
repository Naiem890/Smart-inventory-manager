import { PlusIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../../Hooks/useProducts";
import manageProductImage from "../../../image/manage-product.svg";
import ProductRow from "../ProductRow/ProductRow";
const ManageInventory = () => {
  const { products, setProducts } = useProducts();

  const handleDelete = (id) => {
    console.log(id);

    const confirm = window.confirm(
      "Are You Sure? You Want To Delete This Product"
    );
    if (confirm) {
      fetch(`https://lit-sands-09202.herokuapp.com/product/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          const remain = products.filter((product) => product._id !== id);
          console.log(remain.length);
          setProducts(remain);
        });
    }
  };

  return (
    <div className="px-6 xl:px-0">
      <div
        className="max-w-7xl bg-white mx-auto p-4 sm:p-6 lg:p-8 shadow-sm border-2 mt-6 md:mt-12
      rounded-xl"
      >
        <div className="grid grid-cols-7 gap-0 lg:gap-9">
          <div className="max-w-md rounded-lg col-span-full  md:col-span-3">
            <img className="px-10 py-4" src={manageProductImage} alt="" />
          </div>
          <div className=" col-span-full md:col-span-4">
            <div className="flex justify-between items-center">
              <h2 className="md:text-2xl text-xl font-bold">
                Manage Your Inventory Here
              </h2>
              <Link
                to="/add-product"
                className="inline-flex items-center px-7 py-3   font-semibold text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                <PlusIcon className="w-5 h-5 mr-2 -ml-3"></PlusIcon>
                Add Product
              </Link>
            </div>
            <div className="relative overflow-x-auto overflow-y-auto h-96 shadow-md sm:rounded-lg mt-6">
              <table className="w-full  text-sm text-left table-auto text-gray-500 dark:text-gray-400">
                <thead className="text-xs sticky top-0 text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 w-2/5 break-words py-5">
                      Product name
                    </th>
                    <th scope="col" className="px-6 text-blue-600 py-5">
                      Stock
                    </th>
                    <th scope="col" className="px-6 text-green-500 py-5">
                      Sold
                    </th>
                    <th scope="col" className="px-6 py-5">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-5">
                      <span className="sr-only">Delete</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <ProductRow
                      key={product._id}
                      props={{ product, handleDelete }}
                    ></ProductRow>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageInventory;
