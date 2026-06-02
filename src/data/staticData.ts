import src from 'gsap-trial/src/index';
import { GalleryItem, PhotoboothOffering, PackageDetails, HighlightVideoItem } from '../types';

export const GALLERY_ITEMS: GalleryItem[] = [
  // Weddings Section
  {
    id: 'w1',
    category: 'weddings',
    title: 'Flowing Veil',
    description: 'An editorial cinematic embrace at golden hour, suspended in quiet grandeur on the cliffs.',
    src: new URL('../assets/images/Wed_2_compressed.webp', import.meta.url).href,
    location: 'The Garden',
    year: '2024'
  },
  {
    id: 'w2',
    category: 'weddings',
    title: 'Leaves All Around',
    description: 'Spacious high-ceiling architecture reflecting soft dramatic backlighting on a glowing walk-down.',
    src: new URL('../assets/images/Wed_1_compressed.webp', import.meta.url).href,
    location: 'The Great Outdoors',
    year: '2022'
  },
  {
    id: 'w3',
    category: 'weddings',
    title: 'The Rolls Royce',
    description: 'An elegant black and white candid exchange, capturing pure, unfiltered happiness.',
    src: new URL('../assets/images/Wed_3_compressed.webp', import.meta.url).href,
    location: "Leonard's",
    year: '2024'
  },
  
  // Sweet 16 Section
  {
    id: 's1',
    category: 'sweet16',
    title: 'Elegance Redefined',
    description: 'A crisp modern glamour portrait focusing on the massive city skyline and the subject’s poised elegance, captured in a high-fashion editorial style.',
    src: new URL('../assets/images/S16_1_compressed.webp', import.meta.url).href,
    location: 'New York City',
    year: '2024'
  },
  {
    id: 's2',
    category: 'sweet16',
    title: 'Pose of the Party',
    description: 'A sophisticated premium Sweet 16 celebration portrait, framed with soft romantic candlelight in a luxury ballroom.',
    src: new URL('../assets/images/S16_4_compressed.webp', import.meta.url).href,
    location: "Leonard's",
    year: '2024'
  },
  {
    id: 's3',
    category: 'sweet16',
    title: 'Eternal Friendship',
    description: 'Friends laughing and enjoying the night, captured in a candid moment of pure joy and connection.',
    src: new URL('../assets/images/S16_2_compressed.webp', import.meta.url).href,
    location: "Leonard's",
    year: '2025'
  },

  // South Asian
  {
    id: 'c1',
    category: 'cultural',
    title: 'Vows of Red & Rich Gold',
    description: 'Intricate traditional South Asian silk embroidery meets timeless candlelit vows.',
    src: new URL('../assets/images/SouthAsian_1_compressed.webp', import.meta.url).href,
    location: 'Taj Jai Mahal Palace',
    year: '2025'
  },
  {
    id: 'c2',
    category: 'cultural',
    title: 'Ritual of Sacred Flame',
    description: 'Raw, emotional documentation of standard ancestral marriage circles, amidst rising fragrant smoke.',
    src: new URL('../assets/images/SouthAsian_2_compressed.webp', import.meta.url).href,
    location: 'Royal Udaipur Courtyard',
    year: '2025'
  },
  {
    id: 'c3',
    category: 'cultural',
    title: 'The Whispering Pines',
    description: 'An elegant outdoor getaway, highlighting natural smiles and the contrast of forest shadow.',
    src: new URL('../assets/images/SouthAsian_3_compressed.webp', import.meta.url).href,
    location: 'Pacific Northwest Cliffs',
    year: '2025'
  },

//engagments
  {
    id: 'e1',
    category: 'engagements',
    title: 'Amber Twilight Run',
    description: 'A dynamic, movement-infused silhouette dance as the warm tide glides over footprints.',
    src: 'https://images.unsplash.com/photo-1482841628122-9080d44bb807?auto=format&fit=crop&q=75&w=1600&h=900',
    location: 'Malibu Shoreline',
    year: '2024'
  },

  // Portraits Section
  {
    id: 'p1',
    category: 'portraits',
    title: 'Minimalist Monolith',
    description: 'High-contrast studio portraits with deliberate negative space, emphasizing bone structure and raw gaze.',
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=75&w=1600&h=900',
    location: 'SoHo Daylight Studio',
    year: '2025'
  },
  {
    id: 'p2',
    category: 'portraits',
    title: 'The Contemporary Poet',
    description: 'Balanced low-key studio lighting portraying executive depth and elegant fashion framing.',
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=75&w=1600&h=900',
    location: 'Brooklyn Red Hook Loft',
    year: '2024'
  }
];

