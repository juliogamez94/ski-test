"use client";
import { ProductCard } from "./ProductCard";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ProductGrid = ({ items }: { items: any[] }) => {
  return (
    <div className="w-full">
      <Swiper
        modules={[FreeMode]}
        freeMode={true}
        grabCursor={true}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={16}
        slidesPerView="auto"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} style={{ width: "260px" }}>
            <ProductCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductGrid;
