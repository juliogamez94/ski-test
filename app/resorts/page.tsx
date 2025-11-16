"use client";
import { useEffect, useMemo, useState } from "react";
import ResortCard from "../components/ResortCard";
import { dataResorts } from "../data/resorts";
import { Resort } from "../utils/Utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

const page = () => {
  const [items, setItems] = useState<Resort[]>([]);
  const resorts = dataResorts;

  //   useEffect(() => {
  //     setItems(resorts);
  //   });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <header className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold">Resorts</h1>
      </header>

      <div className="grid grid-cols-2 sm:grid-cols-3  gap-4">
        {resorts.map((item) => (
          <ResortCard key={item.id} resort={item} />
        ))}
      </div>
    </div>
  );
};

export default page;
