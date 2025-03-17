"use client";
import ColourfulText from "@/components/Colourfull_text";
import Form_Validation from "@/components/Form_Validation";
import { motion } from "motion/react";

export default function Home() {
  return (
    <>
      <div className="w-full flex items-center justify-center h-screen relative overflow-hidden bg-black/35 z-0">
        <motion.img
          src="https://i.pinimg.com/736x/46/c1/18/46c118a827c3803c59c808c0ac481a2f.jpg"
          className="h-full w-full object-cover absolute inset-0 [mask-image:radial-gradient(circle,transparent,black_80%)] pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
        />
        <div className="backdrop-blur-sm rounded-xl">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold tracking-wide text-center my-5 lg:my-7">
            <ColourfulText text="Employee fill-upform" />
          </h1>
          <Form_Validation />
        </div>
      </div>
    </>
  );
}
