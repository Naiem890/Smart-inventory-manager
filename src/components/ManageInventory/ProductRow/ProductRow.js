import React from "react";
import { TrashIcon } from "@heroicons/react/solid";
const ProductRow = ({ props }) => {
  const { product, handleDelete } = props;

  const {
    _id: id,
    productName,
    productPrice,
    productStock,
    productSold,
  } = product;

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-2 font-medium text-gray-900 dark:text-white "
      >
        {productName}
      </th>
      <td className="px-6 text-blue-500 py-2">{productStock}</td>
      <td className="px-6 text-green-400 py-2">{productSold}</td>
      <td className="px-6 py-2">${productPrice}</td>
      <td className="px-6 py-2 text-right">
        <div
          onClick={() => handleDelete(id)}
          className="rounded-full bg-red-200 p-2 cursor-pointer h-8 w-8"
        >
          <TrashIcon className=" text-red-500"></TrashIcon>
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;
