import React, { useRef } from "react";
import Slider from "react-slick";
import Project from "./Project";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";
import { DiHtml5, DiJavascript1, DiReact } from "react-icons/di";
// import { Link } from "react-router-dom";

let data2 = [
    {
        img: "https://res.cloudinary.com/ghazni/image/upload/v1661324124/Yt-portfolio/ui5_mnvdaw.png",
        // disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
        disc: (
            <div>
                <div className="con-react-icons">
                    <DiHtml5 className="react-icons" />
                    <DiJavascript1 className="react-icons" />
                    <DiReact className="react-icons" />
                </div>
                <div className="link-project">
                  {/* <Link to="/home">Goto</Link> */}
                  <a href="/home">Goto</a>
                </div>
            </div>
        ),
    },
    {
        img: "https://res.cloudinary.com/ghazni/image/upload/v1661324074/Yt-portfolio/ui4_jku3ol.png",
        // disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
         disc: (
            <div>
                <div className="con-react-icons">
                    <DiHtml5 className="react-icons" />
                    {/* <DiJavascript1 className="react-icons" />
                    <DiReact className="react-icons" /> */}
                </div>
                <div className="link-project">
                  {/* <Link to="/client">Goto</Link> */}
                  <a href="https://www.youtube.com/" >Goto</a>
                </div>
            </div>
        ),
    },
    {
        img: "https://res.cloudinary.com/ghazni/image/upload/v1661323981/Yt-portfolio/ui2_wtollo.png",
        disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
        img: "https://res.cloudinary.com/ghazni/image/upload/v1661323980/Yt-portfolio/ui3_akynn4.png",
        disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    // {
    //     img : "https://res.cloudinary.com/ghazni/image/upload/v1661323979/Yt-portfolio/ui1_n3uiaz.png",
    //     disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
    // }
];

const settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
        {
            breakpoint: 990,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                centerMode: false,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                centerMode: false,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
            },
        },
    ],
};
const SliderComp = () => {
    const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data2.map((item, i) => <Project item={item} key={i} />);
    return (
        <Container>
            <Slider ref={arrowRef} {...settings}>
                {sliderProject}
            </Slider>
            <Buttons>
                <button
                    onClick={() => arrowRef.current.slickPrev()}
                    className="back"
                >
                    <IoIosArrowBack />
                </button>
                <button
                    onClick={() => arrowRef.current.slickNext()}
                    className="next"
                >
                    <IoIosArrowForward />
                </button>
            </Buttons>
        </Container>
    );
};

export default SliderComp;

const Container = styled.div`
    position: relative;
`;

const Buttons = styled.div`
    button {
        width: 2rem;
        height: 2rem;
        background-color: rgba(255, 255, 255, 0.1);
        cursor: pointer;
        color: #01be96;
        border: none;
        position: absolute;
        top: 45%;
        right: -1rem;
    }

    .back {
        left: -1rem;
    }
`;
