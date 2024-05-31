import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col gap-[10px]">
      {/* <Image src="/assets/background.svg" alt="background" fill priority className="-z-50"/> */}
      <Hero />
      <Experience />
      <Projects />
    </div>
  )
}