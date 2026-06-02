export type ViewType = 'home' | 'gallery' | 'photobooth' | 'packages' | 'highlights' | 'contact';

export interface GalleryItem {
  id: string;
  category: 'weddings' | 'sweet16' | 'cultural' | 'engagements' | 'portraits';
  title: string;
  description: string;
  src: string;
  location?: string | null;
  year?: string | null;
}

export interface PhotoboothOffering {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  vibe: string;
  tag: string;
}

export interface PackageDetails {
  id: string;
  title: string;
  tagline: string;
  details: string[];
  priceRange?: string;
  inclusions: string[];
}

export interface HighlightVideoItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  location: string;
  year: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  eventDate: string;
  eventType: string;
  message: string;
}
