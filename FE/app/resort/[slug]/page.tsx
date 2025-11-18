import Image from "next/image";

export const revalidate = 300;
export const dynamicParams = true;

export async function generateStaticParams() {
  const res = await fetch("http://localhost:5101/api/resort");
  const resorts = await res.json();

  return resorts.map((resort: any) => ({
    slug: resort.slug,
  }));
}

async function getResortData(slug: string) {
  const res = await fetch(`http://localhost:5101/api/resort/${slug}`);
  if (!res.ok) {
    return null;
  }
  const data = await res.json();
  return data;
}

// export async function generateStaticParams() {
//   return dataResorts.map((resort) => ({
//     slug: resort.slug,
//   }));
// }

const ResortDetail = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const resort = await getResortData(slug);
  if (!resort) {
    return <div>Resort not found</div>;
  }
  const heroImageUrl = resort?.hero || "/default-hero.jpg";
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="relative rounded-xl overflow-hidden mb-12 shadow-lg h-96">
        <Image
          src={heroImageUrl}
          alt={`Hero image of ${resort?.name}`}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
      </div>
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold">{resort?.name}</h1>
        <p className="text-xl">
          <strong>{resort?.state}</strong>, {resort?.country}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="bg-gray-100 p-8 rounded-xl shadow-lg mb-10">
          <h2 className="text-3xl font-bold text-green-700. mb-4">
            About {resort?.name}
          </h2>
          <p className="text-lg text-gray-700">{resort?.blurb}</p>
          <p className="text-lg text-gray-600 mt-4 mb-5">
            Located in {resort?.state}, {resort?.country}, this resort offers a
            variety of terrains for all levels.
          </p>
          <a
            href="#"
            className="px-4 py-2 bg-sky-600 text-white rounded  px-6  hover:bg-blue-700 transition duration-300"
          >
            Plan with an Expert
          </a>
        </div>

        <h2 className="text-3xl font-bold text-green-700. mb-4">
          Mountain Stats
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
            <div className="bg-blue-600 text-white p-3 rounded-full mb-4">
              <span className="text-3xl font-bold">{resort?.stats.lifts}</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Lifts</h3>
            <p className="text-lg text-gray-600">
              Number of lifts available at the resort
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
            <div className="bg-blue-600 text-white p-3 rounded-full mb-4">
              <span className="text-3xl font-bold">{resort?.stats.runs}</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Number of Runs
            </h3>
            <p className="text-lg text-gray-600">Total number of ski runs</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
            <div className="bg-blue-600 text-white p-3 rounded-full mb-4">
              <span className="text-3xl font-bold">
                {resort?.stats.avgSnowfall} inches
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Average Snowfall
            </h3>
            <p className="text-lg text-gray-600">
              Average annual snowfall in inches
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResortDetail;
