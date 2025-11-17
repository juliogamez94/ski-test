interface SearchBarProps {
  query: string;
  setQuery: (value: string) => void;
  results: any[];
  onSelect: (slug: string) => void;
}

export const SearchBar = ({
  query,
  setQuery,
  results,
  onSelect,
}: SearchBarProps) => {
  return (
    <div className="relative w-full max-w-2xl">
      <div className="flex gap-2 bg-white p-2 rounded-xl shadow-lg">
        <input
          className="flex-1 gap-2 bg-white p-2 text-black rounded-lg"
          value={query}
          placeholder="Search resorts"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="px-5 py-2 bg-sky-600 hover:bg-sky-700 transition text-white rounded-lg cursor-pointer"
          onClick={() => {
            if (results.length > 0) {
              onSelect(results[0].slug);
            }
          }}
        >
          Search
        </button>
      </div>
      {query.length > 0 && results.length > 0 && (
        <div className="absolute left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border z-50 max-h-50 overflow-y-auto ">
          {results.map((resort) => (
            <button
              key={resort.slug}
              onClick={() => onSelect(resort.slug)}
              className="w-full flex items-center gap-4 p-3 hover:bg-gray-100 transition text-left cursor-pointer"
            >
              <div>
                <p className="font-semibold text-gray-800">{resort.name}</p>
                <p className="text-sm text-gray-500">{resort.location} </p>
              </div>
            </button>
          ))}
        </div>
      )}

      {query.length > 0 && results.length === 0 && (
        <div className="absolute left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border z-50 p-4 text-gray-500 ">
          No resorts found.
        </div>
      )}
    </div>
  );
};
