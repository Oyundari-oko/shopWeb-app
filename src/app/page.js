"use client";
import { useEffect } from "react";
import { useState } from "react";
import Cart from "./compon/Cart";

const Shop = () => {
  const [skipCount, setSkipcount] = useState(1);
  const [shop, setShop] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState([]);
  const limit = 12;

  const fetchData = async () => {
    const jsonData = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${
        (skipCount - 1) * limit
      }`
    );
    const data = await jsonData.json();
    setProducts(data.products);
  };
  useEffect(() => {
    fetchData();
  }, [skipCount]);

  const sum = () => {
    setSkipcount(skipCount + 1);
  };
  const has = () => {
    if (skipCount > 1) {
      return setSkipcount(skipCount - 1);
    }
  };

  // const category = async () => {
  //   const jData = await fetch(
  //     `https://dummyjson.com/products?category=${baraa}`
  //   );
  //   const data = await jData.json();
  //   setShop(data.products);
  // };
  // console.log(baraa);

  // useEffect(() => {
  //   category();
  // }, [shop]);

  // const baraaName = () => {
  //   setShop({ ...products, shop });
  // };

  const getCategories = async () => {
    const jsonData = await fetch(
      `https://dummyjson.com/products/category-list`
    );
    const data = await jsonData.json();
    setCategories(data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      <select onChange={(event) => setSelected(event.target.value)}>
        {categories.map((category, key) => {
          return (
            <option key={key} value={category}>
              {category}
            </option>
          );
        })}
      </select>
      <div className="styles">
        {products.map((item, index) => {
          if (item.category == selected)
            return (
              <Cart
                title={item.title}
                thumbnail={item.thumbnail}
                price={item.price}
                description={item.description}
                id={item.id}
                category={item.category}
                key={index}
              />
            );
        })}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "20px",
        }}
      >
        <button onClick={() => has()}>return</button>
        <div className="ug">{skipCount}</div>
        <button onClick={() => sum()}>next</button>
      </div>
    </div>
  );
};
export default Shop;
