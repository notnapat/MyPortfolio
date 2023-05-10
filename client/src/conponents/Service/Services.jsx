import React from "react";
import styled from "styled-components";
import Card from "./Card";
import {  Zoom } from "react-awesome-reveal";
// import { useMediaQuery } from "react-responsive";

function Services() {
    // const pc = useMediaQuery({ query: "(min-width: 841px)" });
    return (
        <Container id="service">
             {/* <Slide animationIn={pc ? "slideInRight" : "zoomIn"} */}
            <Zoom>
                <h4>
                    My <span className="red">Services</span>
                </h4>
            </Zoom>

            <Cards>
                <Zoom>
                    <Card
                        title={"ui/ux designer"}
                        disc={`Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
                    />
                </Zoom>
                <Zoom>
                    <Card
                        title={"graphic designer"}
                        disc={`Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
                    />
                </Zoom>
                <Zoom>
                    <Card
                        title={"web designer"}
                        disc={`Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
                    />
                </Zoom>
            </Cards>
        </Container>
    );
}

export default Services;

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 0;
    @media (max-width: 840px) {
        width: 90%;
    }

    h1 {
        padding-top: 1rem;
    }
`;
const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    margin-top: 4rem;
    gap: 1rem;
`;
