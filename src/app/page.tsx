import AboutUs from "@/sections/about-us/AboutUs";
import Client from "@/sections/client/Client";
import Feedback from "@/sections/feedback/Feedback";
import Header from "@/sections/header/Header";
import Products from "@/sections/product/Products";

export default function Home() {
  return (
    <main className="flex flex-col p-0 m-0 b-0">
      <Header></Header>
      <Client></Client>
      <Products></Products>
      <Feedback></Feedback>
      <AboutUs></AboutUs>
    </main>
  );
}
