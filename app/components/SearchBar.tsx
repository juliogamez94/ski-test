"use client";
import React, { useState } from "react";

export const SearchBar = ({
  onSearch,
}: {
  onSearch?: (query: string) => void;
}) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSearch?.(query);
  };
  return (
    <form className="flex gap-2 max-2-2xl bg-white p-2 rounded shadow">
      <input
        className="flex-1 outline-none px-3 py-2 text-black"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="px-4 py-2 bg-sky-600 text-white rounded">
        Search
      </button>
    </form>
  );
};
