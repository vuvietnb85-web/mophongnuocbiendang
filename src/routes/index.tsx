import { createFileRoute } from "@tanstack/react-router";
import { SeaApp } from "@/components/sea-app";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <SeaApp />;
}
