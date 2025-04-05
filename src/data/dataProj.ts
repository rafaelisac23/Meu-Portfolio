import { CarouselDataType } from "@/Types/CarouselDataType";

export const dataProj: CarouselDataType[] = [
  {
    titulo: "Portal Atacadinho",
    img: "/images/atacadinho.png",
    texto: "Projeto Criado para finalidades do emprego atual",
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
    titulo: "Loja Shadcn",
    img: "/images/lojashadcn.png",
    texto:
      "Este projeto foi desenvolvido com o objetivo de praticar meus conhecimentos em Front-End, utilizando ferramentas como ShadCN para a interface, Zod para validações de formulário e React Hook Form para gerenciamento de formulários. Com essas tecnologias, construí um site com funcionalidade de carrinho de compras.",
    languages: [
      { language: "Shadcn", color: "#9194B8", id: 1 },
      { language: "React", color: "#97F9F9", id: 2 },
      { language: "zod", color: "#C5C3C6", id: 3 },
      { language: "React-hook-form", color: "#A5AA52", id: 4 },
    ],
    link: [
      {
        id: 1,
        git: "https://github.com/rafaelisac23/Loja-Shadcn",
        deploy: "https://loja-shadcn.vercel.app/",
      },
    ],
  },
  {
    titulo: "Pokedex",
    img: "/images/Pokedex.png",
    texto:
      "Neste projeto, utilizei TanStack Query e Axios com o objetivo de aprender e praticar o consumo de APIs. A ideia foi explorar o gerenciamento de requisições, cache e estados assíncronos de forma eficiente no Front-End.",
    languages: [
      { language: "JavaScript", color: "#F7DF1E", id: 1 },
      { language: "TailwindCSS", color: "#9CC1E6", id: 2 },
      { language: "Tanstack", color: "#F39237", id: 3 },
      { language: "React", color: "#9194B8", id: 4 },
    ],
    link: [
      {
        id: 1,
        git: "https://github.com/rafaelisac23/PokedexApi",
        deploy: "https://pokedex-api-vert.vercel.app/",
      },
    ],
  },
];
