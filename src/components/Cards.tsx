import React from "react";
import ProductAddToCart from "./ProductAddToCart";

export default function Cards() {
  return (
    <div style={{ display: "grid",maxWidth: "1100px", gridTemplateColumns:'1fr 1fr 1fr', margin:'0 auto'}}>
        <ProductAddToCart />
        <ProductAddToCart />
        <ProductAddToCart />
        <ProductAddToCart />
        <ProductAddToCart />
        <ProductAddToCart />
    </div>
  );
}
