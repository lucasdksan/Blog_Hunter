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
    async function LoadRepositories(){
        const dados =  await api.get(`/users/lucasdksan/repos`);
        if(!dados){
            return setLoading(true);
        }
        setLoading(false);
        setRepositories((dados.data as Props[]));
    }
    useEffect(()=>{
        LoadRepositories();
    },[]);
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
            </Content>
            <UpBotton/>
            <Footer/>
            <TargetEnd/>
        </Container>
    );
}

export default Projects;