export interface OccasionItem {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  image: string;
  queryParam: string;
}

export const OCCASIONS: OccasionItem[] = [
  {
    id: "occ-1",
    name: "Festive Glamour",
    slug: "festive",
    tagline: "Luminous zari, traditional weaves, and regal silk drapes.",
    image: "/images/occasions/festive.jpg",
    queryParam: "Festive",
  },
  {
    id: "occ-2",
    name: "Smart Casuals",
    slug: "casual",
    tagline: "Effortless silhouettes for work, day-outs, and gatherings.",
    image: "/images/occasions/casual.jpg",
    queryParam: "Casual",
  },
  {
    id: "occ-3",
    name: "Wedding Edit",
    slug: "weddings",
    tagline: "Opulent Jamdani & Patola sarees designed for milestone memories.",
    image: "/images/occasions/weddings.jpg",
    queryParam: "Weddings",
  },
  {
    id: "occ-4",
    name: "Office Chic",
    slug: "workwear",
    tagline: "Minimalist kurtas, breathable linen co-ords, and tapered pants.",
    image: "/images/occasions/workwear.jpg",
    queryParam: "Workwear",
  },
];

