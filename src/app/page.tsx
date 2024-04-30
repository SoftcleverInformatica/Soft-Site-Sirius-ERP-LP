"use client"
import Header from "../sections/header/Header";
import AboutUs from "../sections/about-us/AboutUs";
import Client from "../sections/client/Client";
import Products from "../sections/product/Products";
import Segments from "../sections/segments/Segments";
import Feedback from "../sections/feedback/Feedback";
import Footer from "../sections/footer/Footer";

export default function Home() {
  return (
    <main className="flex flex-col p-0 m-0 b-0  justify-center items-center">
      <Header></Header>
      <Client></Client>
      <Products></Products>
      <Feedback></Feedback>
      <AboutUs></AboutUs>
      <Segments></Segments>
      <Footer></Footer>
    </main>
  );
}
