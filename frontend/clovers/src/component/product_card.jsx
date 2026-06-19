import { useState } from "react";

export default function ProductCard({
  badge = "Best Deal",
  image = "/hand-cream.jpg",
  name = "Hand Cream",
  price = 2.99,
  onAddToCart,
}) {
  const [quantity, setQuantity] = useState(1);

  const decrease = () => setQuantity((q) => Math.max(1, q - 1));
  const increase = () => setQuantity((q) => q + 1);

  return (
    <>
      <div className="w-64 rounded-2xl border border-gray-200 p-4 relative bg-white">
        {badge && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-medium px-4 py-1.5 rounded-full z-10">
            {badge}
          </span>
        )}

        <div className="flex items-center justify-center h-44 mt-1">
          <img src={image} alt={name} className="max-h-full object-contain" />
        </div>

        <p className="mt-4 text-gray-900">{name}</p>
        <p className="mt-1 mb-4 text-xl font-medium text-red-500">
          ${price.toFixed(2)}
        </p>

        <div className="flex items-center justify-between border border-gray-200 rounded-lg px-4 py-2.5 mb-3">
          <button
            onClick={decrease}
            aria-label="Decrease quantity"
            className="text-lg text-gray-500 w-6 h-6 flex items-center justify-center"
          >
            −
          </button>
          <span className="text-gray-900">{quantity}</span>
          <button
            onClick={increase}
            aria-label="Increase quantity"
            className="text-lg text-gray-500 w-6 h-6 flex items-center justify-center"
          >
            +
          </button>
        </div>

        <button
          onClick={() => onAddToCart && onAddToCart(quantity)}
          className="w-full bg-black text-white rounded-full py-3.5 text-sm hover:bg-gray-900 transition"
        >
          Add to Cart
        </button>
      </div>
    </>
  );
}
