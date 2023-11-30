import { Suspense, lazy } from "react";
import useScrollToTop from "./hooks/useScrollToTop";
import { Routes, Route, Navigate } from "react-router-dom";
const Home = lazy(() => import("./pages/Home"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Confirmation = lazy(() => import("./pages/Confirmation"));
const ItemDetails = lazy(() => import("./pages/ItemDetails"));
const Cancellation = lazy(() => import("./pages/Cancellation"));
import { CartMenu, Footer, Header } from "./components";
import { useAppSelector } from "./redux/hooks";
function App() {
  useScrollToTop();
  const { cart } = useAppSelector((state) => state.reducers.cartSlice);
  return (
    <div className="app">
      <Header />
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route
            path="checkout"
            element={cart.length ? <Checkout /> : <Navigate to="/" />}
          />
          <Route path="checkout/success" element={<Confirmation />} />
          <Route path="checkout/failure" element={<Cancellation />} />
        </Routes>
      </Suspense>
      <CartMenu />
      <Footer />
    </div>
  );
}

export default App;
