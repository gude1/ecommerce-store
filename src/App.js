import "./App.css";
import {
  BrowserRouter,
  Outlet,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import MainHeader from "./components/MainHeader/MainHeader";
import Home from "./pages/Home/Home";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Cart from "./pages/Cart/Cart";
import Search from "./pages/Search/Search";
import DashboardHeader from "./components/DashboardHeader/DashboardHeader";
import DashHome from "./pages/DashHome/DashHome";
import NavTab from "./components/NavTab/NavTab";
import Signup from "./pages/Signup/Signup";
import Signin from "./pages/Signin/Signin";
import ForgotPass from "./pages/ForgotPass/ForgotPass";
import CreateStore from "./pages/CreateStore/CreateStore";
import { useContext, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { Console, getCookie, isEmpty, listenCookieChange } from "./utils";
import { Store } from "./context";
import { logUserOut, refreshAccessToken } from "./context/actions/signinform";
import { updateAdmin } from "./context/actions/admin";

function Wrapper() {
  return (
    <div className="cover_page_container">
      <MainHeader />
      <div className="scroll-vertical">
        <main className="container">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function DashboardWrapper() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    checkPath();
  }, [location.pathname]);

  function checkPath() {
    let access = getCookie("id1");
    access = isEmpty(access) ? null : jwtDecode(access);
    if (!access) {
      navigate("/auth/signin", { replace: true });
      return;
    }

    if (!getCookie("has_store")) {
      navigate("/auth/createstore", { replace: true });
    }
  }

  return (
    <div className="cover_page_container">
      <DashboardHeader />
      <NavTab />
      <main className="dashboard-scroll-ctn">
        <div className="dashboard-container">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

function AuthWrapper() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    checkPath();
  }, [location.pathname]);

  function checkPath() {
    let auth_paths = [
      "/auth/signup",
      "/auth/signup/",
      "/auth",
      "/auth/",
      "/auth/signin",
      "/auth/signin/",
      "/auth/forgotpass",
      "/auth/forgotpass/",
    ];

    let protected_paths = ["/createstore", "/createstore/"];

    let access = getCookie("id1");
    let path = location.pathname;

    if (auth_paths.includes(path) && access && jwtDecode(access)) {
      navigate("/dashboard", { replace: true });
      return;
    }

    if (
      protected_paths.includes(path) &&
      (isEmpty(access) || !jwtDecode(access))
    ) {
      navigate("/auth/signin", { replace: true });
      return;
    }
  }

  return (
    <div className="cover_page_container">
      <div className="scroll-vertical">
        <Outlet />
      </div>
    </div>
  );
}

function App() {
  const { dispatch, state } = useContext(Store);

  useEffect(() => {
    setup();
    listenCookieChange(() => {
      let access = getCookie("id1");
      if (!isEmpty(access)) {
        let decoded = jwtDecode(access);
        updateAdmin({ ...decoded });
      }
    }, ["id1"]);
  }, []);

  function setup() {
    let access = getCookie("id1");
    if (isEmpty(access)) {
      dispatch(logUserOut());
      return;
    }
    let decoded = jwtDecode(access);
    if (!decoded) {
      dispatch(logUserOut());
      return;
    }
    dispatch(updateAdmin({ ...decoded }));
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthWrapper />}>
          <Route index element={<Signup />} />
          <Route path="signin" element={<Signin />} />
          <Route path="forgotpass" element={<ForgotPass />} />
          <Route path="createstore" element={<CreateStore />} />
        </Route>
        <Route path="/dashboard" element={<DashboardWrapper />}>
          <Route index element={<DashHome />} />
        </Route>
        <Route path="/:storeId" element={<Wrapper />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="search" element={<Search />} />
          <Route path="product/:productId" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
