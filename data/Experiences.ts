import { useDate } from "../libs/useDate";

const  { getAge } = useDate;

export const Experiences = [
    {
        year: 2021,
        temp: getAge("2021/11/08"),
        name: "Agência N1",
        description: "Desenvolver e fazer manutenções de e-commerces utilizando a plataforma VTEX.",
        type: "CLT",
        technologies: [
            "HTML5", 
            "SASS",
            "SCSS",
            "GTM",
            "JQuery",
            "VTEX IO",
            "JAVASCRIPT",
            "HTML",
            "CSS",
            "VTEX",
        ]
    },
    {
        year: 2020,
        temp: getAge("2020/10/08"),
        name: "NeuroHarmony",
        description: "Projeto para criar um site de apresentação para essa empresa",
        type: "Freelancer",
        technologies: [
            "TYPESCRIPT", 
            "REACT JS"
        ]
    },
    {
        year: 2019,
        temp: getAge("2019/03/10"),
        name: "Monitoria de Computação Numérica",
        description: "Monitor da disciplina Computação Numérica do Curso de Ciência e Tecnologia. Responsável em dar suporte aos professores, auxiliar em atividades e tirar duvidas dos alunos. Além disso, auxiliar no desenvolvimento dos códigos em Scilab e python.",
        type: "Docência",
        technologies: [
            "SCILAB", 
            "PAYTHON"
        ]
    },
    {
        year: 2020,
        temp: getAge("2020/05/10"),
        name: "Silva & Lima",
        description: "Projeto para criar site da empresa e mentorias sobre uso de alguns projetos.",
        type: "Freelancer",
        technologies: [
            "REACT JS", 
            "REACT NATIVE",
            "TYPESCRIPT",
            "NODE"
        ]
    }
];