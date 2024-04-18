import { createFileRoute } from "@tanstack/react-router";
import Search from "../components/search";

export const Route = createFileRoute("/")({
  component: Search,
});
