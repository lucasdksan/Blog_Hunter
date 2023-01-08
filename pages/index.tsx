import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

import AboutCard from "../components/AboutCard";
import AnimateElement from "../components/AnimateElement";
import CardHome from "../components/CardHome";
import CardRepo from "../components/CardRepo";
import ElementFilterBtn from "../components/ElementFilterBtn";
import Footer from "../components/Footer";
import HeadComponent from "../components/HeadComponent";
import Header from "../components/Header";
import SkillCards from "../components/SkillCards";

import { Skills } from "../data/Skills";
import { hardSkills } from "../data/HardSkills";

import styles from "../styles/pages/Home.module.scss";

import { HomeTypes } from "../types/HomeTypes";
import { FiltedRepoTypes, RepoTypes } from "../types/RepoTypes";
import CardHardSkills from "../components/CardHardSkills/indext";
import { useFilterData } from "../libs/useFilterData";

const Home = (data: HomeTypes) => {
  const [ reposArry, setReposArry ] = useState<FiltedRepoTypes[]>(data.repos);
  const [ repoFilted, setRepoFilted ] = useState<FiltedRepoTypes[]>([]);
  const [page, setPage] = useState(0);
  const pageSize = 8;
  const lenRepos = reposArry.length;

  let qtnPages = lenRepos/pageSize;

  const handleNextClick = () => {
    if(page < Math.trunc(qtnPages)){
      setPage(page + 1);
    } else {
      setPage(page);
    }
  }

  const handlePrevClick = () => {
    if(page > 0){
      setPage(page - 1);
    } else {
      setPage(page);
    }
  }

  const handleFilterProject = async (value: string) => {
    console.log(value);
  }

  useEffect(()=>{
    setRepoFilted(reposArry.slice(page * pageSize, (page + 1) * pageSize));
    console.log(repoFilted);
  },[page]);

  return (
    <>
      <HeadComponent />
      <Header />
      <main className={styles.main}>
        <section id="home">
          <aside className={styles.cardBlue}></aside>
          <div className={styles.container}>
            <CardHome
              link={data.link}
              urlGit={data.githubLink}
            />
          </div>
          <div className={styles.containerCards}>
            {Skills.map((e, k) => {
              return (
                <SkillCards
                  key={k}
                  name={e.name}
                  src={e.src}
                />
              );
            })}
          </div>
        </section>
        <section id="projects" className={styles.projects}>
          <div className={styles.container}>
            <h2>Projetos</h2>
            <div className={styles.containerNav}>
              <ul>
                <ElementFilterBtn 
                  onClick={handleFilterProject}
                />
              </ul>
            </div>
            <div className={styles.areaCards}>
              {
                repoFilted.map((item, k )=> (
                  <CardRepo
                    link={item.link}
                    name={item.name}
                    type={item.type}
                    key={k}
                  />
                ))
              }
            </div>
            {
              <div className={styles.areaControllCards}>
                <span onClick={handlePrevClick}>
                  <BsFillArrowLeftCircleFill />
                </span>
                <span onClick={handleNextClick}>
                  <BsFillArrowRightCircleFill />
                </span>
              </div>
            }
          </div>
        </section>
        <section id="about" className={styles.state}>
          <div className={styles.container}>
            <h2>Sobre</h2>
            <div className={styles.content}>
              <AboutCard />
              <AnimateElement />
            </div>
          </div>
        </section>
        <section id="hard-skills" className={styles.hardSkills}>
        <div className={styles.container}>
            <h2>Hard Skills</h2>
            <div className={styles.content}>
              {
                hardSkills.map(function(e, k){
                  return(
                    <CardHardSkills 
                      icon={e.icon}
                      label={e.name}
                      key={k}
                    />
                  );
                })
              }
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const result = await fetch("https://api.github.com/users/lucasdksan");
  const dataGit = await result.json();
  const repos_Url = dataGit.repos_url;
  const resultRepos = await fetch(repos_Url);
  const arryRepos = await resultRepos.json();
  const tempArrReposFilted:FiltedRepoTypes[] = [];

  arryRepos.forEach((element: RepoTypes) => {
    tempArrReposFilted.push(
      useFilterData(element)
    );
  });

  return {
    props: {
      link: dataGit.avatar_url,
      company: dataGit.company,
      githubLink: dataGit.html_url,
      location: dataGit.location,
      reposQt: dataGit.public_repos,
      repos: tempArrReposFilted
    }
  }
}