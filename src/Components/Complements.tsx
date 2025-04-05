import "@fontsource-variable/montserrat";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export const Complements = () => {
  return (
    <div className="w-full flex flex-col ">
      {/* titulo Cursos*/}
      <div className="w-full  flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeIn" }}
          viewport={{ once: true }} // Garante que a animação ocorra apenas uma vez
        >
          <div className="w-full ">
            <h1 className="text-mintcream text-center mt-10 italic opacity-80 font-Montserrat text-shadow">
              Complementos
            </h1>
            <h2 className="text-mintcream text-center text-3xl my-2 font-Montserrat text-shadow">
              Cursos
            </h2>
          </div>
        </motion.div>
      </div>
      {/* fim titulo Cursos*/}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeIn" }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 w-full p-2  text-center place-items-center gap-4 font-Montserrat text-white mt-10"
      >
        <div>
          <span className="font-bold text-lg">HTML e Css</span> - B7WEB -
          Duração: 10 horas
        </div>
        <div>
          <span className="font-bold text-lg"> Javascript </span> - B7WEB -
          Duração: 20 horas
        </div>
        <div>
          <span className="font-bold text-lg">Typescript</span>- B7WEB -
          Duração: 10 horas
        </div>
        <div>
          <span className="font-bold text-lg">TailwindCss</span> - B7WEB -
          Duração: 10 horas
        </div>
        <div>
          <span className="font-bold text-lg">ReactJs</span> - B7WEB - Duração:
          40 horas
        </div>
        <div>
          <span className="font-bold text-lg">Estrutura de dados</span> - RS.GOV
          - Duração: 10 horas
        </div>
        <div className="text-center">
          <span className="font-bold text-lg">Administração Estratégica</span> -
          RS.GOV - Duração: 10 horas
        </div>
        <div className="px-2 text-center">
          <span className="font-bold text-lg">Projetos de sistema Web</span>-
          RS.GOV - Duração: 10 horas
        </div>
        <div>
          <span className="font-bold text-lg">Amazom Aws Cloud</span> - Duração:
          Cursando
        </div>
      </motion.div>
    </div>
  );
};
