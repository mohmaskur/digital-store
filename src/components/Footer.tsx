import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-card">
      <div className="container-main py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-primary">Toko Digital</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Tempat terbaik membeli produk digital berkualitas tinggi.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-semibold text-foreground">Menu</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">Beranda</Link></li>
              <li><Link to="/produk" className="hover:text-primary transition-colors">Produk</Link></li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-semibold text-foreground">Kontak</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>Email: hello@tokodigital.id</li>
              <li>WhatsApp: +62 812-3456-7890</li>
            </ul>
          </div>

          {/* Sosial Media */}
          <div>
            <h4 className="font-semibold text-foreground">Sosial Media</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>Instagram</li>
              <li>Twitter / X</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
          © 2026 Toko Digital. Semua hak dilindungi.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
