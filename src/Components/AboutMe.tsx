import "@fontsource-variable/montserrat";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
export const AboutMe = () => {
  return (
    <div className="w-full flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeIn" }}
        viewport={{ once: true }} // Garante que a animação ocorra apenas uma vez
      >
        <div className="w-full ">
          <h1 className="text-mintcream text-center mt-10 italic opacity-80 font-Montserrat text-shadow">
            Introdução
          </h1>
          <h2 className="text-mintcream text-center text-3xl my-2 font-Montserrat text-shadow">
            Sobre Mim
          </h2>
        </div>
      </motion.div>

      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeIn" }}
          viewport={{ once: true }} // Garante que a animação ocorra apenas uma vez
        >
          {/* Começo foto */}
          <div className="w-full flex justify-center  pb-8">
            <div
              className="w-56 h-56 rounded-full border-2 border-cerulean mt-4
                bg-[url('/images/EU.jpg')] bg-cover bg-center shadow-lg shadow-cerulean sm:w-64 sm:h-64 md:w-80 md:h-80"
            ></div>
          </div>
          {/* FIM foto */}
        </motion.div>

        <div className=" w-full flex flex-col  pb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeIn" }}
            viewport={{ once: true }} // Garante que a animação ocorra apenas uma vez
          >
            <section
              className="w-full flex flex-col 
            justify-center items-center"
            >
              <h2 className="text-center text-shadow italic font-Montserrat font-bold my-4 text-mintcream text-base min-w-64 text-wrap mx-8 sm:text-lg md:text-xl">
                "Apreciando cada passo, mas já sonhando com as próximas
                conquistas."
              </h2>

              <p className="mx-12 sm:mx-20 text-shadow mt-4 min-w-64 text-mintcream text-wrap text-justify  text-base font-Montserrat sm:text-lg md:text-md">
                Prazer, sou
                <TypeAnimation
                  className="text-shadow"
                  sequence={[" RAFAEL", 3000, " FRONT-END", 3000]}
                  speed={10}
                  style={{
                    fontSize: "18px",
                    backgroundImage:
                      "linear-gradient(to right,  #0284c7,  #4f46e5)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                  repeat={Infinity}
                ></TypeAnimation>
                <br />
                sou um desenvolvedor iniciante com foco em front-end.
                Atualmente, curso Gestão de Tecnologia da Informação e trabalho
                como auxiliar de informática no Atacadão S/A. Estou sempre
                aprimorando minhas habilidades por meio de cursos e palestras,
                buscando oportunidades para aplicar meu conhecimento e crescer
                na área. Meu objetivo é me especializar no desenvolvimento
                front-end e avançar na carreira como desenvolvedor web.
              </p>
            </section>
          </motion.div>
        </div>

        <motion.a
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeIn" }}
          viewport={{ once: true }} // Garante que a animação ocorra apenas uma vez
          href="/cv/rafael-isac.pdf"
          download="rafael-isac.pdf"
          className="text-white font-bold font-Montserrat  w-36 mt-8 ml-12 sm:mx-20 py-4 px-4 
        rounded-md bg-gradient-to-t from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700"
        >
          Dowload CV
        </motion.a>
      </div>
    </div>
  );
};
