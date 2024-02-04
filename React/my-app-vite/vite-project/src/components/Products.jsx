// import React from "react";

function Products() {
  let products = ["Laptops", "Headphones", "Mouse", "Keyboard"];
  return (
    <div>
      <ul>
        {products.map(
          (
            product,
            index //if we use curly brackets need to write return
          ) => {
            return (
              <li key={index}>
                {index} {product}{" "}
              </li>
            ); //if we use round brackets no return
          }
        )}
      </ul>
    </div>
  );
}

export default Products;
