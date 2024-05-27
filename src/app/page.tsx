import Experience from "@/components/Experience";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col gap-[10px]">
      {/* <Image src="/assets/background.svg" alt="background" fill priority className="-z-50"/> */}
      <Hero />
      <Experience />
    </div>
  )
}