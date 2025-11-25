"use client";
import { useEffect, useMemo, useState } from "react";
import ResortCard from "../components/ResortCard";
import { Resort } from "../utils/Utils";
import Image from "next/image";

const page = () => {
  const [items, setItems] = useState<Resort[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [sortOption, setSortOption] = useState<string>("");
  const [favorites, setFavorites] = useState<string>("");

  useEffect(() => {
    const stored = localStorage.getItem("favorites");

    setFavorites(stored || "");
  }, []);

  useEffect(() => {
    if (favorites !== null) {
      localStorage.setItem("favorites", favorites);
    }
  }, [favorites]);

  const toggleFavorite = (slug: string) => {
    setFavorites((prev) => {
      const favArray = prev ? prev.split(",").filter((f) => f.length > 0) : [];
      if (favArray.includes(slug)) {
        return favArray.filter((f) => f !== slug).join(",");
      } else {
        return [...favArray, slug].join(",");
      }
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:5101/api/resort");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setItems(result);
      } catch (error) {
        console.error("Error fetching resorts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const sortedItems = useMemo(() => {
    let sorted = [...items];

    switch (sortOption) {
      case "snowfall-asc":
        sorted.sort((a, b) => a.stats.avgSnowfall - b.stats.avgSnowfall);
        break;
      case "snowfall-desc":
        sorted.sort((a, b) => b.stats.avgSnowfall - a.stats.avgSnowfall);
        break;
      case "ticket-asc":
        sorted.sort((a, b) => a.stats.avgTicketPrice - b.stats.avgTicketPrice);
        break;
      case "ticket-desc":
        sorted.sort((a, b) => b.stats.avgTicketPrice - a.stats.avgTicketPrice);
        break;

      default:
        break;
    }
    return sorted;
  }, [items, sortOption]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <section className="relative w-full bg-white overflow-hidden">
        <div className="maw-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-6 py-20">
          <div className="z-10">
            <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 leading-tight">
              BEST SKI RESORT <br /> IN THE WORLD
            </h1>
          </div>
          <div
            className="relative w-full h-80 md:h-[500px] lg:h-[600px]"
            style={{
              clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0 100%)",
              overflow: "hidden",
            }}
          >
            <Image
              src={
                "https://images.prismic.io/ski-com/Zur127VsGrYSvjrn_ChamonixDreamJob-Rhulen-04002.jpg?auto=format%2Ccompress&fit=max&w=3840&q=100"
              }
              alt="Ski Resort"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <div className="flex gap-4 mt-6 mb-4 items-center ">
        <label className="font-semibold ">Sort by: </label>
        <select
          className="border px-3 py-2 rounded cursor-pointer"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="none">None</option>
          <option value="snowfall-asc">Snowfall low to high</option>
          <option value="snowfall-desc">Snowfall high to low</option>
          <option value="ticket-asc">Ticket price low to high</option>
          <option value="ticket-desc">Ticket price high to low</option>
        </select>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3  gap-4">
        {sortedItems.map((item) => (
          <ResortCard
            key={item.id}
            resort={item}
            isFavorite={favorites.split(",").includes(item.slug)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
