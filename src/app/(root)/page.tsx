import Hero from "./components/hero";
import TechStack from "./components/stack";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <TechStack />
    </main>
  );
}
