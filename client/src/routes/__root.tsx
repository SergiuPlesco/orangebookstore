import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import Header from "../components/header";

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <div className="p-2 flex gap-2 border-b mb-4">
        <Link to="/" className="[&.active]:font-bold">
          Search
        </Link>
        <Link to="/favorites" className="[&.active]:font-bold">
          Favorites
        </Link>
      </div>

      <Outlet />
    </>
  ),
});
