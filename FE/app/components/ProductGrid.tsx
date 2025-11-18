"use client";
import { ProductCard } from "./ProductCard";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ProductGrid = ({ items }: { items: any[] }) => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay]}
        freeMode={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        grabCursor={true}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={16}
        slidesPerView={3}
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
