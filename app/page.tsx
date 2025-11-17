"use client";
import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5101/api/Resort")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <>
      <Hero />
      <section className=" px-5">
        <h2>POPULAR DESTINATIONS</h2>
        <ProductGrid items={items} />
      </section>
    </>
  );
}
