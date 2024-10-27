"use client";
import Image from "next/image";
import Nasa from "../public/img/nasa-logo.png";
import { motion } from "framer-motion";
import Link from "next/link";
import Apod from "@/components/Apod/Apod";

export default function Home() {
  return (
    <main>
      <div className="min-h-dvh flex flex-col items-center justify-center bg-gradient-to-t from-black to-blue-900 text-white">
        <Image src={Nasa} alt="Nasa logo" className="my-11 h-40 w-auto" />
        <h1 className="text-4xl font-bold text-center mb-2">
          Worlds in Collision
        </h1>
        <h2 className="text-2xl text-center mb-8">A experiência digital</h2>
        <div className="flex gap-8">
          <Link href="/pages/historia">
            <motion.div
              className="bg-white/10 rounded-lg p-5 backdrop-blur-sm"
              initial={{ y: 30, opacity: 0, scale: 0.8 }}
              animate={{
                y: [0, -10, 0],
                opacity: 1,
                scale: 1,
              }}
              transition={{
                ease: "easeInOut",
                duration: .5,
              }}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 0 25px rgba(0, 175, 255, 0.9), 0 0 50px rgba(0, 175, 255, 0.7)",
              }}
              style={{
                boxShadow:
                  "0 0 15px rgba(0, 175, 255, 0.5), 0 0 30px rgba(0, 175, 255, 0.3)",
              }}
            >
              📖 História
            </motion.div>
          </Link>
          <Link href="/pages/legado">
            <motion.div
              className="bg-white/10 rounded-lg p-5 backdrop-blur-sm"
              initial={{ y: 30, opacity: 0, scale: 0.8 }}
              animate={{
                y: [0, -10, 0],
                opacity: 1,
                scale: 1,
              }}
              transition={{
                ease: "easeInOut",
                duration: .5,
              }}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 0 25px rgba(0, 175, 255, 0.9), 0 0 50px rgba(0, 175, 255, 0.7)",
              }}
              style={{
                boxShadow:
                  "0 0 15px rgba(0, 175, 255, 0.5), 0 0 30px rgba(0, 175, 255, 0.3)",
              }}
            >
              📜 Legado
            </motion.div>
          </Link>
          <Link href="/pages/vida">
            <motion.div
              className="bg-white/10 rounded-lg p-5 backdrop-blur-sm"
              initial={{ y: 30, opacity: 0, scale: 0.8 }}
              animate={{
                y: [0, -10, 0],
                opacity: 1,
                scale: 1,
              }}
              transition={{
                ease: "easeInOut",
                duration: .5,
              }}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 0 25px rgba(0, 175, 255, 0.9), 0 0 50px rgba(0, 175, 255, 0.7)",
              }}
              style={{
                boxShadow:
                  "0 0 15px rgba(0, 175, 255, 0.5), 0 0 30px rgba(0, 175, 255, 0.3)",
              }}
            >
              🍃 Vida
            </motion.div>
          </Link>
          <Link href="/pages/teorias">
            <motion.div
              className="bg-white/10 rounded-lg p-5 backdrop-blur-sm"
              initial={{ y: 30, opacity: 0, scale: 0.8 }}
              animate={{
                y: [0, -10, 0],
                opacity: 1,
                scale: 1,
              }}
              transition={{
                ease: "easeInOut",
                duration: .5,
              }}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 0 25px rgba(0, 175, 255, 0.9), 0 0 50px rgba(0, 175, 255, 0.7)",
              }}
              style={{
                boxShadow:
                  "0 0 15px rgba(0, 175, 255, 0.5), 0 0 30px rgba(0, 175, 255, 0.3)",
              }}
            >
              🌌 Teorias
            </motion.div>
          </Link>
        </div>
        <Apod></Apod>
      </div>
    </main>
  );
}
