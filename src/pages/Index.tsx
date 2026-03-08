import { Link } from "react-router-dom";
import { BookOpen, Layout, Monitor, Palette, Wrench, CreditCard, Download, ShieldCheck, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

const iconMap: Record<string, React.ElementType> = {
  BookOpen, Layout, Monitor, Palette, Wrench,
};

const advantages = [
  { icon: CreditCard, title: "Pembayaran Mudah", desc: "Berbagai metode pembayaran tersedia" },
  { icon: Download, title: "Download Instan", desc: "Akses produk langsung setelah bayar" },
  { icon: ShieldCheck, title: "Produk Berkualitas", desc: "Dikurasi oleh tim profesional" },
  { icon: Headphones, title: "Support 24/7", desc: "Tim support siap membantu kapan saja" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Index = () => {
  const popularProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden section-padding" style={{ background: "var(--hero-gradient)" }}>
        <div className="container-main relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-extrabold leading-tight text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Tempat Terbaik Membeli
            <br />Produk Digital
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/80 sm:text-lg"
          >
            Temukan berbagai ebook, template, software, dan tools digital berkualitas.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8"
          >
            <Link to="/produk">
              <Button size="lg" variant="secondary" className="text-sm font-semibold">
                Lihat Produk
              </Button>
            </Link>
          </motion.div>
        </div>
        {/* Decorative circles */}
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary-foreground/5" />
        <div className="absolute -bottom-10 -left-10 h-60 w-60 rounded-full bg-primary-foreground/5" />
      </section>

      {/* Kategori */}
      <section className="section-padding">
        <div className="container-main">
          <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">Kategori Produk</h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-muted-foreground">Pilih kategori yang sesuai dengan kebutuhanmu</p>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {categories.map((cat, i) => {
              const Icon = iconMap[cat.icon];
              return (
                <motion.div
                  key={cat.name}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <Link
                    to={`/produk?kategori=${encodeURIComponent(cat.name)}`}
                    className="flex flex-col items-center gap-3 rounded-xl border bg-card p-6 transition-shadow hover:shadow-md"
                  >
                    {Icon && <Icon size={28} className="text-primary" />}
                    <span className="text-sm font-medium text-foreground">{cat.name}</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Produk Populer */}
      <section className="section-padding bg-muted/50">
        <div className="container-main">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Produk Populer</h2>
              <p className="mt-1 text-muted-foreground">Produk paling diminati oleh pengguna kami</p>
            </div>
            <Link to="/produk">
              <Button variant="outline" size="sm">Lihat Semua</Button>
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {popularProducts.map((product, i) => (
              <motion.div
                key={product.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Keunggulan */}
      <section className="section-padding">
        <div className="container-main">
          <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">Mengapa Toko Mustcoor?</h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-muted-foreground">Keunggulan berbelanja di platform kami</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex flex-col items-center rounded-xl border bg-card p-6 text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                  <item.icon size={22} className="text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
