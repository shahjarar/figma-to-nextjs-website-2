import Card, { Card1 } from "@/components/Card";
import Footer from "@/components/Footer";
import Header, { Header1 } from "@/components/Header";
import Hero, { Hero1, Hero2 } from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
   <div>
      <Header />
      <Header1 />
      <Hero />
    <Hero1/>
    <Hero2/>
    <Card/>
    <Card1/>
    <br /><Footer />
   </div>
  
  );
}