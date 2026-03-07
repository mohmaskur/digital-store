import { useParams, Link } from "react-router-dom";
import { Star, FileText, HardDrive, Download, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products, formatPrice } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container-main py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground">Produk tidak ditemukan</h1>
          <Link to="/produk"><Button className="mt-4">Kembali ke Produk</Button></Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container-main section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 lg:grid-cols-2"
        >
          {/* Image */}
          <div className="overflow-hidden rounded-xl border">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Info */}
          <div>
            <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
              {product.category}
            </span>
            <h1 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">{product.name}</h1>

            <div className="mt-3 flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star size={16} className="fill-amber-400 text-amber-400" />
                <span className="text-sm font-semibold text-foreground">{product.rating}</span>
              </div>
              <span className="text-sm text-muted-foreground">({product.reviews} ulasan)</span>
            </div>

            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-3xl font-bold text-primary">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>
                  <span className="rounded-md bg-destructive/10 px-2 py-0.5 text-xs font-semibold text-destructive">-{discount}%</span>
                </>
              )}
            </div>

            <p className="mt-4 text-muted-foreground leading-relaxed">{product.description}</p>

            {/* Features */}
            <div className="mt-6">
              <h3 className="font-semibold text-foreground">Fitur / Isi Produk:</h3>
              <ul className="mt-3 space-y-2">
                {product.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check size={16} className="shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <Button size="lg" className="mt-6 w-full sm:w-auto">
              Beli Sekarang
            </Button>

            {/* Info File */}
            <div className="mt-6 grid gap-3 rounded-xl border bg-muted/50 p-4 sm:grid-cols-3">
              <div className="flex items-center gap-2">
                <FileText size={18} className="text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Format File</p>
                  <p className="text-sm font-medium text-foreground">{product.fileFormat}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <HardDrive size={18} className="text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Ukuran File</p>
                  <p className="text-sm font-medium text-foreground">{product.fileSize}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Download size={18} className="text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Cara Download</p>
                  <p className="text-sm font-medium text-foreground">{product.downloadMethod}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Produk Terkait */}
        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-xl font-bold text-foreground sm:text-2xl">Produk Terkait</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
