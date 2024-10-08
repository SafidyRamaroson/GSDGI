"use client"

import Image from "next/image";
import PersonnaPhoto from "@/app/assets/Photo.png";
import Link from "next/link";
import { useState } from "react";



export const NavItemsList:React.FC = () => {

    const [currentLink,setCurrentLink] = useState<string>("Tableau de board");
    const navItemsList = [
    {
      label: "Tableau de board",
      icon: PersonnaPhoto,
      path:"/users/dashboard"
    },
    {
      label: "Commande",
      icon: PersonnaPhoto,
      path:"/users/order"
    },
    {
      label: "Bon de  Livraison",
      icon: PersonnaPhoto,
      path:"/users/DeliveryNote"
    },
    {
      label: "Profil",
      icon: PersonnaPhoto,
      path:"/users/profil"
    },
    {
      label: "Déconnexion",
      icon: PersonnaPhoto,
      path:"/"
    },
  ];

  const handleClickLink = (label:string) => {
    setCurrentLink(label);
  }
    return (
         <ul className="flex flex-col items-start  gap-y-2 mx-2">
            {navItemsList.map(({ label, icon,path }, index) => (
                <Link href={path} key={index} className="w-full" onClick={() => handleClickLink(label)}>
              <div
                className={`group flex flex-row gap-4 px-4 py-4  hover:bg-[#068e8c] hover:text-white w-full  rounded-md cursor-pointer ${currentLink == label ? "bg-[#068e8c] text-white":null}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
                </svg>

                <li className={`font-semibold  group-hover:text-white ${currentLink == label ? "text-white":"text-slate-400"}`}>
                  {label}
                </li>
              </div>
               </Link>
            ))}
          </ul>
    )
}