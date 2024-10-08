import Image from "next/image";
import republiqueMdagascarImage from "./../../../assets/republique-madagascar.png";
import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <header className="fixed w-full shadow-md bg-[#fff]">
      <div className="flex flex-row justify-between items-center max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-row items-center gap-x-4">
          <Image
            alt="République de Madagascar"
            src={republiqueMdagascarImage}
            className="w-8 h-6"
          />
          <h1 className="text-[#068e8c] font-bold text-2xl">Gestion de stock de la DGI</h1>
        </div>
        {/* Navigation Links */}
        <nav>
          <ul className="flex flex-row items-center gap-x-10">
            <li className="font-semibold text-slate-500 hover:text-green-600 cursor-pointer">Accueil</li>
            <li className="font-semibold text-slate-600 hover:text-green-600 cursor-pointer">Services</li>
            <div className="flex flex-row gap-3">
              <Link href="/users/auth/register">
                <button type="button" className="px-4 py-2 rounded-md font-semibold transition-colors text-[#068e8c]">
                  S'inscrire
                </button>
              </Link>
              <Link href="/users/auth/login">
                <button type="button" className="border-2 border-green-600 bg-[#068e8c] px-4 py-2 rounded-md font-semibold transition-colors  hover:text-white text-white">
                  Se connecter
                </button>
              </Link>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};
