import About from "@/components/about";
import Feedback from "@/components/feedback";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import RecentWork from "@/components/RecentWork";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <About/>
    <Services/>
    <RecentWork/> 
    </>
  );
}
