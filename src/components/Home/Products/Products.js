import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../../Hooks/useProducts";
import Product from "../Product/Product";

const Products = () => {
  const { products } = useProducts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-5xl font-kanit mb-10 capitalize text-center">
        Manage your product
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-6 md:justify-items-stretch">
        {products.slice(0, 6).map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
      <div className="text-center">
        <Link
          to="/manage-inventory"
          className="inline-flex items-center px-7 py-3  mt-7 font-semibold text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          Manage Inventory
        </Link>
      </div>
    </div>
  );
};

export default Products;
