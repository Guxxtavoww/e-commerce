import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";

import { sliderData } from "./sliderData";
import { SliderBox, Arrow, SliderWrapper, Slide } from "./styles";

const Slider = () => {
    const [ slideIndex, setSlideIndex ] = useState(0);

    const handleSlide = direcao => {
        if(direcao === "esquerda") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else if(direcao === "direita") {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    }

    return (
        <SliderBox>
            <Arrow direcao="esquerda" onClick={() => handleSlide("esquerda")}>
                <ArrowLeftOutlined />
            </Arrow>
            <SliderWrapper slideIndex={slideIndex}>
                {
                    sliderData.map((item, index) => (
                        <Slide bg={item.bg} key={index}>
                            <figure className="imgBx">
                                <img src={item.img} alt="Slider Bg" />
                            </figure>
                            <div className="slideContent">
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                                <Link className="btn" to={item.to}>Clicar</Link>
                            </div>
                        </Slide>
                    ))
                }
            </SliderWrapper>
            <Arrow direcao="direita" onClick={() => handleSlide("direita")}>
                <ArrowRightOutlined />
            </Arrow>
        </SliderBox>
    );
}

export default Slider;