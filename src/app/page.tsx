"use client";

import { AboutMe } from "@/Components/AboutMe";
import { Experience } from "@/Components/Experience";
import { Contact } from "@/Components/Contact";
import { HardSkils } from "@/Components/HardSkils";
import { Projects } from "@/Components/Projects";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Complements } from "@/Components/Complements";

const page = () => {
  /*State para guaradar o tamanho da tela*/
  const [windowWidth, setWindowWidth] = useState<number>(0);
  /*FIM State para guaradar o tamanho da tela*/

  //Função e state para exibir menu quando estiver em celular
  const [hiddenMenu, setHiddenMenu] = useState(true);
  const handdleHidenMenu = () => {
    if (hiddenMenu === true) {
      setHiddenMenu(false);
    } else {
      setHiddenMenu(true);
    }
  };
  //FIM Função e state para exibir menu quando estiver em celular

  //ver o tamanho da tela
  useEffect(() => {
    // Verifica se o código está sendo executado no cliente (para evitar erro de SSR)
    if (typeof window !== "undefined") {
      // Função que será chamada quando a tela for redimensionada
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      // Define a largura inicial da tela assim que o componente for montado
      setWindowWidth(window.innerWidth);

      // Adiciona o event listener para o evento resize
      window.addEventListener("resize", handleResize);

      // Limpeza do listener ao desmontar o componente
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  //fim ver o tamanho da tela

  //inicio interação menu

  const aboutRef = useRef<HTMLDivElement>(null);
  const hardRef = useRef<HTMLDivElement>(null);
  const expeRef = useRef<HTMLDivElement>(null);
  const projRef = useRef<HTMLDivElement>(null);
  const contacRef = useRef<HTMLDivElement>(null);
  const compRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="text-white">
      <nav className="w-full  flex flex-col mb-10 ">
        <div className="flex flex-col-reverse justify-end items-center">
          {hiddenMenu && <div className="hidden"></div>}
          {/*Menu hamburguer*/}

          {!hiddenMenu && windowWidth < 1024 && (
            <motion.div
              className="flex justify-end pr-12 w-full  bg-black gap-2 py-2 font-Montserrat  "
              initial={{ opacity: 0, scaleY: 0 }} // Começa "fechado" no eixo Y
              whileInView={{ opacity: 1, scaleY: 1 }} // Expande no eixo Y, como se estivesse "abrindo"
              transition={{ duration: 0.8, ease: "easeOut" }} // Duração e suavidade da animação
            >
              <div className="border gap-2 border-blue-600 p-2 rounded-2xl flex flex-col">
                <button
                  className="text-white uppercase "
                  onClick={() => scrollToSection(aboutRef)}
                >
                  Sobre
                </button>

                <button
                  className="text-white uppercase"
                  onClick={() => scrollToSection(hardRef)}
                >
                  Hard Skills
                </button>
                <button
                  className="text-white uppercase"
                  onClick={() => scrollToSection(expeRef)}
                >
                  Experiências
                </button>
                <button
                  className="text-white uppercase"
                  onClick={() => scrollToSection(projRef)}
                >
                  Projeto
                </button>
                <button
                  className="text-white uppercase"
                  onClick={() => scrollToSection(contacRef)}
                >
                  Contato
                </button>
              </div>
            </motion.div>
          )}

          <div
            className="flex justify-end items-center w-full"
            onClick={handdleHidenMenu}
          >
            <button className="mt-2 mr-2 border border-sky-600 w-12 h-12 flex-col items-center justify-center rounded-md lg:hidden">
              <div className=" border border-sky-600 w-8 mx-2"></div>
              <div className=" border border-sky-600 w-8 my-2 mx-2"></div>
              <div className=" border border-sky-600 w-8 mx-2"></div>
            </button>
          </div>
        </div>

        {windowWidth >= 1024 && (
          <motion.div
            className="fixed top-0 left-0 w-full colorMenu p-4 flex  gap-6 z-10"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "linear" }}
          >
            <div className="flex-1 flex items-center text-mintcream gap-2">
              <img
                src="/images/EU.jpg"
                alt=""
                className="w-8 h-8 rounded-full "
              />
              <div className="text">Rafael Isac | Desenvolvedor Web</div>
            </div>

            <div className="flex items-center gap-4 font-Montserrat text-mintcream">
              <button
                className="text-white uppercase"
                onClick={() => scrollToSection(aboutRef)}
              >
                Sobre
              </button>

              <button
                className="text-white uppercase"
                onClick={() => scrollToSection(hardRef)}
              >
                Hard Skills
              </button>

              <button
                className="text-white uppercase"
                onClick={() => scrollToSection(compRef)}
              >
                Complementos
              </button>
              <button
                className="text-white uppercase"
                onClick={() => scrollToSection(expeRef)}
              >
                Experiências
              </button>
              <button
                className="text-white uppercase"
                onClick={() => scrollToSection(projRef)}
              >
                Projeto
              </button>
              <button
                className="text-white uppercase"
                onClick={() => scrollToSection(contacRef)}
              >
                Contato
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      <div ref={aboutRef} className="pt-1 md:pt-10">
        <AboutMe />
      </div>

      <div ref={hardRef} className="pt-10">
        <HardSkils />
      </div>

      <div ref={compRef} className="pt-10">
        <Complements />
      </div>

      <div ref={expeRef} className="pt-10">
        <Experience />
      </div>

      <div ref={projRef} className="pt-10">
        <Projects />
      </div>

      <div ref={contacRef} className="pt-10">
        <Contact />
      </div>
    </div>
  );
};

export default page;
