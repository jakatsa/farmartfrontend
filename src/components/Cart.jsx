import React from "react";
import { useCart } from "react-use-cart";

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

  if (isEmpty) return <h1>Your cart is empty</h1>;

  return (
    <>
      <div>
        <h5>
          Cart ({totalUniqueItems}) Total items: ({totalItems})
        </h5>
        <table>
          <tbody>
            {items.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img
                      src={item.img}
                      style={{ height: "6rem" }}
                      alt={item.title}
                    />
                  </td>
                  <td>name:{item.title}</td>
                  <td>price:{item.price}</td>
                  <td>Quantity ({item.quantity})</td>
                  <td>
                    <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                    <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <button onClick={() => removeItem(item.id)}>
                      remove item
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        <h2>Total Price: ${cartTotal}</h2>
      </div>
      <div>
        <button onClick={() => emptyCart()}>clear cart</button>
      </div>
    </>
  );
};
