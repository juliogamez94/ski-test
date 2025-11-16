export type Resort = {
  id: string;
  slug: string;
  name: string;
  country: string;
  state?: string;
  blurb: string;
  hero: string;
  stats: {
    lifts: number;
    runs: number;
    baseElevation: number;
    avgSnowfall: number;
    avgTicketPrice: number;
  };
  monthlySnowfall: number[];
  reasons: string[];
};
