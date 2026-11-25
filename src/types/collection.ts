export interface Collection {
  id: string;
  name: string;
  slug: string;
  description: string;
  bannerImage: string;
  itemCount?: number;
  featured?: boolean;
  highlightText?: string;
}

