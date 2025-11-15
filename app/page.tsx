import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import { destinos } from "./data/destinations";

export default function Home() {
  const items = destinos;
  return (
    <>
      <Hero />
      <section>
        <h2>POPULAR DESTINATIONS</h2>
        <ProductGrid items={items} />
      </section>
    </>
  );
}
