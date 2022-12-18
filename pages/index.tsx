import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/pages/Home.module.scss";

const Home = ()=>{
  return(
    <>
      <Header />
      <main className={styles.main}>
        <section>
          <div className={styles.container}>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;