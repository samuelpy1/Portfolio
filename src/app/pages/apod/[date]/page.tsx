"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TipoAvaliacao } from "@/types";

export default function About({ params }: { params: { nomeAvaliacao: string } }) {
  const [avaliacao, setAvaliacao] = useState<TipoAvaliacao>({
   data: new Date(Date.parse('2024-10-27')),
   feedback: "",
   nomeAvaliacao: "",
   nomePessoa: "",
   nota: 0,
  });


  const selectedAvaliacao = params.nomeAvaliacao;

  useEffect(() => {
    const fetch = async (date: string) => {
      try {
        const response = await fetch(`http://localhost:3000/api/nasa/${date}`);
        const data = await response.json();
        setApod(data);
      } catch (error) {
        console.error('Erro na busca:', error);
      }
    };

    fetchApod(selectedDate);
  }, [selectedDate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-t from-black to-blue-900 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl flex flex-col justify-center items-center">
        <h1 className="text-2xl font-semibold text-center mb-4">
          Foto Astronômica do Dia {params.date}
        </h1>
        <h2 className="text-xl font-bold text-center mb-2">{apod.title}</h2>
        {apod.copyright && (
          <p className="text-sm text-gray-600 mb-4">© {apod.copyright}</p>
        )}
        {apod.media_type === "image" ? (
          <Image
            src={apod.url}
            alt={apod.title}
            className="max-w-full h-auto rounded-lg shadow-lg mb-6 flex justify-center"
            width={500}
            height={500}
          />
        ) : apod.media_type === "video" ? (
          <iframe
            src={apod.url}
            title={apod.title}
            className="w-full max-w-lg h-64 mb-6"
            allowFullScreen
          ></iframe>
        ) : (
          <p className="text-black mb-6">Carregando...</p>
        )}
        <p className="text-lg text-center mb-6">{apod.explanation}</p>
        <Link href={'/'}>
        <motion.div
              className="bg-blue-900 rounded-lg p-5 backdrop-blur-sm text-white"
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
              Voltar
            </motion.div>
        </Link>
      </div>
    </div>
  );
}