import { GetServerSideProps } from "next";
import Image from "next/image";
import CardHome from "../components/CardHome";
import Footer from "../components/Footer";
import HeadComponent from "../components/HeadComponent";
import Header from "../components/Header";
import SkillCards from "../components/SkillCards";
import { Skills } from "../data/Skills";
import styles from "../styles/pages/Home.module.scss";
import { HomeTypes } from "../types/HomeTypes";

const Home = (data: HomeTypes)=>{
  return(
    <>
      <HeadComponent />
      <Header />
      <main className={styles.main}>
        <section>
          <aside className={styles.cardBlue}></aside>
          <Image 
            src="/assets/+.png" 
            alt="X icon" 
            width={88}
            height={88}
            className={styles.xicon}
          />
          <Image 
            src="/assets/Ellipse.png" 
            alt="Circle Icon" 
            width={88}
            height={88}
            className={styles.cicon}
          />
          <div className={styles.container}>
            <CardHome 
              link={data.link}
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
    }
  }
}