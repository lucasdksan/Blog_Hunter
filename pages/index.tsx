import { GetServerSideProps } from "next";
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
import styles from "../styles/pages/Home.module.scss";
import { HomeTypes } from "../types/HomeTypes";

const Home = (data: HomeTypes)=>{
  const arryFilterElements = ["todos", "typescript", "javascript", "css", "html", "scss"];
  const handleFilterProject = (value: string)=>{

  }

  return(
    <>
      <HeadComponent />
      <Header />
      <main className={styles.main}>
        <section>
          <aside className={styles.cardBlue}></aside>
          <div className={styles.container}>
            <CardHome 
              link={data.link}
              urlGit={data.githubLink}
            />
          </div>
          <div className={styles.containerCards}>
            {Skills.map((e,k)=>{
              return(
                <SkillCards 
                  key={k}
                  name={e.name}
                  src={e.src}
                />
              );
            })}
          </div>
        </section>
        <section className={styles.projects}>
          <div className={styles.container}>
            <h2>Projetos</h2>
            <div className={styles.containerNav}>
              <ul>
                {
                  arryFilterElements.map((e,k)=>{
                    return(
                      <ElementFilterBtn 
                        name={e}
                        onClick={handleFilterProject}
                      />
                    )
                  })
                }
              </ul>
            </div>
            <div className={styles.areaCards}>
              <CardRepo 
                  link="https://github.com/lucasdksan/Ecoleta"
                  name="Ecoleta"
                  type="JavaScript"
                />
              <CardRepo 
                link="https://github.com/lucasdksan/Proffy"
                name="Proffy"
                type="JavaScript"
              />
              <CardRepo 
                link="https://github.com/lucasdksan/b7delivery"
                name="B7Delivery"
                type="JavaScript"
              />
              <CardRepo 
                link="https://github.com/lucasdksan/Blog_Nextjs"
                name="Blog_Next"
                type="TypeScript"
              />
              <CardRepo 
                link="https://github.com/lucasdksan/Backend-of-a-social-network"
                name="Backend"
                type="TypeScript"
              />
              <CardRepo 
                link="https://github.com/lucasdksan/First-Project-with-Electron"
                name="Electron"
                type="TypeScript"
              />
              <CardRepo 
                link="https://github.com/lucasdksan/Ecoleta"
                name="Ecoleta"
                type="JavaScript"
              />
              <CardRepo 
                link="https://github.com/lucasdksan/Proffy"
                name="Proffy"
                type="JavaScript"
              />
              <CardRepo 
                link="https://github.com/lucasdksan/b7delivery"
                name="B7Delivery"
                type="JavaScript"
              />
              <CardRepo 
                link="https://github.com/lucasdksan/Blog_Nextjs"
                name="Blog_Next"
                type="TypeScript"
              />
              <CardRepo 
                link="https://github.com/lucasdksan/Backend-of-a-social-network"
                name="Backend"
                type="TypeScript"
              />
              <CardRepo 
                link="https://github.com/lucasdksan/First-Project-with-Electron"
                name="Electron"
                type="TypeScript"
              />
            </div>
          </div>
        </section>
        <section className={styles.state}>
          <div className={styles.container}>
            <h2>Sobre</h2>
            <div className={styles.content}>
              <AboutCard />
              <AnimateElement />
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

  return {
    props: {
      link: dataGit.avatar_url,
      company: dataGit.company,
      githubLink: dataGit.html_url,
      location: dataGit.location
    }
  }
}