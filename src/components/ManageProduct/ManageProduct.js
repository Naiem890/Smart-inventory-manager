import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const ManageProduct = () => {
  const id = useParams().id;
  const [productDetails, setProductDetails] = useState({});
  const { register, handleSubmit, reset } = useForm();

  const {
    productName,
    productImage,
    productDescription,
    productPrice,
    productStock,
    productSold,
    productSupplier,
  } = productDetails;

  const updateStock = (productStockModifier) => {
    fetch(`http://localhost:5000/product/${id}`, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productStock, productStockModifier }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProductDetails(data));
  }, [id, productDetails]);

  const handleDelivered = (id) => {
    // console.log(id);

    if (productStock > 0) {
      const productStockModifier = -1;
      updateStock(productStockModifier);
      toast("One Item Delivered");
    } else {
      toast("Product stock is empty");
    }
  };

  const handleRestock = ({ restock }) => {
    // console.log(restock);

    if (parseInt(restock) > 0) {
      console.log("boro");
      const productStockModifier = restock;
      updateStock(productStockModifier);
      toast(`${restock} Item Restocked`);
    } else {
      toast("Please enter a positive number");
    }
    reset();
  };
  return (
    <div className="px-6 xl:px-0">
      <div className="max-w-7xl bg-white mx-auto p-4 sm:p-6 lg:p-8 shadow-sm border-2 mt-12 rounded-xl">
        <div className="grid grid-cols-12 gap-9">
          <div className="bg-slate-100 p-5 max-w-sm rounded-lg col-span-4">
            <img className="px-10 py-4" src={productImage} alt="" />
          </div>
          <div className="col-span-8 md:w-4/5">
            <h2 className="text-4xl mt-4">{productName}</h2>
            <p className="text-gray-500 my-5 dark:text-gray-400  text-lg">
              {productDescription}
            </p>
            <hr />
            <p className="my-3 mb-3 text-slate-400">
              <span className="font-semibold">Supplier:</span> {productSupplier}
            </p>
            <hr />
            <div className="flex mt-5 justify-between items-center ">
              <p className="text-3xl font-bold text-blue-500">
                ${productPrice}
              </p>
              <p className="text-green-500 text-lg font-semibold">
                Sold: {productSold}
              </p>
              <p className="text-gray-600 text-lg font-semibold">
                Current Stock: {productStock}
              </p>
            </div>
            <div className="flex gap-6  justify-between items-center">
              <form action="" onSubmit={handleSubmit(handleRestock)}>
                <input
                  type="number"
                  {...register("restock")}
                  placeholder="Amount"
                  className="rounded-lg border-slate-300"
                />
                <button
                  type="submit"
                  className="inline-flex items-center ml-5 px-7 py-3  mt-7 font-semibold text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Restock
                </button>
              </form>
              <button
                onClick={() => handleDelivered(id)}
                className="inline-flex items-center px-7 py-3  mt-7 font-semibold text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Delivered
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
