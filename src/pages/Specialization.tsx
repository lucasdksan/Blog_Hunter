import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import TargetEnd from '../components/TargetEnd';
import UpBotton from '../components/UpButton';
import { Container, 
         Content,
         FormationArea,
         TitleFomation,
         BlockFormation,
         ImgFormation,
         DescriptionFormation,
         ExperienceArea,
         TitleExperience,
         BlockExperience,
         DescriptionExperience,
         ImgExperience } from '../styles/pages/Specialization';
import ImageFormation from '../assets/Engenharia.png';
import ECT from '../assets/ECT.png';
import TecEletro from '../assets/Eletricidade.png';
import Robotic from '../assets/robotica.png';
import Aero from '../assets/Aero.png';
import JBS from '../assets/JBS.png';

const Specialization = ()=>{
    return(
        <Container>
            <Header/>
            <Content>
                <FormationArea>
                    <TitleFomation>Formação Profissional</TitleFomation>
                    <BlockFormation>
                        <ImgFormation src={ImageFormation}/>
                        <DescriptionFormation>
                            Universidade Federal do Rio Grande do Norte (UFRN) – Bacharel em Engenharia Mecatrônica – desde maio de 2021.
                        </DescriptionFormation>
                    </BlockFormation>
                    <BlockFormation>
                        <ImgFormation src={ECT}/>
                        <DescriptionFormation>
                            Universidade Federal do Rio Grande do Norte (UFRN) – Bacharel em Ciências e tecnologia, ênfase em Mecatrônica – de 2017 a 2021.
                        </DescriptionFormation>
                    </BlockFormation>
                    <BlockFormation>
                        <ImgFormation src={TecEletro}/>
                        <DescriptionFormation>
                            Escola Estadual de Educação Profissional Pedro de Queiroz Lima – Técnico em Eletrotécnica – de 2014 a 2016.
                        </DescriptionFormation>
                    </BlockFormation>
                    <BlockFormation>
                        <ImgFormation src={Robotic}/>
                        <DescriptionFormation>
                            Centro de Educação a Distância do Estado do Ceará (CED) – Robótica educacional – de agosto a novembro de 2016.
                        </DescriptionFormation>
                    </BlockFormation>
                    <BlockFormation>
                        <ImgFormation src={Aero}/>
                        <DescriptionFormation>
                            ABE Eólica – Energia Eólica – de setembro de 2015 a setembro de 2016.
                        </DescriptionFormation>
                    </BlockFormation>
                </FormationArea>
                <ExperienceArea>
                    <TitleExperience>Experiência Profissional</TitleExperience>
                    <BlockExperience>
                        <ImgExperience src={JBS}/>
                        <DescriptionExperience>
                            JBS divisão couros Cascavel/CE– Estagiário na área de manutenção elétrica – de julho a dezembro de 2017.
                        </DescriptionExperience>
                    </BlockExperience>
                    <BlockExperience>
                        <ImgExperience src={ECT}/>
                        <DescriptionExperience>
                            Escola de Ciências e Tecnologia (UFRN) Natal/RN - Monitoria de Computação Numérica - março de 2019 a maio de 2021.
                        </DescriptionExperience>
                    </BlockExperience>
                </ExperienceArea>
            </Content>
            <UpBotton/>
            <Footer/>
            <TargetEnd/>
        </Container>
    );
}

export default Specialization;