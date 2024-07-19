
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Providers } from "./store/Provider"

export const metadata = {
  title: "Link de Pagamento - PagBank",
  description: "Generated by create next app",
};
const montserrat = Montserrat({
  weight: ['400', '700'], // Você pode especificar os pesos que deseja usar
  subsets: ['latin'], // Subsets que você deseja incluir
});
export default function RootLayout({ children }) {
  return (
    <Providers >
      <html lang="pt-br">
        <body className={montserrat.className}>
          <Header />
          <div className="container">
            <Navbar className="navbar" />
            <div className="content">{children}</div>
          </div>
          <Footer />
        </body>
      </html>
    </Providers>
  );
}
