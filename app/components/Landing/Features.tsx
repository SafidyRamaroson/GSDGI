import Module1Icon from "@/app/assets/Modules/Mdule_Documents.svg";
import Module2Icon from "@/app/assets/Modules/Module_Absences.svg";
import Module3Icon from "@/app/assets/Modules/Module_Compétences.svg";
import Module4Icon from "@/app/assets/Modules/Module_Heures.svg";
import Module5Icon from "@/app/assets/Modules/Module_Entretiens.svg";
import Image from "next/image";

interface FeatureProps {
  icon: React.ReactElement;
  title: string;
  content: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, content }) => {
  return (
    <div className="border border-[#068e8c] w-64 h-80 rounded-lg shadow-sm p-4">
      <div className="flex flex-col items-center">
        {icon}
        <h1 className="font-semibold text-center my-3 text-[#068e8c]">{title}</h1>
        <p className="px-2 text-center text-slate-500 font-normal">{content}</p>
      </div>
    </div>
  );
};

export const Features: React.FC = () => {
  type FeatureType = {
    icon: React.ReactElement;
    title: string;
    content: string;
  };

  const FeaturesData: FeatureType[] = [
    {
      icon: <Image src={Module1Icon} alt="Module 1 Icon" />,
      title: "Facile à utiliser",
      content: "Notre plateforme intuitive vous permet de passer des commandes rapidement, sans courbe d'apprentissage compliquée.",
    },
    {
      icon: <Image src={Module2Icon} alt="Module 2 Icon" />,
      title: "Gain de temps",
      content: "Optimisez votre temps avec des processus simplifiés pour passer et suivre vos commandes.",
    },
    {
      icon: <Image src={Module3Icon} alt="Module 3 Icon" />,
      title: "Simplifiez vos demandes",
      content: "Créez des demandes de matériel en quelques clics, avec des instructions claires.",
    },
    {
      icon: <Image src={Module4Icon} alt="Module 4 Icon" />,
      title: "Suivez vos commandes",
      content: "Restez informé sur l'état de vos commandes grâce à un suivi en temps réel.",
    },
    {
      icon: <Image src={Module5Icon} alt="Module 5 Icon" />,
      title: "Automatisez votre inventaire",
      content: "Facilitez la gestion des stocks avec des outils d'automatisation pour un réapprovisionnement efficace.",
    },
  ];

  return (
    <div className="min-h-screen w-4/5 mx-auto pb-14 flex flex-col items-center justify-center">
      <h1 className="font-bold pt-12 ml-8 mb-12 text-4xl text-[#068e8c] text-center">
        Les fonctionnalités de l'eStock
      </h1>
      <div className="flex flex-row flex-wrap gap-6 justify-center items-center mt-12">
        {FeaturesData.map(({ icon, title, content }, index) => (
          <Feature key={index} icon={icon} title={title} content={content} />
        ))}
      </div>
    </div>
  );
};
