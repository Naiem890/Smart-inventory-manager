import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const {
    _id: id,
    productName,
    productImage,
    productDescription,
    productPrice,
    productStock,
    productSupplier,
  } = product;

  return (
    <div>
      <div className="max-w-sm bg-white rounded-xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="bg-slate-200 m-5 rounded-xl">
          <img className="rounded-t-lg px-12 py-6" src={productImage} alt="" />
        </div>
        <div className="p-5 pt-0">
          <div>
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {productName}
            </h5>
          </div>
          <p className="mb-2  text-gray-400 dark:text-gray-400 text-md">
            {productDescription.length > 60
              ? productDescription.substring(0, 60 - 3) + "..."
              : productDescription}
          </p>
          <hr />
          <p className="my-3 text-sm text-slate-500">
            <span className="font-semibold">Supplier:</span> {productSupplier}
          </p>
          <hr />

          <div className="flex justify-between items-center mt-2 mb-3">
            <h3 className="text-2xl font-bold text-blue-500">
              ${productPrice}
            </h3>
            <p className="text-gray-500 text-md">
              Stock: <span>{productStock}</span>
            </p>
          </div>
          <div className="px-2">
            <Link
              to={`/products/${id}`}
              className="block w-full py-3 px-4 text-sm font-medium  text-center text-blue-500 duration-150 hover:text-white border-blue-500 border-2 rounded-lg hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-500 dark:focus:ring-blue-500 "
            >
              Update Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
