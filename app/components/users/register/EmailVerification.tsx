import { useStepStore } from "@/store/useStepStore";
import Image from "next/image";

export const EmailVerification = () => {
  const handleNextStep = useStepStore((state) => state.handleNextStep);
  const handlePreviousStep = useStepStore((state) => state.handlePreviousStep);
  return (
    <div className="flex flex-col items-center pt-8">
      <h3 className="font-bold text-green-600 text-center text-2xl">
        Veuillez votre adresse email : <br /> exemple@gmail.com
      </h3>
      <p className="my-4">
        Entrer le code vérification envoyé à votre addresse email
      </p>
      <svg
        width="21"
        height="15"
        viewBox="0 0 21 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.13253 14.7054L0.307525 8.16802C-0.102508 7.77527 -0.102508 7.13846 0.307525 6.74567L1.79242 5.32332C2.20245 4.93053 2.86731 4.93053 3.27735 5.32332L7.875 9.72717L17.7227 0.294565C18.1327 -0.0981884 18.7976 -0.0981884 19.2076 0.294565L20.6925 1.71692C21.1025 2.10967 21.1025 2.74647 20.6925 3.13927L8.61746 14.7054C8.20739 15.0982 7.54257 15.0982 7.13253 14.7054Z"
          fill="#22c55e"
        />
      </svg>

      <input
        type="text"
        name="codeVerificationEmail"
        id="codeVerificationEmail"
        className="px-4 py-4 mt-8 rounded-xl mb-4 border-[1px]  bg-white"
      />
      <p className="text-green-600 mt-4 cursor-pointer">Renvoyer le code</p>
    </div>
  );
};
