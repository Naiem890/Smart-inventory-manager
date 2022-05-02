import { PlusIcon } from "@heroicons/react/solid";
import React from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import addProductImage from "../../../image/add-product.svg";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (newProduct) => {
    console.log(newProduct);

    fetch("http://localhost:5000/products/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        reset();
        toast("Product Added Successfully");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="px-6 xl:px-0">
      <div
        className="max-w-7xl bg-white mx-auto p-4 sm:p-6 lg:p-8 shadow-sm border-2 mt-12
      rounded-xl"
      >
        <div className="grid grid-cols-12 gap-9">
          <div className="max-w-md rounded-lg md:col-span-5">
            <img className="px-10 py-4 " src={addProductImage} alt="" />
          </div>
          <div className="md:col-span-7">
            <h2 className="text-2xl font-semibold">
              Add new product to the inventory
            </h2>
            <div className="md:w-4/5 mt-8">
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  placeholder="Product Name"
                  className="w-full border-slate-300 rounded-md mb-4"
                  {...register("productName", { required: true })}
                />
                <input
                  type="text"
                  placeholder="Image Link"
                  className="w-full border-slate-300 rounded-md mb-4"
                  {...register("productImage", { required: true })}
                />
                <div className="flex justify-between items-center gap-6">
                  <input
                    type="number"
                    placeholder="Price"
                    className="w-full border-slate-300 rounded-md mb-4"
                    {...register("productPrice", { required: true, min: 0 })}
                  />

                  <input
                    type="text"
                    placeholder="Supplier Name"
                    className="w-full border-slate-300 rounded-md mb-4"
                    {...register("productSupplier", { required: true })}
                  />
                </div>
                <div className="flex justify-between items-center gap-6">
                  <input
                    type="number"
                    placeholder="Stock Amount"
                    className="w-full border-slate-300 rounded-md mb-4"
                    {...register("productStock", { required: true, min: 0 })}
                  />
                  <input
                    type="number"
                    placeholder="Sold Amount"
                    className="w-full border-slate-300 rounded-md mb-4"
                    {...register("productSold", { required: true, min: 0 })}
                  />
                </div>
                <textarea
                  type="text"
                  placeholder="Description"
                  className="w-full border-slate-300 rounded-md mb-4"
                  {...register("productDescription", { required: true })}
                />

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center px-7 py-3   font-semibold text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    <PlusIcon className="w-5 h-5 mr-2 -ml-3"></PlusIcon>
                    Add Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
