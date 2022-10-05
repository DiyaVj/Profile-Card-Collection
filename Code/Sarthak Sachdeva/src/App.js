import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import "./App.css";
import particlesOptions from "./particles.json";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

function App() {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  return (
    <div className="App">
      <Particles options={particlesOptions} init={particlesInit} />
      <header className="App-header">
        <div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-[#151515] w-full mb-6 shadow-lg rounded-xl">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full flex justify-center">
                <div className="relative">
                  <img
                    src="https://shockwave24.s3.ap-south-1.amazonaws.com/sarthak.png"
                    alt="sarthak sachdeva"
                    className="shadow-xl rounded-full align-middle border-none max-h-48 m-4"
                  />
                </div>
              </div>
            </div>
            <div className="text-center mt-2">
              <h3 className="text-2xl text-slate-400  font-bold leading-normal mb-1">
                Sarthak Sachdeva
              </h3>
              <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
                New Delhi, India
              </div>
            </div>
            <div className="mt-6 py-6 border-t border-slate-200 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full px-4">
                  <p className="font-light leading-relaxed text-slate-400  mb-4 text-lg">
                    Full Stack Developer | Software Developer Intern @Cario
                    Growth Services | Technical Team Lead @GitHub Community SRM
                    | Technical Member @Alexa Developers SRM | Technical Member
                    @MLSA SRM | Technical Member @Hack the box SRM
                  </p>
                  <div className="flex justify-center ">
                    <a
                      href="https://www.linkedin.com/in/sarthakk24/"
                      className="font-normal text-slate-400 hover:text-slate-400 mx-3 text-3xl"
                    >
                      <BsLinkedin />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/sarthakk24/"
                      className="font-normal text-slate-400 hover:text-slate-400 mx-3 text-3xl"
                    >
                      <BsGithub />
                    </a>
                    <a
                      href="https://www.instagram.com/sarthakk24/"
                      className="font-normal text-slate-400 hover:text-slate-400 mx-3 text-3xl"
                    >
                      <BsInstagram />
                    </a>{" "}
                    <a
                      href="https://twitter.com/Sarthak78780040"
                      className="font-normal text-slate-400 hover:text-slate-400 mx-3 text-3xl"
                    >
                      <BsTwitter />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
