import styled from "styled-components";
import "./App.css";
import Header from "./conponents/Header/Header";
import Profile from "./conponents/Profile/Profile";
import Services from "./conponents/Service/Services";
import Projects from "./conponents/Projects/Projects";
import FooterContact from "./conponents/FooterContact/FooterContact";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
    return (
        <Container>
            <Banner>
                <Header />
                <Profile />
            </Banner>
            <Services />
            <LightColor>
                <Projects />
            </LightColor>
            <FooterContact />
        </Container>
    );
}

export default App;

const Container = styled.div``;
const Banner = styled.div`
    background: linear-gradient(
        159deg,
        rgb(45, 45, 58) 0%,
        rgb(43, 43, 53,0) 100% 
    );
    height: 100vh;
    @media (max-width: 640px) {
        height: 100%;
        padding-bottom: 3rem;
    }
    /* @media (max-height: 640px) {
        height: 100%;
        padding-bottom: 3rem;
    } */
`;

const LightColor = styled.div`
    background: linear-gradient(
        159deg,
        rgb(45, 45, 58) 0%,
        rgb(43, 43, 53 , 0) 100%
    );
`;
