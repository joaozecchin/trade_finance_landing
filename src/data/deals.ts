export interface Deal {
  id: string;
  commodity: string;
  commodityIcon: string;
  amount: number;
  currency: "EUR";
  origin: {
    country: string;
    port: string;
    coordinates: [number, number]; // [lat, lng]
  };
  destinations: {
    country: string;
    port: string;
    coordinates: [number, number];
  }[];
  duration: number; // days
  security: "LC-Backed" | "Insured" | "Collateralized" | "Invoice-Backed";
  status: "active" | "completed" | "pipeline";
  counterparty: {
    type: string;
    country: string;
    established: string;
  };
  deliveries?: number;
  minOrder?: number;
  maxOrder?: number;
}

export const deals: Deal[] = [
  {
    id: "deal-001",
    commodity: "Cocoa",
    commodityIcon: "🍫",
    amount: 11000000,
    currency: "EUR",
    origin: {
      country: "Ivory Coast",
      port: "Abidjan",
      coordinates: [5.3364, -4.0267],
    },
    destinations: [
      {
        country: "Netherlands",
        port: "Rotterdam",
        coordinates: [51.9225, 4.4792],
      },
      {
        country: "Turkey",
        port: "Istanbul",
        coordinates: [41.0082, 28.9784],
      },
    ],
    duration: 30,
    security: "LC-Backed",
    status: "active",
    counterparty: {
      type: "Cocoa Trader",
      country: "Netherlands",
      established: "Established",
    },
    minOrder: 1650000,
  },
  {
    id: "deal-002",
    commodity: "Coffee",
    commodityIcon: "☕",
    amount: 10000000,
    currency: "EUR",
    origin: {
      country: "Tanzania",
      port: "Dar es Salaam",
      coordinates: [-6.7924, 39.2083],
    },
    destinations: [
      {
        country: "Belgium",
        port: "Antwerp",
        coordinates: [51.2194, 4.4025],
      },
      {
        country: "Germany",
        port: "Hamburg",
        coordinates: [53.5511, 9.9937],
      },
      {
        country: "Italy",
        port: "Genoa",
        coordinates: [44.4056, 8.9463],
      },
      {
        country: "South Africa",
        port: "Durban",
        coordinates: [-29.8587, 31.0218],
      },
      {
        country: "USA",
        port: "New York",
        coordinates: [40.7128, -74.006],
      },
    ],
    duration: 30,
    security: "LC-Backed",
    status: "active",
    counterparty: {
      type: "Coffee Trader",
      country: "Tanzania",
      established: "10+ years",
    },
    deliveries: 30,
    minOrder: 92000,
    maxOrder: 2100000,
  },
  {
    id: "deal-003",
    commodity: "Freight Forwarding",
    commodityIcon: "🚚",
    amount: 5000000,
    currency: "EUR",
    origin: {
      country: "Chile",
      port: "Santiago",
      coordinates: [-33.4489, -70.6693],
    },
    destinations: [
      {
        country: "USA",
        port: "Los Angeles",
        coordinates: [34.0522, -118.2437],
      },
      {
        country: "USA",
        port: "Miami",
        coordinates: [25.7617, -80.1918],
      },
    ],
    duration: 30,
    security: "Invoice-Backed",
    status: "active",
    counterparty: {
      type: "Freight Forwarder",
      country: "Chile",
      established: "Established",
    },
    deliveries: 1000,
  },
];

export const pipelineMetrics = {
  totalValue: deals.reduce((sum, deal) => sum + deal.amount, 0),
  activeDeals: deals.filter((d) => d.status === "active").length,
  avgDuration: Math.round(
    deals.reduce((sum, deal) => sum + deal.duration, 0) / deals.length
  ),
  commodities: [...new Set(deals.map((d) => d.commodity))],
  regions: {
    africa: deals.filter(
      (d) =>
        d.origin.country === "Ivory Coast" || d.origin.country === "Tanzania"
    ).length,
    europe: deals.filter((d) =>
      d.destinations.some((dest) =>
        ["Netherlands", "Turkey", "Belgium", "Germany", "Italy"].includes(
          dest.country
        )
      )
    ).length,
  },
};
