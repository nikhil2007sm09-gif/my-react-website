import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Card from "../Card/Card";

export default function CollectionPage() {
  const categories = ["ALL", "Men", "Women", "KID"];

  const products = [
    {
      id: 1,
      title: "Men Slim Fit Polo T-Shirt with Short Sleeves",
      category: "Men",
      price: 540,
      image:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDQ0NDQ0NDQ0ODQ0NDQ0NDQ8NDQ0NFREWFhURFRMYHSggGBolGxUVITEhJSsrLi4uFx8zODMsNyo5Li4BCgoKDQ0NDw0NDisZFRkrNy0tKysrKysrKysrNystLSsrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAQMAwgMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAAAQIDBAUH/8QALhABAQABAgQGAAUEAwAAAAAAAAECAxESITGBBBNBUWFxBSJCscEGMpHhI1Kh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/AP3EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHDPxMnKfm/YHceLPXyvS8P1Hnyxyy65W/dXB9HLXwnK5Tf233rx62eVy4t9pOkcsMZPTZ1xvIHTDUl+K1u5cLUmwjfElzkZu7PADGdyysstlnTb0evT8TjZtlZjl678o8/Ryyk9RX05d+ivk46dnOWz6tjvhrZz9W/3NzB7x5sfFf9p3j0Y5Szec5UFAAAAAAAABw8VqbSYzrly+oDGvqcU2nTf/AC5THmaM23x7z6rWUUSxNmiglx3SYtQUYnK7LNS+sMvQ3gHmfCW1oBNiYtGyDNiyLsAznOTenlcbb6esSTmmrvMbt1vKfdB7ccpZLOcvOK8nhcuGzD0s5ffq9aAAAAAAA8OfPO16tbLlt7vPtzUZ9ZZ6Xaz4v+9m82c8d5fq7X2WXfGX3m4iKkUVAANk4VUGeFQl36UCKLQRFKBimf8AdPbHn3vKfz/lrBjDnvl727fXSfsIxq/pvS793vwy3krx5x30Mv8A0V3AQAAAc9bLabe4OWeW9ZRYoptyUBzFsRUFBFfP/FfwjS8X5d1bqTy/NmPl58N2zw4cvT2eLX/pXQ1MPLy1PEXHy/Kn/LJljjxYZbzLbffi08bv16vvAPiZ/wBM+Gy34vNu+eWe3Hw/mympLzxkt5auc578sue72fhn4Vo+F4vJmUuc05nc88s7lwYTDG8+U/LJOXtHvJABdiIM7FbZyioYpMdo1jCgysqEFerDLebtOOjlz2dkAAB5tTLeu2rltPtw2BFiLFFEqgmTFdGMoIyqKK0JFAABd0I0AlUAStRL17CMLEJRW5Xoxu8eaOull6A6gIOOpzrnk9Nm7jq4XsI4btxmxYo1fRU35zuoDOTSbAwLkgqwpFBFgsAUIAACpeqs3rO4iVztdKxw8+YN4Npp42u+OGwNAIoADnlpS9OTFx26u5YDyZTnO/8ADUXVw2uN+/4RUKADOUZdKxYKRYmywFIigoAAAKzl1ndTh3sEWRvHS93THGRUUkAAAAAAABy1vTu5umt6d3NYAIqFRakRUWLYgCxKu4KJuoAADWHWd/2Za0+sB3AQAAAAAAAActb07ubprendzWBuhUqotQQFAQIu7KgtpKgosqpFAa0/7oyuHWIPQAigAAAAAAAOWv6d3NvX/T3YWIlTdayoqKgIogCyooCgCiAK1h1jMaw6xB6AEUAAAAAAABx8R+nu5buniOuPdysWIsqUhVCCoCCoAooAAALICN4XnGVw6z7QekBFAAAAAAAAcPE9ce/8OcdPETezuxwrERK1wlxUZg3MTgQYR04E4AZVeBeAGRrgOEE2U4V4QZph1n21wsyc59wHqARQAAAAAAAGcsN9vhPLbAY8s8v5bAY8ue9PLny2Ax5c96eXPlsBjy58nA2AxwQ8ufLYDHBF4I0AzwQ4J7NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/2Q==",
    },
    {
      id: 2,
      title: "Soft Wash Straight Fit Jeans",
      category: "Men",
      price: 199,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKyxoqRQRQKfYIp2qAF0n7707L3T-KmTXqxg&s",
    },
    {
      id: 3,
      title: "Basic Heavy Weight T-Shirt",
      category: "Women",
      price: 199,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaCWlAlOT38nNBvHyLlbhiKjAQPX9NQabPkA&s",
    },
    {
      id: 4,
      title: "Women Oversized Hoodie",
      category: "Women",
      price: 299,
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR2DYfNn_EUXzS50rqa97IZPVaKDvjm5hiKfMFvkKryXHuQfNVzpgGakeiiSHhmBtamUP-M-pNfd-ua7kZhSMJloGiwBUhhEYvOPBqw1qH6&usqp=CAcZ",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("ALL");
  const [sortBy, setSortBy] = useState("none");
  const [priceFilter, setPriceFilter] = useState("all");
  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  const PRODUCTS_PER_PAGE = 3;

  let filtered =
    activeCategory === "ALL"
      ? products
      : products.filter((p) => p.category === activeCategory);

  filtered = filtered.filter((p) => {
    if (priceFilter === "under200") return p.price < 200;
    if (priceFilter === "200to400") return p.price >= 200 && p.price <= 400;
    if (priceFilter === "above400") return p.price > 400;
    return true;
  });

  const sortedProducts = [...filtered].sort((a, b) => {
    if (sortBy === "low") return a.price - b.price;
    if (sortBy === "high") return b.price - a.price;
    return 0;
  });

  const paginatedProducts = sortedProducts.slice(0, page * PRODUCTS_PER_PAGE);

  return (
    <div className="bg-[#f5f5f5] text-gray-900 py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-7xl font-extrabold">XIV</h1>
          <h2
            style={{
              fontFamily: '"Beatrice Deck Trial Extrabold", sans-serif',
            }}
            className="text-4xl md:text-7xl font-extrabold mt-2"
          >
            COLLECTIONS
          </h2>
          <p
            style={{
              fontFamily: '"Beatrice Deck Trial Extrabold", sans-serif',
            }}
            className="text-[72px] md:text-[90px] font-extrabold mt-4"
          >
            23-24
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 border-b border-gray-300 pb-4 gap-4">
          <div className="flex gap-6 text-sm font-semibold text-neutral-400">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setPage(1);
                }}
                className={`${
                  cat === activeCategory
                    ? "text-black underline"
                    : "hover:text-neutral-700"
                }`}
              >
                {cat === "ALL" ? "(ALL)" : cat.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="flex gap-4">
            <select
              value={priceFilter}
              onChange={(e) => {
                setPriceFilter(e.target.value);
                setPage(1);
              }}
              className="px-2 py-1 text-#000000"
            >
              <option value="all">Filters(+)</option>
              <option value="under200">UNDER ₹200</option>
              <option value="200to400">₹200 – ₹400</option>
              <option value="above400">ABOVE ₹400</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value);
                setPage(1);
              }}
              className=" px-2 py-1 text-#000000"
            >
              <option value="none">Sorts(-)</option>
              <option value="low">LOW → HIGH</option>
              <option value="high">HIGH → LOW</option>
            </select>
          </div>
        </div>

        <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 px-2">
          {paginatedProducts.map((item) => (
            <Card
              key={item.id}
              item={{
                id: item.id,
                name: item.title,
                category: item.category,
                price: `₹${item.price}`,
                images: [
                  item.image ||
                    "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600",
                ],
              }}
              onSelect={(product) => {
                navigate(`/product/${product.id}`);
              }}
            />
          ))}
        </div>
        <div className="flex justify-center mt-8 md:mt-14">
          <Link
            to="/Products"
            className="text-xs md:text-sm font-black tracking-[0.3em] text-gray-400 flex flex-col items-center gap-0"
          >
            <span>More</span>
            <span className="text-black text-3xl font-bold -mt-4">⌄</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
