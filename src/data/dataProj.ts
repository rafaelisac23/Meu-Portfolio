import { CarouselDataType } from "@/Types/CarouselDataType";

export const dataProj: CarouselDataType[] = [
  {
    titulo: "Portal Atacadinho",
    img: "/images/atacadinho.png",
    texto:
      "Com o passar do tempo trabalhando na atual empresa, foi identificado que as informações estavam muito dispersas. Logo, com a ajuda de um colaborador, colega de setor, decidimos centralizar essas informações. Com isso chegamos à conclusão de criar o Portal Atacadinho, que foi desenvolvido com o objetivo de ser um portal acessível a todos os colaboradores. Foi feito um deploy diretamente no servidor local da empresa para garantir esse acesso. Com ele, também produzimos uma versão modificada do Portal de Frios e do Portal de Sacola, que eram utilizados em nossa filial. Para a criação desse projeto, utilizamos HTML, CSS e JavaScript para o front-end, com o auxílio do TailwindCSS via CDN. Para o back-end, utilizamos PHP e MariaDB, junto a um servidor.",
    languages: [
      { language: "JavaScript", color: "#F7DF1E", id: 1 },
      { language: "TailwindCSS", color: "#9CC1E6", id: 2 },
      { language: "PHP", color: "#9194B8", id: 3 },
    ],
    link: [
      {
        id: 1,
        git: "",
        deploy: "",
      },
    ],
  },
  {
    titulo: "Loja Shadcn - em produção",
    img: "/images/lojashadcn.png",
    texto:
      "Este projeto veio com a intenção de praticar meus conhecimentos adquiridos com a ferramenta ShadCn,e tambem aumentar um pouco os meus conhecimentos sobre Front-End",
    languages: [
      { language: "JavaScript", color: "#F7DF1E", id: 1 },
      { language: "TailwindCSS", color: "#9CC1E6", id: 2 },
      { language: "Shadcn", color: "#9194B8", id: 3 },
      { language: "React", color: "#9194B8", id: 4 },
    ],
    link: [
      {
        id: 1,
        git: "https://github.com/rafaelisac23/Loja-Shadcn",
        deploy: "https://loja-shadcn.vercel.app/",
      },
    ],
  },
];
