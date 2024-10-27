import { Navigate, Route, Routes } from "react-router-dom";
import { useVerifyAuthApi } from "./services/queries";
import SiteLayout from "./layouts/site-layout";
import HomePage from "./pages/home-page";
import SignInPage from "./pages/sign-in-page";
import SignUpPage from "./pages/sign-up-page";
import AuthLayout from "./layouts/auth-layout";
import ProductPage from "./pages/product-page";

export default function App() {
  const { data: isAuthenticated } = useVerifyAuthApi();

  return (
    <Routes>
      <Route path="/" element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="product/:productId" element={<ProductPage />} />
      </Route>
      <Route path="/" element={<AuthLayout />}>
        <Route
          path="sign-in"
          element={isAuthenticated ? <Navigate to="/" /> : <SignInPage />}
        />
        <Route
          path="sign-up"
          element={isAuthenticated ? <Navigate to="/" /> : <SignUpPage />}
        />
      </Route>
    </Routes>
  );
}
