import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Toolkit from "@/components/Toolkit";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-[10px]">
      {/* <Image src="/assets/background.svg" alt="background" fill priority className="-z-50"/> */}
      <Hero />
      {/* <Toolkit /> */}
      <Experience />
    </div>
  )
}