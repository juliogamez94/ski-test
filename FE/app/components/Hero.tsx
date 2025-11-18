import { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";

interface HeroProps {
  query: string;
  setQuery: (value: string) => void;
  items: any[];
  onSelect: (slug: string) => void;
}

const Hero = ({ query, setQuery, items, onSelect }: HeroProps) => {
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const filtered = items.filter((resort) =>
      resort.slug.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered.slice(0, 5));
  }, [query, items]);
  return (
    <section className="relative">
      <div className="h-72 sm:h-96 bg-gradient-to-b from-sky-600 to-sky-400 flex items-center">
        <div className="max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-3xl sm:text-5xl  font-extrabold">
            DREAM SKI VACATION PACKAGES
          </h1>
          <div className="mt-6">
            <SearchBar
              query={query}
              setQuery={setQuery}
              results={results}
              onSelect={onSelect}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
