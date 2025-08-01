"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState('')

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products/");
        setProducts(response.data);
      } catch (error :any) {
        console.log("Error fetching products:", error.message);
        setError(`${error.message} please try again later.`)
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  
  const SkeletonCard = () => (
    <div className="animate-pulse border border-gray-200 p-3 rounded-xl">
      <div className="aspect-square w-full bg-gray-200 rounded-md lg:h-80"></div>
      <div className="mt-4 space-y-2">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-3 bg-gray-300 rounded w-1/2"></div>
      </div>
    </div>
  );

  return (
  <div className="bg-white min-h-screen flex flex-col justify-center items-center px-4">
    {loading ? (
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 w-full max-w-7xl mx-auto py-16">
        {Array.from({ length: 8 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    ) : error ? (
      <div className="text-center text-red-600 mt-10">
        <h2 className="text-2xl font-bold mb-4">Failed to load products</h2>
        <p className="mb-4">{error}</p>
        <button
          onClick={() => location.reload()}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Retry
        </button>
      </div>
    ) : (
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 w-full">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Products List
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product: Product) => (
            <div
              className="group relative border border-gray-200 p-3 rounded-xl"
              key={product.id}
            >
              <img
                src={product.image}
                alt={product.title}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a
                      href={`/productView/${product.id}`}
                      className="font-medium text-gray-900 hover:text-gray-700"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      {product.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.category}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
  );
}

export default Products;
