import { CarouselDataType } from "@/Types/CarouselDataType";
import { div } from "framer-motion/client";

type Props = {
  item: CarouselDataType;
};

export const ProjectCard = ({ item }: Props) => {
  return (
    <div className="w-[298px] min-h-96 bg-cerulean flex py-2 justify-center items-center rounded-2xl text-white">
      <div className="w-[286px] min-h-96 bg-black p-2 flex flex-col items-center rounded-2xl">
        <div className="w-[263px] flex flex-col justify-center mt-2 ">
          <video autoPlay loop muted playsInline className="rounded-lg">
            <source src={item.img} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo
          </video>
          <h1 className="text-start mt-6 font-Montserrat font-bold text-xl">
            {item.titulo}
          </h1>
          <p className="text-xs mt-2 opacity-50">{"" + item.texto}</p>
        </div>

        <div className="w-[263px] flex flex-wrap gap-3 justify-start text-xs mt-3">
          {item.languages.map((language) => (
            <p style={{ color: `${language.color}` }}>
              {"#" + language.language}
            </p>
          ))}
        </div>

        {item.link.map(
          (link) =>
            link.deploy !== "" &&
            link.git !== "" && (
              <div
                key={link.id}
                className=" w-full mt-6 mb-4 flex justify-center gap-6 "
              >
                <a
                  href={link.git}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-cerulean py-2 px-3 rounded-md hover:bg-cerulean"
                >
                  GitHub
                </a>

                <a
                  href={link.deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-cerulean py-2 px-3 rounded-md hover:bg-cerulean"
                >
                  Deploy
                </a>
              </div>
            )
        )}
      </div>
    </div>
  );
};
