export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  category: string;
  image: string;
  description: string;
  features: string[];
  fileFormat: string;
  fileSize: string;
  downloadMethod: string;
}

export const categories = [
  { name: "Ebook", icon: "BookOpen" as const },
  { name: "Template", icon: "Layout" as const },
  { name: "Software", icon: "Monitor" as const },
  { name: "Desain", icon: "Palette" as const },
  { name: "Tools Digital", icon: "Wrench" as const },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Panduan Lengkap Digital Marketing",
    price: 149000,
    originalPrice: 299000,
    rating: 4.8,
    reviews: 234,
    category: "Ebook",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop",
    description: "Ebook komprehensif tentang strategi digital marketing terkini. Cocok untuk pemula maupun profesional yang ingin meningkatkan skill pemasaran digital mereka.",
    features: ["200+ halaman materi", "Studi kasus nyata", "Template strategi", "Update gratis selamanya", "Bonus checklist"],
    fileFormat: "PDF",
    fileSize: "45 MB",
    downloadMethod: "Link download otomatis via email",
  },
  {
    id: "2",
    name: "Template Dashboard Admin Pro",
    price: 249000,
    originalPrice: 499000,
    rating: 4.9,
    reviews: 189,
    category: "Template",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    description: "Template dashboard admin modern dan responsif dengan berbagai komponen siap pakai untuk proyek web development Anda.",
    features: ["50+ komponen UI", "Dark & light mode", "Responsif", "Source code lengkap", "Dokumentasi detail"],
    fileFormat: "ZIP (HTML, CSS, JS)",
    fileSize: "120 MB",
    downloadMethod: "Link download otomatis via email",
  },
  {
    id: "3",
    name: "Software Manajemen Keuangan",
    price: 399000,
    originalPrice: 799000,
    rating: 4.7,
    reviews: 156,
    category: "Software",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    description: "Software lengkap untuk mengelola keuangan bisnis Anda. Dilengkapi dengan laporan otomatis dan fitur analisis mendalam.",
    features: ["Laporan otomatis", "Multi-user support", "Export Excel & PDF", "Backup cloud", "Support 1 tahun"],
    fileFormat: "EXE / DMG",
    fileSize: "250 MB",
    downloadMethod: "Link download + serial key via email",
  },
  {
    id: "4",
    name: "Paket Desain Social Media",
    price: 199000,
    originalPrice: 399000,
    rating: 4.6,
    reviews: 312,
    category: "Desain",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
    description: "500+ template desain social media siap pakai untuk Instagram, Facebook, dan TikTok. Mudah diedit dengan Canva atau Photoshop.",
    features: ["500+ template", "Format Canva & PSD", "Berbagai niche", "Bonus font & icon", "Update bulanan"],
    fileFormat: "ZIP (PSD, Canva Link)",
    fileSize: "2 GB",
    downloadMethod: "Link download via Google Drive",
  },
  {
    id: "5",
    name: "SEO Toolkit Pro",
    price: 349000,
    originalPrice: 699000,
    rating: 4.8,
    reviews: 98,
    category: "Tools Digital",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&h=300&fit=crop",
    description: "Tools lengkap untuk optimasi SEO website Anda. Termasuk keyword research, backlink analyzer, dan rank tracker.",
    features: ["Keyword research tool", "Backlink analyzer", "Rank tracker", "Site audit", "Competitor analysis"],
    fileFormat: "Web App (SaaS)",
    fileSize: "Online - tidak perlu download",
    downloadMethod: "Akses via akun setelah pembayaran",
  },
  {
    id: "6",
    name: "Ebook Copywriting Mastery",
    price: 129000,
    originalPrice: 259000,
    rating: 4.5,
    reviews: 267,
    category: "Ebook",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop",
    description: "Pelajari seni copywriting yang menjual. Dari headline hingga closing, semua teknik dibahas lengkap dengan contoh nyata.",
    features: ["150+ halaman", "50+ contoh copy", "Template swipe file", "Bonus headline generator", "Akses komunitas"],
    fileFormat: "PDF",
    fileSize: "30 MB",
    downloadMethod: "Link download otomatis via email",
  },
  {
    id: "7",
    name: "Template Landing Page Starter",
    price: 179000,
    originalPrice: 359000,
    rating: 4.7,
    reviews: 143,
    category: "Template",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
    description: "Koleksi 20+ template landing page modern dan high-converting. Cocok untuk berbagai jenis bisnis dan produk.",
    features: ["20+ template", "Responsif design", "SEO optimized", "Fast loading", "Easy customization"],
    fileFormat: "ZIP (HTML, CSS, JS)",
    fileSize: "85 MB",
    downloadMethod: "Link download otomatis via email",
  },
  {
    id: "8",
    name: "Paket Icon & Ilustrasi Premium",
    price: 99000,
    originalPrice: 199000,
    rating: 4.9,
    reviews: 421,
    category: "Desain",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop",
    description: "1000+ icon dan ilustrasi premium dalam berbagai style. Tersedia dalam format SVG, PNG, dan AI.",
    features: ["1000+ icon", "Multiple styles", "SVG & PNG format", "Commercial license", "Regular updates"],
    fileFormat: "ZIP (SVG, PNG, AI)",
    fileSize: "500 MB",
    downloadMethod: "Link download via Google Drive",
  },
];

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
};
