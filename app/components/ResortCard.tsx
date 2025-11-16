"use client";
import Image from "next/image";
import { Resort } from "../utils/Utils";
import Link from "next/link";

const ResortCard = ({ resort }: { resort: Resort }) => {
  return (
    <article className="border rounded-lg overflow-hidden shadow-sm flex flex-col">
      <div className="relative h-70 w-full">
        <Image
          src={resort.hero}
          alt={resort.name}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-semibold text-lg">
              <Link
                href={`/resorts/${resort.slug}`}
                className="font-semibold text-lg"
              >
                {resort.name}
              </Link>
            </h3>
            <p className="text-sm text-slate-600">
              {resort.country} {resort.state ? `, ${resort.state}` : ""}
            </p>
          </div>
          <button className="text-2xl">☆</button>
        </div>
        <p className="mt-3 text-slate-700 flex-1">{resort.blurb}</p>
        <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
          <div>⛷️{resort.stats.runs} runs</div>
          <div>💵${resort.stats.avgTicketPrice}</div>
          <div>🏞{resort.stats.baseElevation} ft</div>
        </div>
      </div>
    </article>
  );
};

export default ResortCard;
