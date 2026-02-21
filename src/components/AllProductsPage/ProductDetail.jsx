import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Heart, ChevronLeft, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const PRODUCTS = [
    {
      id: 1,
      name: "Premium Cotton Tee",
      category: "Cotton Shirt",
      filterCategory: "SHIRTS",
      price: "1299",
      images: [
        "https://media.istockphoto.com/id/483960103/photo/blank-black-t-shirt-front-with-clipping-path.jpg?s=612x612&w=0&k=20&c=d8qlXILMYhugXGw6zX7Jer2SLPrLPORfsDsfRDWc-50=",
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDQ0NDQ0NDQ0ODQ0NDQ0NDQ8NDQ0NFREWFhURFRMYHSggGBolGxUVITEhJSsrLi4uFx8zODMsNyo5Li4BCgoKDQ0NDw0NDisZFRkrNy0tKysrKysrKysrNystLSsrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAQMAwgMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAAAQIDBAUH/8QALhABAQABAgQGAAUEAwAAAAAAAAECAxESITGBBBNBUWFxBSJCscEGMpHhI1Kh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/AP3EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHDPxMnKfm/YHceLPXyvS8P1Hnyxyy65W/dXB9HLXwnK5Tf233rx62eVy4t9pOkcsMZPTZ1xvIHTDUl+K1u5cLUmwjfElzkZu7PADGdyysstlnTb0evT8TjZtlZjl678o8/Ryyk9RX05d+ivk46dnOWz6tjvhrZz9W/3NzB7x5sfFf9p3j0Y5Szec5UFAAAAAAAABw8VqbSYzrly+oDGvqcU2nTf/AC5THmaM23x7z6rWUUSxNmiglx3SYtQUYnK7LNS+sMvQ3gHmfCW1oBNiYtGyDNiyLsAznOTenlcbb6esSTmmrvMbt1vKfdB7ccpZLOcvOK8nhcuGzD0s5ffq9aAAAAAAA8OfPO16tbLlt7vPtzUZ9ZZ6Xaz4v+9m82c8d5fq7X2WXfGX3m4iKkUVAANk4VUGeFQl36UCKLQRFKBimf8AdPbHn3vKfz/lrBjDnvl727fXSfsIxq/pvS793vwy3krx5x30Mv8A0V3AQAAAc9bLabe4OWeW9ZRYoptyUBzFsRUFBFfP/FfwjS8X5d1bqTy/NmPl58N2zw4cvT2eLX/pXQ1MPLy1PEXHy/Kn/LJljjxYZbzLbffi08bv16vvAPiZ/wBM+Gy34vNu+eWe3Hw/mympLzxkt5auc578sue72fhn4Vo+F4vJmUuc05nc88s7lwYTDG8+U/LJOXtHvJABdiIM7FbZyioYpMdo1jCgysqEFerDLebtOOjlz2dkAAB5tTLeu2rltPtw2BFiLFFEqgmTFdGMoIyqKK0JFAABd0I0AlUAStRL17CMLEJRW5Xoxu8eaOull6A6gIOOpzrnk9Nm7jq4XsI4btxmxYo1fRU35zuoDOTSbAwLkgqwpFBFgsAUIAACpeqs3rO4iVztdKxw8+YN4Npp42u+OGwNAIoADnlpS9OTFx26u5YDyZTnO/8ADUXVw2uN+/4RUKADOUZdKxYKRYmywFIigoAAAKzl1ndTh3sEWRvHS93THGRUUkAAAAAAABy1vTu5umt6d3NYAIqFRakRUWLYgCxKu4KJuoAADWHWd/2Za0+sB3AQAAAAAAAActb07ubprendzWBuhUqotQQFAQIu7KgtpKgosqpFAa0/7oyuHWIPQAigAAAAAAAOWv6d3NvX/T3YWIlTdayoqKgIogCyooCgCiAK1h1jMaw6xB6AEUAAAAAAABx8R+nu5buniOuPdysWIsqUhVCCoCCoAooAAALICN4XnGVw6z7QekBFAAAAAAAAcPE9ce/8OcdPETezuxwrERK1wlxUZg3MTgQYR04E4AZVeBeAGRrgOEE2U4V4QZph1n21wsyc59wHqARQAAAAAAAGcsN9vhPLbAY8s8v5bAY8ue9PLny2Ax5c96eXPlsBjy58nA2AxwQ8ufLYDHBF4I0AzwQ4J7NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/2Q==",
      ],
      description: "Premium cotton abstract print shirt.",
      colors: ["#000000", "#6B7280"],
      sizes: ["S", "M", "L", "XL"],
      inStock: true,
    },

    {
      id: 2,
      name: "Oversized Street Tee",
      category: "Formal Wear",
      filterCategory: "SHIRTS",
      price: "1,199",
      images: [
        "data:image/jpeg;base64,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",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKyxoqRQRQKfYIp2qAF0n7707L3T-KmTXqxg&s",
      ],
      description: "Classic white formal shirt for daily office wear.",
      colors: ["#FFFFFF"],
      sizes: ["M", "L", "XL"],
      inStock: true,
    },

    {
      id: 3,
      name: "Linen Summer Shirt",
      category: "Denim",
      filterCategory: "SHIRTS",
      price: "1,899",
      images: [
        "data:image/jpeg;base64,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",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaCWlAlOT38nNBvHyLlbhiKjAQPX9NQabPkA&s",
      ],
      description: "Stylish denim shirt with modern fit.",
      colors: ["#1E3A8A"],
      sizes: ["S", "M", "L"],
      inStock: true,
    },

    {
      id: 4,
      name: "Classic Polo Shirt",
      category: "Party Wear",
      filterCategory: "SHIRTS",
      price: "1,499",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQEBR3iv0R_CxBnWVqt1NjxlHVooAG9-bhbw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQEBR3iv0R_CxBnWVqt1NjxlHVooAG9-bhbw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQEBR3iv0R_CxBnWVqt1NjxlHVooAG9-bhbw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQEBR3iv0R_CxBnWVqt1NjxlHVooAG9-bhbw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQEBR3iv0R_CxBnWVqt1NjxlHVooAG9-bhbw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQEBR3iv0R_CxBnWVqt1NjxlHVooAG9-bhbw&s",
      ],
      description: "Slim fit black shirt for parties and events.",
      colors: ["#000000"],
      sizes: ["M", "L", "XL"],
      inStock: true,
    },

    {
      id: 5,
      name: "Vintage Denim Jacket",
      category: "Casual",
      filterCategory: "SHIRTS",
      price: "2,999",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS29_N_ZB8STDmkacRby8PGLG0bZvTZsmG0w&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS29_N_ZB8STDmkacRby8PGLG0bZvTZsmG0w&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS29_N_ZB8STDmkacRby8PGLG0bZvTZsmG0w&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS29_N_ZB8STDmkacRby8PGLG0bZvTZsmG0w&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS29_N_ZB8STDmkacRby8PGLG0bZvTZsmG0w&s",
      ],
      description: "Everyday casual checked cotton shirt.",
      colors: ["#374151", "#9CA3AF"],
      sizes: ["S", "M", "L", "XL"],
      inStock: true,
    },

    {
      id: 6,
      name: "Leather Biker Jacket",
      category: "Winter Wear",
      filterCategory: "HOODIES",
      price: "4,599",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpH8kTBxOF9-HYmfpv4WrUVDbMZpBt4YpQKg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpH8kTBxOF9-HYmfpv4WrUVDbMZpBt4YpQKg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpH8kTBxOF9-HYmfpv4WrUVDbMZpBt4YpQKg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpH8kTBxOF9-HYmfpv4WrUVDbMZpBt4YpQKg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpH8kTBxOF9-HYmfpv4WrUVDbMZpBt4YpQKg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpH8kTBxOF9-HYmfpv4WrUVDbMZpBt4YpQKg&s",
      ],
      description: "Warm oversized hoodie for winters.",
      colors: ["#111827", "#6B7280"],
      sizes: ["M", "L", "XL", "2XL"],
      inStock: true,
    },

    {
      id: 7,
      name: "Urban Windbreaker",
      category: "Winter Wear",
      filterCategory: "HOODIES",
      price: "2,299",
      images: [
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600",
      ],
      description: "Minimal grey hoodie with premium fabric.",
      colors: ["#9CA3AF"],
      sizes: ["S", "M", "L"],
      inStock: true,
    },

    {
      id: 8,
      name: "Premium Wool Bombe",
      category: "Street Style",
      filterCategory: "HOODIES",
      price: "3,499",
      images: [
        "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=600",
      ],
      description: "Street style hoodie with relaxed fit.",
      colors: ["#000000", "#DC2626"],
      sizes: ["M", "L", "XL"],
      inStock: true,
    },

    {
      id: 9,
      name: "Essential Grey Hoodie",
      category: "Men T-Shirt",
      filterCategory: "TSHIRTS",
      price: "1,999",
      images: [
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600",
      ],
      description: "Everyday basic black t-shirt.",
      colors: ["#000000"],
      sizes: ["S", "M", "L", "XL"],
      inStock: true,
    },

    {
      id: 10,
      name: "Knitted Winter Sweater",
      category: "Men T-Shirt",
      filterCategory: "TSHIRTS",
      price: "2,199",
      images: [
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600",
      ],
      description: "Oversized white t-shirt street style.",
      colors: ["#FFFFFF"],
      sizes: ["M", "L", "XL"],
      inStock: true,
    },

    {
      id: 11,
      name: "Premium Cotton Tee",
      category: "Women T-Shirt",
      filterCategory: "WOMEN",
      price: "1299",
      images: [
        "https://media.istockphoto.com/id/483960103/photo/blank-black-t-shirt-front-with-clipping-path.jpg",
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600",
      ],
      description: "Modern longline premium cotton t-shirt.",
      colors: ["#9CA3AF", "#1F2937"],
      sizes: ["S", "M", "L"],
      inStock: true,
    },

    {
      id: 12,
      name: "Oversized Street Tee",
      category: "Women T-Shirt",
      filterCategory: "WOMEN",
      price: "1199",
      images: [
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990",
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990",
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990",
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990",
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990",
      ],

      description: "Relaxed oversized street wear t-shirt.",
      colors: ["#000000", "#FFFFFF"],
      sizes: ["M", "L", "XL"],
      inStock: true,
    },

    {
      id: 13,
      name: "Linen Summer Shirt",
      category: "Women Shirt",
      filterCategory: "WOMEN",
      price: "1899",
      images: [
        "https://images.unsplash.com/photo-1593032465171-bc36ed4f6e5c",
        "https://images.unsplash.com/photo-1593032465171-bc36ed4f6e5c",
        "https://images.unsplash.com/photo-1593032465171-bc36ed4f6e5c",
        "https://images.unsplash.com/photo-1593032465171-bc36ed4f6e5c",
        "https://images.unsplash.com/photo-1593032465171-bc36ed4f6e5c",
      ],
      description: "Breathable linen shirt perfect for summers.",
      colors: ["#F5F5DC", "#1F2937"],
      sizes: ["S", "M", "L", "XL"],
      inStock: true,
    },

    {
      id: 14,
      title: "Men Wear",
      name: "Premium Cotton Tee",
      price: 1299,
      images: [
        "https://media.istockphoto.com/id/483960103/photo/blank-black-t-shirt-front-with-clipping-path.jpg?s=612x612&w=0&k=20&c=d8qlXILMYhugXGw6zX7Jer2SLPrLPORfsDsfRDWc-50=",
        "https://media.istockphoto.com/id/483960103/photo/blank-black-t-shirt-front-with-clipping-path.jpg?s=612x612&w=0&k=20&c=d8qlXILMYhugXGw6zX7Jer2SLPrLPORfsDsfRDWc-50=",
        "https://media.istockphoto.com/id/483960103/photo/blank-black-t-shirt-front-with-clipping-path.jpg?s=612x612&w=0&k=20&c=d8qlXILMYhugXGw6zX7Jer2SLPrLPORfsDsfRDWc-50=",
        "https://media.istockphoto.com/id/483960103/photo/blank-black-t-shirt-front-with-clipping-path.jpg?s=612x612&w=0&k=20&c=d8qlXILMYhugXGw6zX7Jer2SLPrLPORfsDsfRDWc-50=",
        "https://media.istockphoto.com/id/483960103/photo/blank-black-t-shirt-front-with-clipping-path.jpg?s=612x612&w=0&k=20&c=d8qlXILMYhugXGw6zX7Jer2SLPrLPORfsDsfRDWc-50=",
        "https://media.istockphoto.com/id/483960103/photo/blank-black-t-shirt-front-with-clipping-path.jpg?s=612x612&w=0&k=20&c=d8qlXILMYhugXGw6zX7Jer2SLPrLPORfsDsfRDWc-50=",
      ],
      category: "T-Shirt",
      description: "Premium quality cotton t-shirt for everyday comfort.",
      colors: ["#000000", "#FFFFFF"],
      sizes: ["S", "M", "L", "XL"],
      inStock: true,
    },

    {
      id: 15,
      title: "Men Wear",
      name: "Oversized Street Tee",
      price: 1199,
      images: ["data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..."],
      category: "T-Shirt",
      description: "Street style oversized t-shirt with relaxed fit.",
      colors: ["#111827", "#6B7280"],
      sizes: ["M", "L", "XL"],
      inStock: true,
    },

    {
      id: 16,
      title: "Men Wear",
      name: "Linen Summer Shirt",
      price: 1899,
      images: ["data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..."],
      category: "Shirt",
      description: "Breathable linen shirt perfect for summer days.",
      colors: ["#E5E7EB", "#F9FAFB"],
      sizes: ["S", "M", "L", "XL"],
      inStock: true,
    },

    {
      id: 17,
      title: "Men Wear",
      name: "Classic Polo Shirt",
      price: 1499,
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQEBR3iv0R_CxBnWVqt1NjxlHVooAG9-bhbw",
      ],
      category: "Polo",
      description: "Classic polo shirt with soft fabric.",
      colors: ["#1F2937", "#FFFFFF"],
      sizes: ["S", "M", "L"],
      inStock: true,
    },

    {
      id: 18,
      title: "Outerwear",
      name: "Vintage Denim Jacket",
      price: 2999,
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS29_N_ZB8STDmkacRby8PGLG0bZvTZsmG0w",
      ],
      category: "Jacket",
      description: "Vintage style denim jacket with rugged look.",
      colors: ["#1E3A8A"],
      sizes: ["M", "L", "XL"],
      inStock: true,
    },

    {
      id: 19,
      title: "Outerwear",
      name: "Leather Biker Jacket",
      price: 4599,
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpH8kTBxOF9-HYmfpv4WrUVDbMZpBt4YpQKg",
      ],
      category: "Jacket",
      description: "Premium leather biker jacket for bold style.",
      colors: ["#000000"],
      sizes: ["M", "L", "XL"],
      inStock: true,
    },

    {
      id: 20,
      title: "Outerwear",
      name: "Urban Windbreaker",
      price: 2299,
      images: ["https://images.unsplash.com/photo-1591047139829-d91aecb6caea"],
      category: "Jacket",
      description: "Lightweight windbreaker for urban lifestyle.",
      colors: ["#111827", "#9CA3AF"],
      sizes: ["S", "M", "L"],
      inStock: true,
    },

    {
      id: 21,
      title: "Outerwear",
      name: "Premium Wool Bomber",
      price: 3499,
      images: ["https://images.unsplash.com/photo-1544022613-e87ca75a784a"],
      category: "Bomber Jacket",
      description: "Stay warm in style with this Premium Wool Bomber Jacket.",

      colors: ["#374151"],
      sizes: ["M", "L", "XL"],
      inStock: true,
    },

    {
      id: 22,
      title: "Men Wear",
      name: "Essential Grey Hoodie",
      price: 1999,
      images: ["https://images.unsplash.com/photo-1556821840-3a63f95609a7"],
      category: "Hoodie",
      description: "Everyday essential hoodie with soft fabric.",
      colors: ["#9CA3AF"],
      sizes: ["M", "L", "XL"],
      inStock: true,
    },

    {
      id: 23,
      title: "Men Wear",
      name: "Knitted Winter Sweater",
      price: 2199,
      images: ["https://images.unsplash.com/photo-1620799140408-edc6dcb6d633"],
      category: "Sweater",
      description: "Warm knitted sweater for winter season.",
      colors: ["#4B5563"],
      sizes: ["M", "L", "XL"],
      inStock: true,
    },
     {
    id: 24,
    name: "Minimal Black Tee",
    category: "Men T-Shirt",
    filterCategory: "TSHIRTS",
    price: "999",
    images: [ "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",

      
    ],
    colors: ["#000000"],
    sizes: ["S","M","L","XL"],
    inStock: true,
  },
  {
    id: 25,
    name: "Classic White Tee",
    category: "Men T-Shirt",
    filterCategory: "TSHIRTS",
    price: "899",
    images: [ "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",],
    colors: ["#FFFFFF"],
    sizes: ["M","L","XL"],
    inStock: true,
  },
  {
    id: 26,
    name: "Oversized Street Tee",
    category: "Men T-Shirt",
    filterCategory: "TSHIRTS",
    price: "1199",
    images: [ "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",],
    colors: ["#111827","#6B7280"],
    sizes: ["M","L","XL"],
    inStock: true,
  },
  {
    id: 27,
    name: "Grey Essential Tee",
    category: "Men T-Shirt",
    filterCategory: "TSHIRTS",
    price: "1099",
    images: [ "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",],
    colors: ["#9CA3AF"],
    sizes: ["S","M","L"],
    inStock: true,
  },
  {
    id: 28,
    name: "Linen Summer Shirt",
    category: "Casual Shirt",
    filterCategory: "SHIRTS",
    price: "1799",
    images: [ "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",],
    colors: ["#F5F5DC","#1F2937"],
    sizes: ["S","M","L","XL"],
    inStock: true,
  },
  {
    id: 29,
    name: "Checked Casual Shirt",
    category: "Casual",
    filterCategory: "SHIRTS",
    price: "1499",
    images: [ "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",],
    colors: ["#374151","#9CA3AF"],
    sizes: ["M","L","XL"],
    inStock: true,
  },
  {
    id: 30,
    name: "Denim Blue Shirt",
    category: "Denim",
    filterCategory: "SHIRTS",
    price: "1899",
    images: [ "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",],
    colors: ["#1E40AF"],
    sizes: ["M","L","XL"],
    inStock: true,
  },
  {
    id: 31,
    name: "Formal Office Shirt",
    category: "Formal Wear",
    filterCategory: "SHIRTS",
    price: "1999",
    images: [ "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",],
    colors: ["#FFFFFF"],
    sizes: ["M","L","XL"],
    inStock: true,
  },
  {
    id: 32,
    name: "Classic Polo Shirt",
    category: "Polo",
    filterCategory: "SHIRTS",
    price: "1399",
    images: [ "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",],
    colors: ["#1F2937","#FFFFFF"],
    sizes: ["S","M","L"],
    inStock: true,
  },
  {
    id: 33,
    name: "Black Party Shirt",
    category: "Party Wear",
    filterCategory: "SHIRTS",
    price: "1599",
    images: [ "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",],
    colors: ["#000000"],
    sizes: ["M","L","XL"],
    inStock: true,
  },

 
  {
    id: 34,
    name: "Essential Grey Hoodie",
    category: "Winter Wear",
    filterCategory: "HOODIES",
    price: "2199",
    images: [ "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",],
    colors: ["#6B7280"],
    sizes: ["M","L","XL"],
    inStock: true,
  },
  {
    id: 35,
    name: "Black Zip Hoodie",
    category: "Winter Wear",
    filterCategory: "HOODIES",
    price: "2499",
    images: [ "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",],
    colors: ["#000000"],
    sizes: ["M","L","XL","2XL"],
    inStock: true,
  },
  {
    id: 36,
    name: "Urban Windbreaker",
    category: "Winter Wear",
    filterCategory: "HOODIES",
    price: "2299",
    images: [ "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",],
    colors: ["#9CA3AF"],
    sizes: ["S","M","L"],
    inStock: true,
  },
  {
    id: 37,
    name: "Bomber Jacket",
    category: "Street Style",
    filterCategory: "HOODIES",
    price: "3499",
    images: [ "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",],
    colors: ["#111827"],
    sizes: ["M","L","XL"],
    inStock: true,
  },
  {
    id: 38,
    name: "Leather Biker Jacket",
    category: "Winter Wear",
    filterCategory: "HOODIES",
    price: "4599",
    images: [ "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",],
    colors: ["#000000"],
    sizes: ["M","L","XL"],
    inStock: true,
  },


  {
    id: 39,
    name: "Women Oversized Tee",
    category: "Women T-Shirt",
    filterCategory: "WOMEN",
    price: "1199",
    images: [ "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",],
    colors: ["#000000","#FFFFFF"],
    sizes: ["M","L","XL"],
    inStock: true,
  },
  {
    id: 40,
    name: "Women Cotton Tee",
    category: "Women T-Shirt",
    filterCategory: "WOMEN",
    price: "999",
    images: [ "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",],
    colors: ["#9CA3AF","#1F2937"],
    sizes: ["S","M","L"],
    inStock: true,
  },
  {
    id: 41,
    name: "Women Linen Shirt",
    category: "Women Shirt",
    filterCategory: "WOMEN",
    price: "1899",
    images: [ "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",],
    colors: ["#F5F5DC"],
    sizes: ["S","M","L","XL"],
    inStock: true,
  },



  ...Array.from({ length: 32 }, (_, i) => ({
    id: 19 + i,
    name: `Fashion Product ${19 + i}`,
    category: "Men Wear",
    filterCategory: i % 2 === 0 ? "TSHIRTS" : "SHIRTS",
    price: `${999 + i * 50}`,
    images: [ "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600",],
    colors: ["#000000","#FFFFFF"],
    sizes: ["S","M","L","XL"],
    inStock: true,
  })),
  ];

  const product = PRODUCTS.find((p) => p.id === Number(id));
  if (!product) return <p className="text-center py-20">Product not found</p>;

  const [activeImage, setActiveImage] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setIsWishlisted(wishlist.includes(product.id));
  }, [product.id]);

  const toggleWishlist = () => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (wishlist.includes(product.id)) {
      wishlist = wishlist.filter((pid) => pid !== product.id);
      setIsWishlisted(false);
    } else {
      wishlist.push(product.id);
      setIsWishlisted(true);
    }
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  };

  const handleCopyLink = async () => {
    const productUrl = `${window.location.origin}/product/${id}`;
    try {
      await navigator.clipboard.writeText(productUrl);
      alert("Product link copied!");
    } catch (err) {
      console.error("Failed to copy link", err);
    }
  };

  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-700 hover:text-black mb-6 text-sm sm:text-base font-medium"
        >
          <ChevronLeft size={20} className="mr-1" /> BACK
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="relative flex flex-col lg:flex-row-reverse gap-4 lg:gap-6">
            <div
              className="relative bg-white rounded-lg overflow-hidden shadow-sm flex-1 aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto order-1 lg:order-2"
              onMouseEnter={() => setShowMagnifier(true)}
              onMouseLeave={() => setShowMagnifier(false)}
              onMouseMove={(e) => {
                if (window.innerWidth < 1024) return;
                const rect = e.currentTarget.getBoundingClientRect();
                setPos({
                  x: e.clientX - rect.left,
                  y: e.clientY - rect.top,
                });
              }}
            >
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-contain select-none pointer-events-none"
                draggable={false}
              />

              {showMagnifier && window.innerWidth >= 1024 && (
                <div
                  className="absolute pointer-events-none rounded-full border-2 border-gray-400 shadow-xl z-10 hidden lg:block"
                  style={{
                    width: 180,
                    height: 180,
                    left: pos.x - 90,
                    top: pos.y - 90,
                    backgroundImage: `url(${activeImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "1800px 1800px",
                    backgroundPosition: `-${pos.x * 3}px -${pos.y * 3}px`,
                  }}
                />
              )}
            </div>

            <div className="flex lg:flex-col gap-3 overflow-x-auto pb-2 lg:pb-0 lg:overflow-visible order-2 lg:order-1 lg:w-24 lg:flex-shrink-0">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(img)}
                  className={`flex-shrink-0 w-20 h-24 sm:w-24 sm:h-28 lg:w-full lg:h-28 rounded-md overflow-hidden border-2 transition-all ${
                    activeImage === img
                      ? "border-black shadow-md"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 lg:p-8 relative">
            <button
              onClick={toggleWishlist}
              className="absolute top-5 right-5 z-10 p-2 rounded-full hover:bg-gray-100 transition"
              title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
            >
              {isWishlisted ? (
                <Heart size={28} fill="#ef4444" stroke="#ef4444" />
              ) : (
                <Heart size={28} className="text-gray-400 hover:text-red-500" />
              )}
            </button>

            <div className="space-y-5 lg:space-y-6">
              <div>
                <h1 className="text-xl sm:text-2xl lg:text-[22px] font-bold uppercase tracking-wide">
                  {product.name}
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold mt-2">
                  ₹{product.price}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  MRP incl. of all taxes
                </p>
              </div>

              <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                {product.description}
              </p>

              <div>
                <p className="text-sm font-medium mb-2">Color</p>
                <div className="flex gap-3">
                  {product.colors.map((c, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full border border-gray-300 shadow-sm"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-medium mb-2">Size</p>
                <div className="grid grid-cols-5 sm:grid-cols-6 gap-2.5">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`py-2.5 text-sm font-medium border rounded-md transition-all ${
                        selectedSize === s
                          ? "border-black bg-black text-white"
                          : "border-gray-300 hover:border-gray-500"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <p className="text-xs text-gray-500 tracking-wide">
                FIND YOUR SIZE | MEASUREMENT GUIDE
              </p>

              <div className="flex flex-col gap-4 pt-4">
                <button
                  onClick={handleCopyLink}
                  className="flex items-center justify-center gap-2.5 border border-gray-300 py-4 text-sm font-semibold tracking-wider rounded-lg hover:bg-gray-50 transition uppercase"
                >
                  <Share2 size={18} /> Copy Link
                </button>

              <Link 
              to="/checkout"
                className="block text-center bg-gray-800 text-white py-4.5 text-sm font-bold tracking-widest rounded-lg hover:bg-gray-900 transition uppercase"
              >Add to Bag</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
