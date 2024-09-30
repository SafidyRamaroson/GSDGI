"use client";

import { useStepStore } from "@/store/useStepStore";
import React, { ChangeEvent, useState } from "react";

export const Directions: React.FC = () => {

  const [selectedDirection, setSelectedDirection] = useState<string>("");

  const handleChangeDirection = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedDirection(event.target.value);
  };
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <label
        htmlFor="directions"
        className="my-4 font-bold text-green-700 text-2xl"
      >
        Choisir une direction
      </label>
      <div className="w-1/3 flex flex-col justify-center items-center">

      <select
        id="directinos"
        value={selectedDirection}
        onChange={handleChangeDirection}
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5 my-2"
      >
        <option value="">--Sélectionnez--</option>
        <option value="direction1">Direction 1</option>
        <option value="directio2">Direction 2</option>
        <option value="direction3">Direction 3</option>
        <option value="direction4">Direction 4</option>
        <option value="direction5">Direction 5</option>
        <option value="direction6">Direction 6</option>
      </select>
     
      </div>
    </div>
  );
};
