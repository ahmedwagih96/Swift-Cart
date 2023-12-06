import { Suspense, lazy } from "react";
import useScrollToTop from "./hooks/useScrollToTop";
import { Routes, Route, Navigate } from "react-router-dom";
const Home = lazy(() => import("./pages/Home"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Fulfilled = lazy(() => import("./pages/Fulfilled"));
const ItemDetails = lazy(() => import("./pages/ItemDetails"));
const Declined = lazy(() => import("./pages/Declined"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
import { CartMenu, Footer, Header, LoadingSpinner } from "./components";
import { useAppSelector } from "./redux/hooks";
function App() {
  useScrollToTop();
  const {
    userSlice: { user },
  } = useAppSelector((state) => state.reducers);
  return (
    <div className="app">
      <Header />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route
            path="checkout"
            element={user ? <Checkout /> : <Navigate to="/" />}
          />
          <Route
            path="checkout/fulfilled/:orderToken"
            element={user ? <Fulfilled /> : <Navigate to="/" />}
          />
          <Route
            path="checkout/declined/:orderToken"
            element={user ? <Declined /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/register"
            element={!user ? <Register /> : <Navigate to="/" />}
          />
        </Routes>
      </Suspense>
      <CartMenu />
      <Footer />
    </div>
  );
}

export default App;
