import Image from "next/image";
import Link from "next/link";

export const ProductCard = ({ item }: { item: any }) => {
  return (
    <article className="border rounded-lg overflow-hidden shadow-sm">
      <div className="relative h-48 w-full">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.title}
            fill
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div className="h-48 bg-slate-200"> </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold">{item.title}</h3>
        <p className="text-sm text-slate-600">{item.location}</p>
        <div className="mt-3 flex items-center justify-between">
          <div>🏞{item.stats.baseElevation} ft</div>
          <div>❄️{item.stats.avgSnowfall} in</div>
          <span className="font-bold">${item.price} USD</span>
          <Link href={`/resort/${item.slug}`}>
            <button className="px-3 py-1 border rounded cursor-pointer">
              Take a look
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
};
