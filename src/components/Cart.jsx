import React from "react";
import { useCart } from "react-use-cart";
import { NavBar } from "./NavBar";

export const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty)
    return (
      <>
        <NavBar />
        <h1 className="text-2xl font-bold text-center mt-10">
          Your cart is empty
        </h1>
      </>
    );

  return (
    <>
      <NavBar />
      <div className="container mx-auto p-4">
        <h5 className="text-lg font-semibold mb-4">
          Cart ({totalUniqueItems}) Total items: ({totalItems})
        </h5>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
            <tbody>
              {items.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-24 w-24 object-cover"
                    />
                  </td>
                  <td className="p-4 text-sm">Name: {item.title}</td>
                  <td className="p-4 text-sm">Price: ${item.price}</td>
                  <td className="p-4 text-sm">Quantity: {item.quantity}</td>
                  <td className="p-4 space-x-2">
                    <button
                      className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                    <button
                      className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <button
                      className="px-2 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Total Price: ${cartTotal}</h2>
        </div>
        <div className="mt-4">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={() => emptyCart()}
          >
            Clear Cart
          </button>
        </div>
        <div className="mt-4">
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            CheckOut
          </button>
        </div>
      </div>
    </>
  );
};
