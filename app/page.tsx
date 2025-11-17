"use client";
import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import { ResortsBanner } from "./components/ResortsBanner";
import { useRouter } from "next/navigation";

export default function Home() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetch("http://localhost:5101/api/Resort")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const handleSelect = (slug: string) => {
    router.push(`/resort/${slug}`);
  };

  return (
    <>
      <Hero
        query={query}
        setQuery={setQuery}
        items={items}
        onSelect={handleSelect}
      />
      <ResortsBanner />
      <section className=" px-5 mb-10">
        <h2 className="text-3xl font-bold text-slate-700 mt-4 mb-4">
          POPULAR DESTINATIONS
        </h2>
        <ProductGrid items={items} />
      </section>
    </>
  );
}
