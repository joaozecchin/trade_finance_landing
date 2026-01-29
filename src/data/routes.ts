export interface TradeRoute {
  id: string;
  origin: {
    name: string;
    coordinates: [number, number]; // [lat, lng]
  };
  destination: {
    name: string;
    coordinates: [number, number];
  };
  commodity: string;
  color: string;
}

export const tradeRoutes: TradeRoute[] = [
  // Cocoa routes from Ivory Coast
  {
    id: "route-001",
    origin: { name: "Abidjan, Ivory Coast", coordinates: [5.3364, -4.0267] },
    destination: { name: "Rotterdam, Netherlands", coordinates: [51.9225, 4.4792] },
    commodity: "Cocoa",
    color: "#8B4513", // Brown for cocoa
  },
  {
    id: "route-002",
    origin: { name: "Abidjan, Ivory Coast", coordinates: [5.3364, -4.0267] },
    destination: { name: "Istanbul, Turkey", coordinates: [41.0082, 28.9784] },
    commodity: "Cocoa",
    color: "#8B4513",
  },
  // Coffee routes from Tanzania
  {
    id: "route-003",
    origin: { name: "Dar es Salaam, Tanzania", coordinates: [-6.7924, 39.2083] },
    destination: { name: "Antwerp, Belgium", coordinates: [51.2194, 4.4025] },
    commodity: "Coffee",
    color: "#6F4E37", // Coffee brown
  },
  {
    id: "route-004",
    origin: { name: "Dar es Salaam, Tanzania", coordinates: [-6.7924, 39.2083] },
    destination: { name: "Hamburg, Germany", coordinates: [53.5511, 9.9937] },
    commodity: "Coffee",
    color: "#6F4E37",
  },
  {
    id: "route-005",
    origin: { name: "Dar es Salaam, Tanzania", coordinates: [-6.7924, 39.2083] },
    destination: { name: "Genoa, Italy", coordinates: [44.4056, 8.9463] },
    commodity: "Coffee",
    color: "#6F4E37",
  },
  {
    id: "route-006",
    origin: { name: "Dar es Salaam, Tanzania", coordinates: [-6.7924, 39.2083] },
    destination: { name: "Durban, South Africa", coordinates: [-29.8587, 31.0218] },
    commodity: "Coffee",
    color: "#6F4E37",
  },
  {
    id: "route-007",
    origin: { name: "Dar es Salaam, Tanzania", coordinates: [-6.7924, 39.2083] },
    destination: { name: "New York, USA", coordinates: [40.7128, -74.006] },
    commodity: "Coffee",
    color: "#6F4E37",
  },
  // Freight Forwarding routes from Chile
  {
    id: "route-008",
    origin: { name: "Santiago, Chile", coordinates: [-33.4489, -70.6693] },
    destination: { name: "Los Angeles, USA", coordinates: [34.0522, -118.2437] },
    commodity: "Freight",
    color: "#3b82f6", // Blue for freight
  },
  {
    id: "route-009",
    origin: { name: "Santiago, Chile", coordinates: [-33.4489, -70.6693] },
    destination: { name: "Miami, USA", coordinates: [25.7617, -80.1918] },
    commodity: "Freight",
    color: "#3b82f6",
  },
];

// Convert lat/lng to 3D coordinates for Three.js globe
export function latLngToVector3(
  lat: number,
  lng: number,
  radius: number = 1
): [number, number, number] {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return [x, y, z];
}
