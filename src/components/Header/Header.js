import React, { useContext } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, isLoading, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const signIn = (e) => {
    e.preventDefault();
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        if (user) {
          console.log(user);
          navigate("/channels");
        }
      })
      .catch((err) => console.error(err.message));
  };

  const handleNavigate = () => {
    navigate("/channels");
  };
//  if(isLoading){
//     return <h1>Loading...</h1>
//  }
  return (
    <header className="flex items-center justify-between py-4 px-6 bg-discord_blue">
      <a href="">
        <img
          src="https://i.ibb.co/XSCZX50/discord-logo.png"
          className="w-40 h-14 rounded-full object-contain"
          alt=""
        />
      </a>
      <div className="hidden lg:flex space-x-6 text-white">
        <a href=""></a>
        <a className="link" href="#">
          Download
        </a>
        <a className="link" href="#">
          Why Discord
        </a>
        <a className="link" href="#">
          Nitro
        </a>
        <a className="link" href="#">
          Safety
        </a>
        <a className="link" href="#">
          Support
        </a>
      </div>
      <div className="flex space-x-4 items-center">
        <button
          className="bg-white p-2 rounded-full text-xs md:text-sm px-4 hover:shadow-2xl hover:text-discord_blurple transition duration-200 focus:outline-none ease-in-out text-blue-400 whitespace-nowrap font-medium"
          onClick={!user ? signIn : handleNavigate}
        >
          {!user ? "Login" : "Open Discord"}
        </button>
        <Bars3Icon className="w-9 h-9 lg:hidden text-white" />
      </div>
    </header>
  );
};

export default Header;