export const PHOTOBOOTH_OFFERINGS: PhotoboothOffering[] = [
  {
    id: 'pb-vogue',
    title: 'The Vogue Studio Booth',
    subtitle: 'Editorial High-Contrast Glamour',
    description: 'Step into a high-fashion editorial set with our flawless, wrap-around professional lighting and signature deep-contrast black and white filtering. It feels like a real high-end magazine cover shoot, instantly delivered into guests hands.',
    features: [
      'Pro studio ring flashes & softboxes',
      'Ultra-flattering glamour smoothing filter',
      'Minimalist extra-large seamless backing',
      'On-site print & custom SMS/Airdrop sharing',
      'Dedicated fashion director attendant'
    ],
    vibe: 'Bold, upscale, and magazine-ready',
    tag: 'Flagship Experience'
  },
  {
    id: 'pb-air-digital',
    title: 'Open Air Digital Booth',
    subtitle: 'Ultra-Modern Instant Sharing',
    description: 'A modern, sleek digital station utilizing state-of-the-art DSLR imaging and ring illumination. Perfect for fast-paced, high-energy events where instant social sharing is the primary goal.',
    features: [
      'Stunning high-resolution DSLR sensors',
      'Instant delivery via SMS, Email, or QR Code',
      'Interactive touchscreen with live previews',
      'Curated premium backdrops of choice',
      'Customized elegant visual watermarks'
    ],
    vibe: 'Sleek, fluid, and highly social',
    tag: 'Modern Classic'
  },
  {
    id: 'pb-air-print',
    title: 'Open Air Print Booth',
    subtitle: 'Physical Keepsakes with Timeless Design',
    description: 'Elegant physical printouts on premium thick paper, featuring customizable bespoke page overlays designed by our typographic artists. Celebrate with tangible art pieces guests take home.',
    features: [
      'High-speed dye-sublimation dye printers',
      'Lustre-finish archival quality prints',
      'Custom elegant frames or template layouts',
      'Curated box of luxury minimalist props',
      'Bespoke leatherbound guest print sign book'
    ],
    vibe: 'Tactile, nostalgic, and elegant',
    tag: 'The Traditionalist'
  },
  {
    id: 'pb-360-video',
    title: '360° Cinematic Video Booth',
    subtitle: 'Dynamic Slow-Motion Video Capture',
    description: 'An interactive rotating platform capturing 120 FPS high-definition videos with custom motion ramps, transitions, and immersive soundscapes, ideal for dance floors and energy filled parties.',
    features: [
      'Spacious high-capacity heavy-duty platform',
      'Ultra high frame-rate HD cameras',
      'Dynamic speed ramp edits (slow-mo to fast)',
      'Custom luxury circular lighting arrays',
      'Instant video downloads right off the platform'
    ],
    vibe: 'Energetic, dramatic, and immersive',
    tag: 'Crowd Favorite'
  },
  {
    id: 'pb-telephone',
    title: 'Telephone Video Message Booth',
    subtitle: 'Vintage Audio-Video Guest Registry',
    description: 'Skip the standard sign-in book. Our vintage-restored telephone booths let guests record heartfelt voice notes and video greetings, compiled into an emotional family heirloom.',
    features: [
      'Beautiful vintage 1970s rotary phone style',
      'High-fidelity studio-grade recording capsules',
      'Ambient noise-filtering technology',
      'Elegant wooden signage explaining behaviors',
      'Full audio-video compilation delivered post-event'
    ],
    vibe: 'Intimate, warm, and sentimental',
    tag: 'Uniquely Artful'
  }
];

