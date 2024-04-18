import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "../components/header";

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Search
        </Link>
        <Link to="/favorites" className="[&.active]:font-bold">
          Favorites
        </Link>
        {/* <Link
          to="/favorites/$favoriteId"
          className="[&.active]:font-bold"
          params={{ favoriteId: "123" }}
        >
          Favorite 123
        </Link> */}
      </div>

      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
