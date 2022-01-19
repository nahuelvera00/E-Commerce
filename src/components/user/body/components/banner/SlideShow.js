import react, { useRef, useEffect} from "react";
import styled from "styled-components";
import img1 from "./1.jpg"
import img2 from "./2.jpg"
import img3 from "./3.jpg"
import img4 from "./4.jpg"
import { ReactComponent as FlechaIzquierda} from "./iconmonstr-angel-left-thin.svg"
import { ReactComponent as FlechaDerecha} from "./iconmonstr-angel-right-thin.svg"


const SlideShow = () => {

//LOGIC-BUTTON

    const slidecontainer = useRef(null);
    const intervaloSlideContainer = useRef(null);

    //FUNCIONALIDAD BOTON SIGUIENTE
    const next_button = () => {
        //COMPROBAMOS QUE EL SLIDER TENGA ELEMENTOS
        if(slidecontainer.current){
            if(slidecontainer.current.children.length > 0) {
                //OBTENEMOS EL PRIMER ELEMENTO DEL SLIDE
                const firstElement = slidecontainer.current.children[0];
                //ESTABLECEMOS LA TRANSICION DE LOS ELEMENTOS
                slidecontainer.current.style.transition = `2000ms ease-out all`;
    
                const sizeSlide = slidecontainer.current.children[0].offsetWidth;
    
                //MOVEMOS EL SLIDE
                slidecontainer.current.style.transform = `translateX(-${sizeSlide}px)`;
    
                const transition = () => {
    
                    //REINICIAMOS LA POSICION DEL SLIDE
                    slidecontainer.current.style.transition = 'none';
                    slidecontainer.current.style.transform = `translateX(0)`;
    
                    //ENVIAMOS EL PRIMER SLIDE AL FINAL
                    slidecontainer.current.appendChild(firstElement);
    
                    slidecontainer.current.removeEventListener('transitionend', transition);
                }
    
                //HACEMOS QUE SE EJECUTE ESTE EVENTO CUANDO TERMINA LA ANIMACION
                slidecontainer.current.addEventListener('transitionend', transition)
               
            }   
        }
        
    }
    
    //FUNCIONALIDAD BOTON ANTERIOR
    const previous_button = () => {

        //COMPROBAMOS LA CANTIDA DE ELEMENTOS
        if(slidecontainer.current.children.length > 0){

            //DEFINIMOS LA POSICION DEL ULTIMO ELEMENTO
            const positionLatest = slidecontainer.current.children.length -1;
            //DEFINIMOS EL ULTIMO ELEMENTO
            const latestElement = slidecontainer.current.children[positionLatest];

            //MOVEMOS EL ULTIMO ELEMENTO AL PRINCIPIO
            slidecontainer.current.insertBefore(latestElement, slidecontainer.current.firstChild);

            slidecontainer.current.style.transition = 'none';
            const sizeSlide = slidecontainer.current.children[0].offsetWidth;
            slidecontainer.current.style.transform = `translateX(-${sizeSlide}px)`;

            //TRANSICION
            setTimeout(() => {
                slidecontainer.current.style.transition = '2000ms ease-out all';
                slidecontainer.current.style.transform = `translateX(0)`;
            },30);
        
        }
    }
    
    useEffect(() => {
        intervaloSlideContainer.current = setInterval(() => {
            next_button();
        },5000);

        slidecontainer.current.addEventListener('mouseenter', () => {
            clearInterval(intervaloSlideContainer.current);
        });

        slidecontainer.current.addEventListener('mouseleave', () => {
            intervaloSlideContainer.current = setInterval(() => {
                next_button();
            }, 5000);
        });
    }, []);
    
//SLIDE COMPONENT
    return(
        <MainContainer>
            <SlideContainer ref={slidecontainer}>
                <Slide>
                    <a href="https://www.google.com">
                        <img src={img1} alt="" />
                    </a>
                    <SlideText>
                        <p>15% OFF</p>
                    </SlideText>
                </Slide>

                <Slide>
                    <a href="https://www.google.com">
                        <img src={img2} alt="" />
                    </a>
                    <SlideText>
                        <p>20% OFF</p>
                    </SlideText>
                </Slide>

                <Slide>
                    <a href="https://www.google.com">
                        <img src={img3} alt="" />
                    </a>
                    <SlideText>
                        <p>30% OFF</p>
                    </SlideText>
                </Slide>

                <Slide>
                    <a href="https://www.google.com">
                        <img src={img4} alt="" />
                    </a>
                    <SlideText>
                        <p>50% OFF</p>
                    </SlideText>
                </Slide>
            </SlideContainer>
            <Controls>
                <Button onClick={previous_button}>
                    <FlechaIzquierda/>
                </Button>
                <Button derecho onClick={next_button}>
                    <FlechaDerecha />
                </Button>
            </Controls>
        </MainContainer>
    );
}

//STYLES SLIDER

const MainContainer = styled.div`
    position: relative;
    height: 100%;

`;

const SlideContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    height: 100%;

`;

const Slide = styled.div`
    min-width: 100%;
    overflow: hidden;
    transition: .3s ease all;
    z-index: 10;
    height: 100%;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        vertical-align: top;
        object-fit: cover;
    }

`;

const SlideText = styled.div`
    background: rgba(0, 0, 0, .4);
    color: #fff;
    font-size: 25px;
    width: 100%;
    padding: 3px 0px 3px 0;
    text-align: center;
    z-index: 20;
    position: absolute;
    bottom: 0;

    @media screen and (max-width: 700px) {
        position: relative;
        color: #fff;
        background: #000;
    }
`;

const Controls = styled.div`
    position: absolute;
    top: 0;
    z-index: 30;
    height: 100%;
    width: 100%;
    pointer-events: none;
`;

const Button = styled.button`
    pointer-events: all;
    cursor: pointer;
    outline: none;
    width: 50px;
    padding: 0;
    margin: 0;
    height: 100%;
    text-align: center;
    position: absolute;
    background: none;
    transition: .3s ease all;

    &:hover {
        background: rgba(0,0,0,.2);
        path {
            fill: #fff;
        }
        border-bottom: none;
    }

    path {
        filter: ${props => props.derecho ? 'drop-shadow(-2px 0px 0px #fff)' : 'drop-shadow(2px 0px 0px #fff)'};
    }

    ${props => props.derecho ? 'right: 0': 'left:0'}
`;

export default SlideShow