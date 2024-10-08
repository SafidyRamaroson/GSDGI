"use client";
import { useStepStore } from "@/store/useStepStore";

export const Footer: React.FC = () => {
  const handleNextStep = useStepStore((state) => state.handleNextStep);
  const handlePreviousStep = useStepStore((state) => state.handlePreviousStep);
  const currentStep = useStepStore((state) => state.currentStep);
  const numberSteps = 4;

  return (
    <div className="w-full h-12 mt-4 flex max-lg:flex-col justify-around absolute bottom-12">
      {currentStep && numberSteps == currentStep && (
        <>
          <button
            type="button"
            className="bg-gray-100 text-gray-700 font-bold px-4 py-2  rounded-md border-[1px] border-gray-400"
            onClick={() => handlePreviousStep()}
          >
            Précedent
          </button>
          <button
            type="button"
            className="bg-[#068e8c] text-white font-bold px-4 py-2 rounded-md border-[1px] border-green-400"
            onClick={() => alert("Submit Info")}
          >
            Confirmation
          </button>
        </>
      )}
      {currentStep && currentStep != 1 && currentStep != numberSteps && (
        <>
          <button
            type="button"
            className="bg-gray-100 text-gray-600 font-bold px-4 py-2  rounded-md border-[1px] border-gray-400"
            onClick={() => handlePreviousStep()}
          >
            Précedent
          </button>
          <button
            type="button"
            className="bg-[#068e8c] text-white font-bold px-4 py-2  rounded-md border-[1px] border-green-400"
            onClick={() => handleNextStep()}
          >
            Suivant
          </button>
        </>
      )}
      {currentStep && currentStep == 1 && (
        <>
          <button
            type="button"
            className="bg-gray-100 text-gray-600 font-bold px-4 py-2 rounded-md border-[1px] border-gray-400 cursor-not-allowed"
            onClick={() => {}}
          >
            Précedent
          </button>
          <button
            type="button"
            className="bg-[#068e8c] text-white font-bold px-4 py-2  rounded-md border-[1px] border-green-400"
            onClick={() => handleNextStep()}
          >
            Suivant
          </button>
        </>
      )}
    </div>
  );
};
