"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import photo1 from "@/app/assets/Faravohitra Antnananarivo Mscar.jpg";
import photo2 from "@/app/assets/baobabMadagascar.jpg";
import "pure-react-carousel/dist/react-carousel.es.css";
import Typewriter from "typewriter-effect";
import Link from "next/link";


export const Hero: React.FC = () => {
  
  return (
    <div className="bg-custom-radial w-full h-screen border-red-100 flex flex-col items-center justify-center">
      <h2 className="text-5xl font-bold mb-4 text-white">
        <Typewriter
          options={{
            strings: [
              "Commandez en toute simplicité",
              "Suivez en toute confiance !",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>
      <p className="text-xl max-w-md text-gray-100 text-center">
        Un service intuitif, conçu pour vous faciliter la gestion des
        ressources.
      </p>
       <div className="flex flex-row gap-9 mt-8">
              <Link href="/users/auth/register">
                <button type="button" className="border-2 border-[#068e8c] bg-[#068e8c] px-8 py-2 rounded-md font-semibold transition-colors  text-white">
                  S'inscrire
                </button>
              </Link>
              <Link href="/users/auth/register">
                <button type="button" className="border-2 border-white px-8 py-2 rounded-md font-semibold transition-colors  text-white">
                  Gérer votre commande
                </button>
              </Link>
              
            </div>
    </div>
  );
};
