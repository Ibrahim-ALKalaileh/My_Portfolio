import {useState,useEffect} from 'react';
import { Container,Row ,Col} from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/img/header-img.svg';
import React from "react";

function Hero() {
    const [loopNum, setLoopNum]=useState(0);
    const [isDeleting, setIsDeleting]=useState(false);
    const toRotate = ['Web Developer','Mobile Developer','Data Scientist','RPA Developer'];
    const [text,setText] = useState('');
    const [delta,setDelta]=useState(200 - Math.random()*100);
    const period = 400;

    useEffect(()=>{
        let ticker = setInterval (()=>{
            tick();
        },delta)

        return ()=> { clearInterval(ticker)};
    },[text])

    const tick = ()=>{
        let i = loopNum % toRotate.length ;
        let fullText = toRotate[i];
        let updatedText = isDeleting?fullText.substring(0,text.length-1): fullText.substring(0,text.length+1);

        setText(updatedText);

        if (isDeleting){
            setDelta(prevDelta=> prevDelta/2)
        }

        if (!isDeleting && updatedText==fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText===''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(200);
        }
    }

  return (
    <section className="hero" id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <span className="tagline">
                        Welcome to my portfolio
                    </span>
                    <h1>{`Hi Im Ibrahim`} <span className="wrap">{text}</span> </h1>
                    <p>Iam a very passionate and enthusiastic developer</p>
                    <button onClick={''}>Lets Connect <ArrowRightCircle size={25}/></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt='Hero Img'/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Hero