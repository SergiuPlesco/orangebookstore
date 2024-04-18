import { createFileRoute } from "@tanstack/react-router";
// import Favorite from "../components/favorite";

export const Route = createFileRoute("/favorites/$favoriteId")({
  component: Favorite,
});

function Favorite() {
  const { favoriteId } = Route.useParams();
  return <div>Pokemon {favoriteId}</div>;
}
