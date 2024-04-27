import Client from "@/sections/client/Client";
import Header from "@/sections/header/Header";

export default function Home() {
  return (
    <main className="flex flex-col w-screen h-full bg-cover bg-center">
      <Header></Header>
      <Client></Client>
    </main>
  );
}
