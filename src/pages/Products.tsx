import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const activeCategory = searchParams.get("kategori") || "Semua";

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchCategory = activeCategory === "Semua" || p.category === activeCategory;
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, search]);

  const setCategory = (cat: string) => {
    if (cat === "Semua") {
      searchParams.delete("kategori");
    } else {
      searchParams.set("kategori", cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container-main section-padding">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">Semua Produk</h1>
        <p className="mt-1 text-muted-foreground">Temukan produk digital yang kamu butuhkan</p>

        {/* Search & Filter */}
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative max-w-sm flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Cari produk..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {["Semua", ...categories.map((c) => c.name)].map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-20 text-center text-muted-foreground">
            Tidak ada produk yang ditemukan.
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Products;
