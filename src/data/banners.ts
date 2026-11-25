export interface RunwayLook {
  id: string;
  lookNumber: string;
  name: string;
  category: string;
  collectionSlug: string;
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  description: string;
  fabric: string;
  badge: string;
  image: string;
  productSlug: string;
}

export const RUNWAY_LOOKS: RunwayLook[] = [
  {
    id: "runway-2",
    lookNumber: "01",
    name: "Zari Woven Kanjivaram Silk",
    category: "Heritage Sarees",
    collectionSlug: "sarees",
    price: 4599,
    originalPrice: 5999,
    discountPercent: 23,
    description: "Richly detailed temple border patola weave with contrast pallu and heavy golden zari weft.",
    fabric: "Pure Kanjivaram Art Silk",
    badge: "Artisanal Weave",
    image: "/images/banners/11144e41b3f956f1f5fbeaebc917bf85.jpg",
    productSlug: "weaving-patola-zari-border-silk-saree",
  },
  {
    id: "runway-4",
    lookNumber: "02",
    name: "Handblock Print Linen Co-ord Set",
    category: "Co-ord Sets",
    collectionSlug: "coord-sets",
    price: 2199,
    originalPrice: 2899,
    discountPercent: 24,
    description: "Mandarin collar tunic with mother-of-pearl buttons paired with comfort wide-leg trousers.",
    fabric: "100% Breathable Khadi Linen",
    badge: "Modern Grace",
    image: "/images/banners/815f1bc8842be1e7164d775247bc7adc.jpg",
    productSlug: "artisan-block-print-linen-coord-set",
  },
  {
    id: "runway-5",
    lookNumber: "03",
    name: "Tiered Floral Mulmul Maxi",
    category: "Maxi Dresses",
    collectionSlug: "maxis",
    price: 2499,
    originalPrice: 3200,
    discountPercent: 21,
    description: "Sweeping romantic silhouette with floral block motifs, flared tiers & delicate lace edging.",
    fabric: "100% Mulmul Cotton",
    badge: "Breezy Silhouette",
    image: "/images/banners/8453bf035c97b6cb2e4e37e65cf45add.jpg",
    productSlug: "tiered-floral-ethnic-anarkali-maxi",
  },
  {
    id: "runway-6",
    lookNumber: "04",
    name: "Weaving Patola Zari Border Saree",
    category: "Heritage Sarees",
    collectionSlug: "sarees",
    price: 4899,
    originalPrice: 6200,
    discountPercent: 21,
    description: "Intricately designed double-ikat inspired Patola weave with rich contrast pallu & golden zari borders.",
    fabric: "Art Silk with Metallic Zari Weft",
    badge: "Bridal Cherished",
    image: "/images/banners/c59a686f33e5a1fec30afe741d320172.jpg",
    productSlug: "weaving-patola-zari-border-silk-saree",
  },
  {
    id: "runway-8",
    lookNumber: "05",
    name: "Cambric Cotton Floral Kaftan Set",
    category: "Lounge Wear",
    collectionSlug: "lounge-wear",
    price: 1599,
    originalPrice: 2099,
    discountPercent: 24,
    description: "Relaxed 2-piece lounge set with adjustable drawstring waist kaftan & matching pyjamas.",
    fabric: "100% Cambric Cotton",
    badge: "Pure Comfort",
    image: "/images/banners/92422eacb5c1b7d5d07946d2cfeeef97.jpg",
    productSlug: "organic-cotton-kaftan-lounge-set",
  },
];

export interface BannerItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: string;
  badge?: string;
}

export const HERO_BANNERS: BannerItem[] = [
  {
    id: "hero-1",
    badge: "FESTIVE EDIT 2026",
    title: "Timeless Weaves, Modern Grace",
    subtitle: "Handcrafted Jamdani & Pattu Sarees",
    description: "Discover handcrafted luxury born in tradition and styled for contemporary celebrations. Direct from our Chennai boutique to your wardrobe.",
    buttonText: "Shop Sarees Collection",
    buttonLink: "/collections/sarees",
    image: "/images/banners/hero-banner.jpg",
  },
  {
    id: "hero-2",
    badge: "NEW LAUNCH",
    title: "Effortless Everyday Co-ords",
    subtitle: "Linen & Cotton Coordinates",
    description: "Redefine comfort with breathable fabrics, tailored cuts, and artisanal prints perfect for sunny days and weekend brunches.",
    buttonText: "Explore Co-ord Sets",
    buttonLink: "/collections/coord-sets",
    image: "/images/banners/collection-banner.jpg",
  },
];

export const PROMO_BANNER = {
  title: "Experience Allure in Person",
  subtitle: "Flagship Boutique at Perumbakkam, Chennai",
  description: "Touch the weaves, test the drape, and let our personal stylists help you curate the perfect ethnic wardrobe.",
  buttonText: "Visit Our Store",
  buttonLink: "/contact",
  image: "/images/banners/promotional-banner.jpg",
};
