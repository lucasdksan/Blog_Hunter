import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";

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
import { RepoTypes } from "../types/RepoTypes";
import CardHardSkills from "../components/CardHardSkills/indext";

const Home = (data: HomeTypes) => {
  const [ reposArry, setRepposArry ] = useState<RepoTypes[]>(data.repos);
  const [ reposArryRefined, setRepposArryRefined ] = useState<RepoTypes[]>([]);

  const arryFilterElements = ["todos", "typescript", "javascript", "css", "html", "scss"];
  const handleFilterProject = (value: string) => {

  }

  const temporaryArr: RepoTypes[]= [];

  reposArry.forEach(function(e, k){
    if(k < 8){
      temporaryArr.push(e);
    }
  });

  useEffect(()=>{
    if(temporaryArr){
      setRepposArryRefined(temporaryArr);
    }
  },[]);

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
                {
                  arryFilterElements.map((e, k) => {
                    return (
                      <ElementFilterBtn
                        key={k}
                        name={e}
                        onClick={handleFilterProject}
                      />
                    )
                  })
                }
              </ul>
            </div>
            <div className={styles.areaCards}>
              {
                reposArryRefined.map(function (e, k) {
                  return (
                    <CardRepo
                      link={e.html_url}
                      name={e.name}
                      type={e.language}
                      key={k}
                    />
                  );
                })
              }
            </div>
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

  return {
    props: {
      link: dataGit.avatar_url,
      company: dataGit.company,
      githubLink: dataGit.html_url,
      location: dataGit.location,
      reposQt: dataGit.public_repos,
      repos: arryRepos
    }
  }
}