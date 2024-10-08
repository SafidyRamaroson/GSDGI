"use client";

import React, { ChangeEvent, useState } from "react";

type Direction = {
  name: string;
  acronym: string;
};

export const Directions: React.FC = () => {
  const [selectedDirection, setSelectedDirection] = useState<string>("");

  const handleChangeDirection = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedDirection(event.target.value);
  };

  const DirectionsData: Direction[] = [
    {
      name: "Direction Générale des Impots",
      acronym: "DGI",
    },
    {
      name: "Direction de la Législation Fiscale et du Contentieux",
      acronym: "DLFC",
    },
    {
      name: "Direction de la Recherche et du Controle Fiscal",
      acronym: "DRCF",
    },
    {
      name: "Direction de la Programmation des Resources",
      acronym: "DPR",
    },
    {
      name: "Direction Techniques",
      acronym: "DITECH",
    },
    {
      name: "Direction de la Formation Professionnelle",
      acronym: "DFP",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center w-full h-1/2">
      <label
        htmlFor="directions"
        className="mt-4 font-bold text-[#068e8c] text-2xl"
      >
        Dans quelle direction est-ce que vous travaillez ?
      </label>
      <div className="w-1/2  flex flex-col justify-center items-center h-full gap-6 mt-6">
        <div className="flex  flex-wrap min-w-full min-h-full  gap-4 items-center justify-center">
          {
            DirectionsData.map(({name,acronym},index) => (

          <div key={index} className="border-[1px] border-gray-50 w-36 h-32 rounded-md flex flex-col items-center gap-4 hover:bg-slate-50 hover:cursor-pointer hover:border-2 hover:border-gray-50 shadow-md">
            <svg
              width="21"
              height="18"
              viewBox="0 0 21 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-6"
            >
              <path
                d="M8.4 11.8125H8.39934C8.39934 11.2437 8.44331 11.5056 5.60864 5.43129C5.0295 4.19063 3.37116 4.18816 2.79103 5.43129C-0.0675939 11.5576 0.00065625 11.2616 0.00065625 11.8125H0C0 13.3657 1.88048 14.625 4.2 14.625C6.51952 14.625 8.4 13.3657 8.4 11.8125ZM4.2 6.1875L6.5625 11.25H1.8375L4.2 6.1875ZM20.9993 11.8125C20.9993 11.2437 21.0433 11.5056 18.2086 5.43129C17.6295 4.19063 15.9712 4.18816 15.391 5.43129C12.5324 11.5576 12.6007 11.2616 12.6007 11.8125H12.6C12.6 13.3657 14.4805 14.625 16.8 14.625C19.1195 14.625 21 13.3657 21 11.8125H20.9993ZM14.4375 11.25L16.8 6.1875L19.1625 11.25H14.4375ZM17.325 15.75H11.55V5.3877C12.3214 5.02594 12.9006 4.28098 13.0722 3.375H17.325C17.6151 3.375 17.85 3.12328 17.85 2.8125V1.6875C17.85 1.37672 17.6151 1.125 17.325 1.125H12.5882C12.1091 0.445781 11.3561 0 10.5 0C9.64392 0 8.89087 0.445781 8.41181 1.125H3.675C3.38494 1.125 3.15 1.37672 3.15 1.6875V2.8125C3.15 3.12328 3.38494 3.375 3.675 3.375H7.92783C8.09944 4.28062 8.67825 5.02594 9.45 5.3877V15.75H3.675C3.38494 15.75 3.15 16.0017 3.15 16.3125V17.4375C3.15 17.7483 3.38494 18 3.675 18H17.325C17.6151 18 17.85 17.7483 17.85 17.4375V16.3125C17.85 16.0017 17.6151 15.75 17.325 15.75Z"
                fill="#000"
              />
            </svg>
            <h3 className="font-bold text-xl text-center text-black mt-4">
               {acronym}
            </h3>
          </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};
