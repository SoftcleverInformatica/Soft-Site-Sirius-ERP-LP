import Client from "@/sections/client/Client";
import Header from "@/sections/header/Header";

export default function Home() {
  return (
    <main className="flex flex-col w-full ">
      <Header></Header>
      <Client></Client>
    </main>
  );
}
