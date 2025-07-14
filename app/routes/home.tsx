import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Button } from "~/components/ui/button";

export default function Home() {
  return (
    <h1>
      home<Button>Click me</Button>
    </h1>
  );
}
