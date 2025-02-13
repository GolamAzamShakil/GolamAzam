"use client";

import React, {useState, useEffect } from "react";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { itemsIndex } from "./data";
import SkillPage from "@/components/SkillPage";
import FooterPage from "@/components/FooterPage";

export default function Home() {
  //const x: string = new URL(document.URL).hash;
  //const y: string = window.location.hash;
  {/*const [url, setUrl] = useState("none");
  useEffect(() => {
    setUrl(window.location.hash);
  }, []);*/}

  return (
    <>
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
      <Hero />
      <SkillPage />
      {/*<AboutPage />*/}
    </div>
    </main>
    </>
  );
}
