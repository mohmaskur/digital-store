import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { type Product, formatPrice } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group overflow-hidden rounded-xl border bg-card transition-shadow hover:shadow-lg" style={{ boxShadow: "var(--card-shadow)" }}>
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <span className="text-xs font-medium text-primary">{product.category}</span>
        <h3 className="mt-1 font-semibold text-foreground line-clamp-2 text-sm">
          {product.name}
        </h3>
        <div className="mt-2 flex items-center gap-1">
          <Star size={14} className="fill-amber-400 text-amber-400" />
          <span className="text-xs font-medium text-foreground">{product.rating}</span>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <span className="text-lg font-bold text-primary">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
        <Link to={`/produk/${product.id}`}>
          <Button className="mt-3 w-full" size="sm">Lihat Detail</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
