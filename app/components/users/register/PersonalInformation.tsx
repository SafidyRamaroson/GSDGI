import { useStepStore } from "@/store/useStepStore"


export const PersonnalInformation:React.FC = ({}) => {

    const handleNextStep = useStepStore((state) => state.handleNextStep)
    return (
         <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row">
        <p className="my-4 font-bold text-green-700 text-2xl">
          Information personnelle
        </p>
      </div>
      <form action="" method="post" className="max-w-md py-4 px-4 w-96">
        <div className="flex flex-col">
          <label htmlFor="nom" className="font-normal">
            Nom
          </label>
          <input
            type="text"
            name="nom"
            id="nom"
            placeholder="entrer votre nom"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="font-normal">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="entrer votre email"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="font-normal">
            Mot de passe
          </label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="entrer votre mot passe"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-2"
          />
        </div>

        <div className="flex items-center justify-end">
        </div>
      </form>
    </div>
    )
}