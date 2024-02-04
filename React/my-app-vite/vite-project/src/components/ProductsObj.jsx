// import React from 'react'

function ProductsObj() {
  let productsObjects = [
    { name: "Laptop", price: 35000, Brand: "HP" },
    { name: "Laptop", price: 35000, Brand: "HP" },
    { name: "Laptop", price: 35000, Brand: "HP" },
    { name: "Laptop", price: 35000, Brand: "HP" },
  ];
  return (
    <div>
      <ul>
        {productsObjects.map((product, index) => {
          return (
            <li key={index}>
              Name: {product.name} Price:{product.price} Brand:{product.Brand}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductsObj;
