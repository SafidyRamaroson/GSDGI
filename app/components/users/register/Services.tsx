"use client";

import { useStepStore } from "@/store/useStepStore";
import React, { ChangeEvent, useState } from "react";

export const Services: React.FC = () => {

  const handleNextStep = useStepStore((state) => state.handleNextStep)
  const handlePreviousStep = useStepStore((state) => state.handlePreviousStep)
  const [selectedService, setSelectedService] = useState<string>("");

  const handleChangeService = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedService(event.target.value);
  };
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <label
        htmlFor="directions"
        className="my-4 font-bold text-green-700 text-2xl"
      >
        Choisir une service
      </label>
      <div className="w-1/3 flex flex-col justify-center items-center">

      <select
        id="directions"
        value={selectedService}
        onChange={handleChangeService}
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5 my-2"
      >
        <option value="">--Sélectionnez--</option>
        <option value="service1">Service 1</option>
        <option value="service2">Service 2</option>
        <option value="service3">Service 3</option>
        <option value="service4">Service 4</option>
        <option value="service5">Service 5</option>
        <option value="service6">Service 6</option>
      </select>
      </div>
    </div>
  );
};