export const PACKAGES_DATA: PackageDetails[] = [
  {
    id: 'pkg-essential',
    title: 'Essential Collection',
    tagline: 'Meticulous, quiet documentation focusing on primary stories and emotional arcs.',
    details: [
      '6 Hours continuous photographic coverage by main principal photographer',
      '6 Hours continuous videographic coverage by lead documentarian',
      'Full private online client portal active for twelve months',
      'Bespoke color correction and creative grading processing',
      'Curated set of 400+ high-resolution digital negatives'
    ],
    inclusions: [
      'Principal Photographer',
      'Lead Videographer',
      '6 Hours Coverage',
      'Private Web Gallery'
    ]
  },
  {
    id: 'pkg-signature',
    title: 'Signature Collection',
    tagline: 'Comprehensive luxury storytelling capturing fine-art details and cinematic movement.',
    details: [
      '8 Hours continuous photographic coverage with Principal and Lead Associates',
      '8 Hours videographic capture including second multi-angle cinema assistant',
      'Bespoke 5-minute premium Highlight Film with hand-selected master score',
      'Next-day priority teaser set (15 flagship images for immediate sharing)',
      'Full private online download portal and luxury flash drive delivery',
      '600+ signature polished digital negatives'
    ],
    inclusions: [
      'Two Photographers',
      'Principal Videographer',
      '8 Hours Coverage',
      'Bespoke Highlight Film',
      'Priority Teasers'
    ]
  },
  {
    id: 'pkg-celebration',
    title: 'Celebration Collection',
    tagline: 'The ultimate immersive capture package covering every angle, laughter, and detail fully.',
    details: [
      'Full day comprehensive coverage with no strict time limitations (Up to 12 Hours)',
      'Dual principal senior wedding photographers on duty',
      'Dual expert videographers establishing cinematic multi-lens setups',
      'Comprehensive 8-to-10 minute Extended Cinematic Film plus master speech cuts',
      'Comes with any Photobooth package of choice included (4 hours operation)',
      'Private print store integration with custom hand-made leather album options',
      '900+ master high-resolution digital files'
    ],
    inclusions: [
      'Two Principal Photographers',
      'Two Primary Videographers',
      'Full Photobooth Included',
      'Full-Day Mastery (12 hrs)',
      'Extended Cinematic Film & Speeches',
      'Luxury Album Consult'
    ]
  }
];

export const HIGHLIGHTS_DATA: HighlightVideoItem[] = [
  {
    id: 'h-cathedral-symphony',
    title: 'Angie & Jr',
    category: 'Wedding',
    duration: '1:08',
    location: "Leonard's",
    year: '2025',
    description: 'desc',
    videoUrl: 'https://pub-744e03c4b6a343e88ee29b47368f398d.r2.dev/Epic%20Hilight%201%20Angie%20%26%20Jr%2010-11-25.mp4',
    thumbnailUrl: new URL('../assets/kjLoading.png', import.meta.url).href
  },
  {
    id: 'h-garden-elegance',
    title: "Brianna's Quinceanera",
    category: 'Quinceanera',
    duration: '1:04',
    location: "Leonard's",
    year: '2024',
    description: 'desc.',
    videoUrl: 'https://pub-744e03c4b6a343e88ee29b47368f398d.r2.dev/Epic%20Video%20Highlight%204-25-26(1).mp4',
    thumbnailUrl: new URL('../assets/kjLoading.png', import.meta.url).href
  },
  {
    id: 'h-eternal-sunset',
    title: 'Rafia & Abdullah',
    category: 'Wedding',
    duration: '3:27',
    location: `Leonard's`,
    year: '2025',
    description: 'Description',
    videoUrl: 'https://pub-744e03c4b6a343e88ee29b47368f398d.r2.dev/0521(1).mp4',
    thumbnailUrl: new URL('../assets/kjLoading.png', import.meta.url).href
  }
];
