const Login = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="flex flex-row">
        {/* <div className="w-4 h-4 rounded-sm bg-blue-400 mr-2"></div> */}
        <p className="text-center font-semibold text-green-400 mb-6 text-2xl">
          Se connecter
        </p>
      </div>
      <form action="" method="post" className="max-w-md py-4 px-8 w-96">
        <div className="flex flex-col">
          <label htmlFor="email" className="font-normal">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="entrer votre email"
            className="border-[1px] border-gray-400 p-2 px-4 rounded-sm mb-4 mt-2"
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
            className="border-[1px] border-gray-400 p-2 px-4 rounded-sm mb-4 mt-2"
          />
        </div>
        <div className="mb-4 flex flex-row justify-between">
          {/* <input type="checkbox" name="" id="" /> */}
          <p className="text-sm">Mot de passe oublié ?</p>
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
  );
};

export default Login;
