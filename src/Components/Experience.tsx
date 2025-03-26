import { motion } from "framer-motion";

const next = ">";
const preview = "<";

export const Experience = () => {
  return (
    <div className="w-full  flex flex-col  pb-10">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2.0, ease: "easeIn" }}
        viewport={{ once: true }} // Garante que a animação ocorra apenas uma vez
      >
        <h1 className="text-mintcream text-center mt-10 italic opacity-80 font-Montserrat text-shadow">
          Carreira
        </h1>

        <h2 className="text-mintcream text-center text-3xl my-2 font-Montserrat text-shadow">
          Experiências
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.0, ease: "easeIn" }}
        viewport={{ once: true }} // Garante que a animação ocorra apenas uma vez
        className="w-full flex mt-20 justify-center "
      >
        <div className="w-2 mx-2 bg-white mt-2 rounded-sm shadow-2xl shadow-black"></div>
        <div className=" mr-2 mt-2  bg-blue-600 rounded-md shadow-2xl shadow-black">
          <h1 className="text-white text-2xl ml-4 mt-3 font-Montserrat font-bold ">
            Auxiliar de Informática
          </h1>

          <h2 className="w-56 border-b border-white text-white/65 text-sm   ml-4 pb-2 font-Montserrat ">
            Atacadão S/A
          </h2>

          <ul className="text-white list-disc mx-8  font-Montserrat mt-3">
            <li className="text-wrap text-xs">
              Conduzir a manutenção e organização de equipamentos e arquivos.
            </li>
            <li className="text-wrap text-xs mt-1">
              Atender às solicitações de usuários.
            </li>
            <li className="text-wrap text-xs mt-1">
              Auxílio na emissão de notas fiscais
            </li>
            <li className="text-wrap text-xs mt-1">
              Criação do Portal Atacadinho: portal de auxílio para
              colaboradores.
            </li>

            <li className="text-wrap text-xs mt-1">
              Responsável pela geração de relatórios e planilhas através de
              Excel.
            </li>

            <li className="text-wrap text-xs mt-1">
              Auxílio com os sistemas de PDV e SAT
            </li>
          </ul>

          <p className="text-white ml-3 mt-4 font-Montserrat text-xs mb-2">
            Outubro de 2020 - Atual
          </p>
          <div className="w-full h-1 bg-white rounded-b-sm"></div>
        </div>
      </motion.div>
    </div>
  );
};
