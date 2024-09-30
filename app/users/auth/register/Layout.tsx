"use client";

import { CircleStep } from "@/app/components/users/register/stepper/CircleStep";
import { useStepStore } from "@/store/useStepStore";
import React from "react";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const steps = [
    { no: 1, name: "Informations" },
    { no: 2, name: "Direction" },
    { no: 3, name: "Service" },
    { no: 4, name: "Vérfication" },
  ];

  const currentStep = useStepStore((state) => state.currentStep);


  return (
    <div className="w-screen min-h-screen flex flex-row bg-white">
      <div className="bg-green-200 w-96 h-screen rounded-e-xl rounded-b-xl">
        <div className="flex flex-col items-center justify-center border-[1px] border-green-500 h-full rounded-e-xl rounded-b-xl">
          <svg
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.13253 14.7054L0.307525 8.16802C-0.102508 7.77527 -0.102508 7.13846 0.307525 6.74567L1.79242 5.32332C2.20245 4.93053 2.86731 4.93053 3.27735 5.32332L7.875 9.72717L17.7227 0.294565C18.1327 -0.0981884 18.7976 -0.0981884 19.2076 0.294565L20.6925 1.71692C21.1025 2.10967 21.1025 2.74647 20.6925 3.13927L8.61746 14.7054C8.20739 15.0982 7.54257 15.0982 7.13253 14.7054Z"
              fill="#000"
            />
          </svg>
          <h1 className="font-bold mt-4 mb-5 text-2xl text-center">
            Bon retour à GS
          </h1>
          <div className="flex flex-col items-center justify-center mb-8">
            {steps.map(({ no, name }, index) => (
              <React.Fragment key={index}>
                <CircleStep no={no} isActive={currentStep >= no} name={name} />
                {index < steps.length - 1 && (
                  <div className="flex-grow mx-2">
                    <div className="h-0.5 w-full bg-gray-300 relative">
                      <div
                        className="h-full bg-green-500 transition-all duration-300 ease-in-out"
                        style={{ width: `${currentStep > no ? "100%" : "0%"}` }}
                      />
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="flex flex-row gap-2">
            <p className="text-sm">Vous avez déja un compte ?</p>
            <span className="text-sm text-green-800 font-semibold cursor-pointer">Se connecter</span>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center relative">
        {children}
        {/* Footer Register */}
        <Footer/>
      </div>
    </div>
  );
};
