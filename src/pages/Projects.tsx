import React, { useEffect, useState } from 'react';
import CardGitHub from '../components/CardGitHub';
import Footer from '../components/Footer';
import Header from '../components/Header';
import TargetEnd from '../components/TargetEnd';
import UpBotton from '../components/UpButton';
import { Container, Content } from '../styles/pages/Projects';
import { Props } from '../data/Props';
import api from '../services/api';
import Load from '../components/Load';
const Projects = ()=>{
    const [ repositories, setRepositories ] = useState<Props[]>();
    const [ loading, setLoading ] = useState(true);
    const [ currentPage, setCurrentPage ] = useState(1);
    async function LoadRepositories(){
        const dados =  await api.get(`/users/lucasdksan/repos?per_page=5&page=${currentPage}&order=DESC`);
        if(!dados){
            return setLoading(true);
        }
        const saveRepositories = dados.data as Props[];
        console.log(saveRepositories)
        setLoading(false);
        setRepositories(saveRepositories);
    }
    useEffect(()=>{
        LoadRepositories();
    },[currentPage]);
    useEffect(() => {
        const element = document.querySelector('#sentinela');
        const intersectionObserver = new IntersectionObserver(entries => {
          if (entries.some(entry => entry.isIntersecting)) {
            setCurrentPage((currentValue) => currentValue + 1);
          }
        })
        intersectionObserver.observe(element as Element);
        return () => intersectionObserver.disconnect();
      }, []);
    return(
        <Container>
            <Header/>
            <Content>
                {
                    loading ? <Load/> : (repositories?.map(itens =>{
                        return (
                            <CardGitHub 
                                name={itens.name}
                                description={itens.description}
                                download={itens.clone_url}
                                fork={itens.forks_count}
                                language={itens.language}
                                star={itens.stargazers_count}
                                key={itens.id}
                            />
                        );
                    }))
                }
                <span id="sentinela"/>
            </Content>
            <UpBotton/>
            <Footer/>
            <TargetEnd/>
        </Container>
    );
}

export default Projects;