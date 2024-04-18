import { createFileRoute } from "@tanstack/react-router";
import Favorites from "../components/favorites";

export const Route = createFileRoute("/favorites")({
  component: Favorites,
});
