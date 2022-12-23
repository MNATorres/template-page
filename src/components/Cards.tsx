import React from "react";
import ProductAddToCart from "./ProductAddToCart";

export default function Cards() {
  return (
    <div>
      <div style={{ display: "flex", maxWidth: "1100px", margin: "0 auto" }}>
        <ProductAddToCart />
        <ProductAddToCart />
        <ProductAddToCart />
      </div>
      <div style={{ display: "flex", maxWidth: "1100px", margin: "0 auto" }}>
        <ProductAddToCart />
        <ProductAddToCart />
        <ProductAddToCart />
      </div>
    </div>
  );
}
