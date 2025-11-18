import Link from "next/link";
import React from "react";

export const ResortsBanner = () => {
  return (
    <Link href={"/resorts"}>
      <div className="bg-white border rounded-xl p-10 text-center shadow-md  hover:shadow-xl transition cursor-pointer my-10">
        <h2 className="text-3xl font-bold mb-3">Discover our resorts</h2>
        <p className="text-gray-600">
          Explore more than 50 spectacular destinations around the world
        </p>
      </div>
    </Link>
  );
};
