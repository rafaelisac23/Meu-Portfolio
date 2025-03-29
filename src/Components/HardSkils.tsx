import { HardIconsData } from "@/IconsData/HardIconsData";
import "@fontsource-variable/montserrat";
import { HardIcons } from "./HardIcons";
import { motion } from "framer-motion";
import { Rating } from "./Rating/Rating";
import { dataHardSkills } from "@/data/dataHardSkills";

export const HardSkils = () => {
  return (
    <div className="w-full flex flex-col items-center font-Montserrat ">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2.0, ease: "easeOut" }}
        viewport={{ once: true }} // Garante que a animação ocorra apenas uma vez
      >
        <div className="flex-wrap w-full flex justify-center items-center gap-2 text-white my-10 px-4 ">
          {HardIconsData.map((item) => (
            <HardIcons key={item.id} icon={item.icon}></HardIcons>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="mt-10  w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 place-items-center gap-10 "
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2.0, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {dataHardSkills.map((item) => (
          <Rating key={item.id} data={item} />
        ))}
      </motion.div>
    </div>
  );
};
