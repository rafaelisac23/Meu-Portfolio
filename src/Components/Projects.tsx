import { dataProj } from "@/data/dataProj";
import { AnimatePresence, motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

export const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState<string>();
  const [text, setText] = useState<string>();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const OpenModal = (title: string, text: string) => {
    setTitle(title);
    setText(text);
    setShowModal(true);
  };
  const CloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="w-full flex flex-col  pb-10">
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2.0, ease: "easeIn" }}
        viewport={{ once: true }} // Garante que a animação ocorra apenas uma vez
        className="text-mintcream text-center mt-10 italic opacity-80 font-Montserrat text-shadow"
      >
        Projetos
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2.0, ease: "easeIn" }}
        viewport={{ once: true }} // Garante que a animação ocorra apenas uma vez
        className="text-mintcream text-center text-3xl mt-2 font-Montserrat text-shadow"
      >
        Meus Projetos
      </motion.h2>

      <div className="w-3/4 m-auto flex justify-center items-center">
        <div className="mt-20 min-w-40 max-w-96 ">
          <Slider {...settings}>
            {dataProj.map((item) => (
              <div className="  text-black rounded-xl">
                <div className=" rounded-xl bg-blue-600 flex justify-center items-center p-2 ">
                  <img
                    src={item.img}
                    alt=""
                    className="h-full w-full rounded-md"
                  />
                </div>

                <div className="flex flex-col justify-center items-center gap-4 p-4">
                  <p className="text-2xl  font-Montserrat text-white text-center text-shadow  w-full">
                    {item.titulo}
                  </p>

                  <div className=" flex flex-wrap gap-2 justify-center  text-white text-shadow  w-full">
                    {item.languages.map((item) => (
                      <p
                        key={item.id}
                        className="font-Montserrat text-sm sm:text-lg"
                        style={{ color: `${item.color}` }}
                      >
                        #{item.language}
                      </p>
                    ))}
                  </div>

                  <button
                    className="bg-blue-700 text-white px-6 py-2 rounded-xl text-background texte-center hover:bg-blue-800"
                    onClick={() => OpenModal(item.titulo, item.texto)}
                  >
                    Leia Mais
                  </button>

                  <div className="flex gap-2">
                    <a
                      href=""
                      target="_blank"
                      className="bg-blue-700 text-white px-6 py-2 rounded-xl text-background texte-center hover:bg-blue-800"
                    >
                      GITHUB
                    </a>

                    <a
                      href=""
                      target="_blank"
                      className=" bg-blue-700 text-white px-6 py-2 rounded-xl text-background texte-center hover:bg-blue-800"
                    >
                      DEPLOY
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/*Modal*/}
        <AnimatePresence>
          {showModal && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg mx-3 flex flex-col md:max-w-96"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <h1 className="mb-4 font-Montserrat font-bold underline underline-offset-4 text-xl text-black">
                  {title}
                </h1>
                <p className="font-Montserrat text-sm text-justify text-black">
                  {text}
                </p>
                <button
                  className="w-28 bg-red-600 mt-6 text-white py-2 rounded-md"
                  onClick={CloseModal}
                >
                  Fechar
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        {/*Modal*/}
      </div>
    </div>
  );
};
