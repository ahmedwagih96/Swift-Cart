import { Suspense, lazy } from "react";
import useScrollToTop from "./hooks/useScrollToTop";
import { Routes, Route, Navigate } from "react-router-dom";
const Home = lazy(() => import("./pages/Home"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Confirmation = lazy(() => import("./pages/Confirmation"));
const ItemDetails = lazy(() => import("./pages/ItemDetails"));
const Cancellation = lazy(() => import("./pages/Cancellation"));
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
            path="checkout/success"
            element={user ? <Confirmation /> : <Navigate to="/" />}
          />
          <Route
            path="checkout/failure"
            element={user ? <Cancellation /> : <Navigate to="/" />}
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
