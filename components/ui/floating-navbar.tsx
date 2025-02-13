"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const pathname = usePathname();
  //console.log(pathname);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex w-fit fixed top-10 inset-x-0 mx-auto border px-6 py-3 text-sm md:text-base pointer-events-auto bg-neutral-800/80 items-center justify-center space-x-4 border-white/[0.2] rounded-lg z-[5000]",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          //backgroundColor: "rgba(0,0,0,0)", //"rgba(44, 14, 89, 0.15)",
          //borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.525)",
        }}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="sm:block text-sm capitalize font-medium rounded-md p-2 hover:bg-teal-400/70 text-neutral-200 hover:text-neutral-50 transition duration-200">{navItem.name}</span>
          </Link>
        ))}
        {/*<button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
          <span>Login</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button>*/}
      </motion.div>
    </AnimatePresence>
  );
};



//shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
//text-neutral-600
//className={`${navItem.link === pathname && "border-b-2 border-myColor-Teal3"}sm:block text-sm capitalize font-medium hover:text-myColor-Teal3 transition-all`}