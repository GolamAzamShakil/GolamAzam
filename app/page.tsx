"use clients";

import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { itemsIndex } from "./data";
import SkillPage from "@/components/SkillPage";
import FooterPage from "@/components/FooterPage";

export default function Home() {
  return (
  <main className="relative bg-black-400 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
      {/*<FloatingNav navItems={itemsIndex}/>*/}
      <Hero />
      {/*<SkillPage />*/}
      {/*<AboutPage />*/}
      <FooterPage />
    </div>
  </main>);
}
