"use client"
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/fiap.jpeg";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
            <h1 className="text-4x1 font-bold text-red-800 mb-6">404: Page Not Found</h1>
            <Image src={logo} alt="page not found nasa" className="mb-4 h-40 w-auto" />
            <p className="text-lg mb-4">O conteúdo que você está tentando acessar não está disponível!</p>
            <Link href="/">
            <motion.div
      className="bg-black/10 rounded-lg p-5 backdrop-blur-sm"
      initial={{ y: 30, opacity: 0, scale: 0.8 }}
      animate={{
        y: [0, -10, 0],
        opacity: 1,
        scale: 1,
      }}
      transition={{
        ease: 'easeInOut',
        duration: 1.5
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 0 25px rgba(255, 0, 0, 0.9), 0 0 50px rgba(0, 175, 255, 0.7)',
      }}
      style={{
        boxShadow: '0 0 15px rgba(255, 0, 0, 0.5), 0 0 30px rgba(0, 175, 255, 0.3)',
      }}
    >
                Voltar a página inicial
                </motion.div>
            </Link>
        </div>
    )
}
