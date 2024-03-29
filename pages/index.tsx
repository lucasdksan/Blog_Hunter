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
import CardHardSkills from "../components/CardHardSkills/indext";
import ExperiencesCard from "../components/ExperiencesCard";

import { Skills } from "../data/Skills";
import { hardSkills } from "../data/HardSkills";
import { Experiences } from "../data/Experiences";
import { AnimateElementHard, AnimateElementHard1, AnimateElementHard2 } from "../data/AnimateLottie";

import styles from "../styles/pages/Home.module.scss";

import { HomeTypes } from "../types/HomeType";
import { FiltedRepoTypes, RepoTypes } from "../types/RepoType";

import { filterData } from "../libs/filterData";

import { gitHubAPI } from "./api/github";

const Home = (data: HomeTypes) => {
  const pageSize = 8;

  const [ reposArry, setReposArry ] = useState<FiltedRepoTypes[]>(data.repos);
  const [ repoFilted, setRepoFilted ] = useState<FiltedRepoTypes[]>([]);
  const [ repoFiltedAPI, setRepoFiltedAPI ] = useState<FiltedRepoTypes[]>([]);
  const [ nextLimit, setNextLimit ] = useState(true);
  const [ prevLimit, setPrevLimit ] = useState(false);
  const [ allSetFilter, setAllSetFilter ] = useState(true);
  const [ lenRepos, setLenRepos ] = useState(reposArry.length);
  const [ qtnPages, setQtnPages ] = useState(lenRepos/pageSize);
  const [ page, setPage ] = useState(0);

  const keyConvertForSearch = (value: string)=>{
    switch(value){
      case "all":
        return "todos";
      break;
      case "ts":
        return "TypeScript";
      break;
      case "js":
        return "JavaScript";
      break;
      case "css":
        return "CSS";
      break;
      case "html":
        return "HTML";
      break;
      case "scss":
        return "SCSS";
      break;
      default:
        return "";
      break;
    }
  }

  const activeButton = ()=>{
    if(page < Math.trunc(qtnPages) && page > 0) {
      setNextLimit(true);
      setPrevLimit(true);
    } else if(page == 0) {
      setNextLimit(true);
      setPrevLimit(false);
    } else if(page == Math.trunc(qtnPages)) {
      setNextLimit(false);
      setPrevLimit(true);
    }
  }

  const handleNextClick = () => {
    if(page < Math.trunc(qtnPages)){
      setPage(page + 1);
    } else if(Math.trunc(qtnPages) == 0) {
      setPage(page + 1);
    } else {
      setPage(page);
      setNextLimit(true);
    }
  }

  const handlePrevClick = () => {
    if(page > 0){
      setPage(page - 1);
    } else {
      setPrevLimit(false);
      setPage(page);
    }
  }

  const handleFilterProject = async (value: string) => {
    let keyFilted = keyConvertForSearch(value);
    let reposFiltedSelect:FiltedRepoTypes[] = [];

    if(value === "all"){
      setAllSetFilter(true);
    } else {
      reposFiltedSelect = await gitHubAPI(keyFilted);
      setRepoFiltedAPI(reposFiltedSelect);
      setAllSetFilter(false);
    }

    setPage(0);
  }

  useEffect(()=>{
    setLenRepos(allSetFilter ? reposArry.length : repoFiltedAPI.length);
    setQtnPages(lenRepos/pageSize);
    activeButton();
    
    if(allSetFilter){
      setRepoFilted(reposArry.slice(page * pageSize, (page + 1) * pageSize));
    } else {
      setRepoFilted(repoFiltedAPI.slice(page * pageSize, (page + 1) * pageSize));
    }
  },[page, allSetFilter, repoFiltedAPI]);

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
                  tablet={false}
                />
              );
            })}
          </div>
        </section>
        <section className={styles.contentResumeHardSkills}>
          <div className={styles.container}>
            {Skills.map((e, k) => {
              return (
                <SkillCards
                  key={k}
                  name={e.name}
                  src={e.src}
                  tablet={true}
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
                <span 
                  onClick={handlePrevClick} 
                  className={prevLimit ? styles.active : styles.not}
                >
                  <BsFillArrowLeftCircleFill />
                </span>
                <span 
                  onClick={handleNextClick}
                  className={nextLimit ? styles.active : styles.not}
                >
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
        <section id="experiences" className={styles.experiences}>
          <div className={styles.container}>
            <h2>Experiências</h2>
            <aside className={styles.content}>
              {
                Experiences.map((element, key)=>(
                  <ExperiencesCard 
                    name={element.name}
                    technologies={element.technologies}
                    temp={element.temp}
                    year={element.year}
                    type={element.type}
                    description={element.description}
                    key={key}
                  />
                ))
              }
            </aside>
          </div>
        </section>
        <section id="hard-skills" className={styles.hardSkills}>
          <div className={styles.container}>
            <h2>Hard Skills</h2>
            <div className={styles.content}>
              <div className={styles.line}>
                <div className={styles.cardsArea}>
                  {
                    hardSkills.map(function(e,k){
                      if(k < 5) return(
                        <CardHardSkills 
                          icon={e.icon}
                          label={e.name}
                          key={k}
                        />
                      );
                    })
                  }
                </div>
                <div className={styles.lottieArea}>
                  <AnimateElementHard />
                </div>
              </div>
              <div className={styles.line} data-invert="invert">
                <div className={styles.lottieArea}>
                  <AnimateElementHard1 />
                </div>
                <div className={styles.cardsArea}>
                  {
                    hardSkills.map(function(e,k){
                      if(k < 10 && k >=5) return(
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
              <div className={styles.line}>
                <div className={styles.cardsArea}>
                  {
                    hardSkills.map(function(e,k){
                      if(k >= 10) return(
                        <CardHardSkills 
                          icon={e.icon}
                          label={e.name}
                          key={k}
                        />
                      );
                    })
                  }
                </div>
                <div className={styles.lottieArea}>
                  <AnimateElementHard2 />
                </div>
              </div>
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
      filterData(element)
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