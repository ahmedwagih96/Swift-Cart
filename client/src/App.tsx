import useScrollToTop from "./hooks/useScrollToTop";
import { Routes, Route } from "react-router-dom";
import { Home, ItemDetails, Checkout, Confirmation } from "./pages";
import { CartMenu, Footer, Header } from "./components";
function App() {
  useScrollToTop();
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="item/:itemId" element={<ItemDetails />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="checkout/success" element={<Confirmation />} />
      </Routes>
      <CartMenu />
      <Footer />
    </div>
  );
}

export default App;
