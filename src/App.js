import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import data from "./json/data";
import ProductCard from "./components/products";
import Cart from "./components/cart";
import { useEffect, useState } from "react";
import Header from "./components/header";

function App() {
  const { products } = data;
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    total();
  });

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price * cart[i].quantity;
    }
    setCartTotal(totalVal);
  };

  function getAvailabilityByItemName(name, currentAvailability) {
    let clonedCart = [...cart];

    const productAlreadyExists = clonedCart.findIndex(
      ({ name: currentProductName }) => currentProductName === name
    );

    if (productAlreadyExists !== -1) {
      const product = clonedCart[productAlreadyExists];
      return currentAvailability - (product.quantity || 0);
    }

    return currentAvailability;
  }

  const filteredProducts = products
    .filter((product) => {
      if (
        product.name.toLowerCase().includes(search) ||
        product.id.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search)
      ) {
        return product;
      }
    })
    .map(({ name, available, ...rest }) => ({
      ...rest,
      name,
      available: getAvailabilityByItemName(name, available),
    }));
  console.log(filteredProducts);

  const addProduct = (product) => {
    let clonedCart = [...cart];

    const productAlreadyExists = clonedCart.findIndex(
      ({ name }) => name === product.name
    );

    if (productAlreadyExists === -1) {
      clonedCart = [...clonedCart, { ...product, quantity: 1 }];
    } else {
      clonedCart[productAlreadyExists].quantity =
        clonedCart[productAlreadyExists].quantity + 1;
    }

    setCart(clonedCart);
  };

  const removeProduct = (product) => {
    let clonedCart = [...cart];

    const productAlreadyExists = clonedCart.findIndex(
      ({ name }) => name === product.name
    );

    if (productAlreadyExists !== -1) {
      const productToBeRemoved = clonedCart[productAlreadyExists];

      console.log(productToBeRemoved);
      if (productToBeRemoved.quantity === 1) {
        clonedCart = clonedCart.filter(({ name }) => name !== product.name);
      } else {
        clonedCart[productAlreadyExists].quantity =
          clonedCart[productAlreadyExists].quantity - 1;
      }
    }

    setCart(clonedCart);
  };

  const orderPlace = (p) => {
    let order = [];
    setCart(order);
    alert("your order placed successfully");
  };

  return (
    <div className="main">
      <Header setSearch={setSearch} products={filteredProducts} />
      <div className="grid-container">
        <div className="left">
          <h1>Products</h1>
          <ProductCard products={filteredProducts} addProduct={addProduct} />
        </div>
        <div className="right">
          <h1>Cart</h1>
          <Cart
            products={filteredProducts}
            cart={cart}
            setCart={setCart}
            removeProduct={removeProduct}
            total={cartTotal}
            orderPlace={orderPlace}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
