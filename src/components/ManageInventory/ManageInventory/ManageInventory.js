import React from "react";
import useProducts from "../../../Hooks/useProducts";
import manageProduct from "../../../image/manage-product.svg";
import ProductRow from "../ProductRow/ProductRow";
const ManageInventory = () => {
  const { products, setProducts } = useProducts();

  return (
    <div className="px-6 xl:px-0">
      <div
        className=" max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 shadow-sm border-2 mt-12
      rounded-xl"
      >
        <div className="grid grid-cols-12 gap-9">
          <div className="max-w-md rounded-lg md:col-span-5">
            <img className="px-10 py-4" src={manageProduct} alt="" />
          </div>
          <div className="md:col-span-7">
            <h2 className="text-2xl font-bold">Manage Your Inventory Here</h2>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-5">
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
                      product={product}
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
