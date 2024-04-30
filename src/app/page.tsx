"use client"
import Header from "../sections/header/Header";
import AboutUs from "../sections/about-us/AboutUs";
import Client from "../sections/client/Client";
import Products from "../sections/product/Products";
import Segments from "../sections/segments/Segments";
import Feedback from "../sections/feedback/Feedback";

export default function Home() {
  return (
    <main className="flex flex-col p-0 m-0 b-0 max-w-[1440px] justify-center items-center">
      <Header></Header>
      <Client></Client>
      <Products></Products>
      <Feedback></Feedback>
      <AboutUs></AboutUs>
      <Segments></Segments>
    </main>
  );
}
