import React, { useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use';
import { Container, ArrowIcon, Botton } from '../styles/components/UpButton';

const UpBotton: React.FC = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [ visible, setVisible ] = useState(false);
  useEffect(()=>{
    if(pageYOffset > 100){
      setVisible(true);
    }else{
      setVisible(false);
    }
  }, [pageYOffset]);
  const scrollToTop = ()=> window.scrollTo({top: 0, behavior: 'smooth'})
  if(!visible){
    return (
      <div/>
    );
  }
  return (
    <Container>
      <Botton onClick={scrollToTop}>
        <ArrowIcon/>
      </Botton>
    </Container>
  );
};

export default UpBotton;
