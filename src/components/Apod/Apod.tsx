"use client"
import { NasaType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Apod(){
    const [apod, setApod] = useState<NasaType>({
        copyright: " ",
        title: "", 
        url: "", 
        service_version: "", 
        media_type: "", 
        explanation: "", 
        date: "",
        hdurl: ""
    });
    const maxDate = new Date().toISOString().split('T')[0];


    const [selectedDate, setSelectedDate] = useState(() => {
        const today = new Date();
        return today.toISOString().split('T')[0];
    });

    useEffect(() => {
        const fetchApod = async (date: string) => {
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
        <div className="my-24 flex flex-col justify-center items-center">
            <h2>Escolha um dia para ver a foto!</h2>
            <input
                className="text-black"
                type="date"
                max={maxDate}
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
            />
            <div className="flex w-3/4 m-8 border-black border">
                {apod.media_type === "image" && (
                    <Image src={apod.url} alt="Nasa Image" width={500} height={500} />
                )}
                <section className=" bg-slate-900 flex flex-col justify-around">
                    <span className="ml-4">
                        <h1 className="font-bold text-4xl">{apod.title}</h1>
                        <p>{apod.copyright}</p>
                    </span>
                    <p className="ml-4">{apod.explanation}</p>
                </section>
            </div>
            <Link href={`/pages/apod/${apod.date}`}>
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
                SABER MAIS
                </motion.div>
            </Link>
        </div>
    );
}