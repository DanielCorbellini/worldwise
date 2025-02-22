import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import { CitiesProvider } from "./context/CitiesContext/CitiesContext";
import { AuthProvider } from "./context/FakeAuthContext/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute/ProtectedRoute";

// import Product from "./pages/Product/Product";
// import Pricing from "./pages/Product/Pricing";
// import Homepage from "./pages/Homepage/Homepage";
// import Login from "./pages/Login/Login";
// import AppLayout from "./pages/AppLayout/AppLayout";
// import PageNotFound from "./pages/PageNotFound/PageNotFound";

import CityList from "./components/CityList/CityList";
import CountryList from "./components/CountryList/CountryList";
import City from "./components/City/City";
import Form from "./components/Form/Form";
import SpinnerFullPage from "./components/Spinner/SpinnerFullPage";

const Homepage = lazy(() => import("./pages/HomePage/Homepage"));
const Product = lazy(() => import("./pages/Product/Product"));
const Pricing = lazy(() => import("./pages/Product/Pricing"));
const Login = lazy(() => import("./pages/Login/Login"));
const AppLayout = lazy(() => import("./pages/AppLayout/AppLayout"));
const PageNotFound = lazy(() => import("./pages/PageNotFound/PageNotFound"));

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />

              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
