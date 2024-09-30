const Login = () => {
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
            Bienvenue à GS
          </h1>
          <div className="flex flex-row gap-2">
            <p className="text-sm">Vous n'avez pas de compte ?</p>
            <span className="text-sm text-green-800 font-semibold cursor-pointer">
              S'inscrire
            </span>
          </div>
        </div>
      </div>
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <div className="flex flex-row">
          <p className="text-center font-semibold text-green-700 mb-6 text-2xl">
            Se connecter
          </p>
        </div>
        <form action="" method="post" className="max-w-md py-4 px-4 w-96">
          <div className="flex flex-col">
            <label htmlFor="email" className="font-normal">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="entrer votre email"
              className="border-[1px] border-gray-400 p-2.5 rounded-sm my-2 bg-white w-full"
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
              className="border-[1px] border-gray-400 p-2 px-4 rounded-sm mb-4 mt-2 bg-white"
            />
          </div>
          <div className="mb-4 flex flex-row justify-between">
            {/* <input type="checkbox" name="" id="" /> */}
            <p className="text-sm">
             Mot de passe oublié ?
            </p>
             <span className="text-sm text-green-600 cursor-pointer">
                Réinitialiser
             </span>
          </div>
          <button
            type="submit"
            className="bg-green-200 text-green-700 font-bold w-full p-2 mt-4 rounded-md border-[1px] border-green-400"
          >
            register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
