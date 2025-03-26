import { BsInstagram } from "react-icons/bs";
import { motion } from "framer-motion";

const phoneNumber = "5512974051657"; // Substitua pelo seu número com DDD
const message = "Olá, vi seu portfólio e gostaria de conversar!";
const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  message
)}`;

export const Contact = () => {
  return (
    <div className=" w-full flex flex-col ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeIn" }}
        viewport={{ once: true }}
        className="w-full py-10  bg-cover bg-center
            flex items-center justify-center text-xl text-mintcream font-Montserrat"
      >
        ENTRE EM CONTATO
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeIn" }}
        viewport={{ once: true }}
        className="w-full  flex flex-col border-t border-gray-400"
      >
        <div className="w-full  flex flex-col items-center justify-center pb-4">
          <div className="w-full  flex flex-col justify-center items-center mt-1">
            <h1 className="w-72 text-center font-Montserrat text-mintcream   my-2 pt-2">
              RAFAEL ISAC
            </h1>
            <p className="font-Montserrat text-mintcream text-xs">
              Copyright 2025 - Todos os direitos reservados
            </p>
          </div>

          <div className="w-full  flex  justify-center items-center mt-3 gap-3">
            <a
              href="https://www.instagram.com/rafaelisac14/#"
              target="_blank"
              className="w-12 h-12 bg-[url('/images/instagram.png')] bg-cover bg-center"
            ></a>
            <a
              href="https://www.linkedin.com/in/rafael-isac-7b2270180/"
              target="_blank"
              className="w-12 h-12 bg-[url('/images/linkedin.png')] bg-cover bg-center"
            ></a>
            <a
              href="https://github.com/rafaelisac23"
              target="_blank"
              className="w-12 h-12 bg-[url('/images/hardicons/github.png')] bg-cover bg-center"
            ></a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[url('/images/whatsapp.png')] bg-cover bg-center "
            ></a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
