import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import Home from "./pages/Home";
import SideBarPages from "./pages/SideBarPages";
import Popular1 from "./pages/Popular";
import ActorInfo from "./pages/ActorInfo";
import Search from "../src/components/search/Search";
import Hero from "./components/hero/Hero";
import SearchMather from "./components/search/SearchMather";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Home />
        </>
      ),
    },
    {
      path: "/movieCard/:Id",
      element: (
        <>
          <SideBarPages />
        </>
      ),
    },
    {
      path: "/moviePopular",
      element: (
        <>
          <Popular1 />
        </>
      ),
    },
    {
      path: "/movieCard/actor/:id",
      element: (
        <>
          <ActorInfo />
        </>
      ),
    },
    {
      path: "/search",
      element: (
        <>
          <Hero />
          <SearchMather />
        </>
      ),
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
