import { dataProj } from "@/data/dataProj";
import { AnimatePresence, motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { div } from "framer-motion/client";
import { ProjectCard } from "./ProjectCard/ProjectCard";

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

      <motion.div
        className="w-full mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2.0, ease: "easeIn" }}
        viewport={{ once: true }} // Garante que a animação ocorra apenas uma vez
      >
        {dataProj.map((item) => (
          <ProjectCard item={item} />
        ))}
      </motion.div>
    </div>
  );
};
