import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import { Container, Logo, Nav } from "./Header.style";
import { Turn as Hamburger } from "hamburger-react";

const Header = () => {
    const [bar, setBar] = useState(false);

    const handleClick = (e) => {
        if (bar) {
            setBar(false);
        }
    };

    return (
        <Container bar={bar}>
            <Logo>
                <h1>
                    <a href="/">Portfolio</a>{" "}
                </h1>
            </Logo>
            <Nav bar={bar}>
                <span className="span-home">
                    <a href="/" onClick={handleClick}>
                        Home
                    </a>
                </span>
                <span>
                    <Link
                        activeClass="active"
                        to="service"
                        spy={true}
                        onClick={handleClick}
                    >
                        Services
                    </Link>
                </span>
                <span>
                    <Link
                        activeClass="active"
                        to="project"
                        onClick={handleClick}
                    >
                        Projects
                    </Link>
                </span>
                <span>
                    {/* <a href="#profile" onClick={handleClick}>
                        Footer
                    </a> */}
                    <Link
                        activeClass="active"
                        to="contact"
                        onClick={handleClick}
                    >
                        Contact
                    </Link>
                </span>
            </Nav>
            <div onClick={() => setBar(!bar)} className="bars">
                <Hamburger
                    toggled={bar}
                    toggle={setBar}
                    direction="left"
                    duration={0.5}
                    color="#fff"
                    distance="sm"
                    size={40}
                    aria-expanded={bar ? "true" : "false"}
                />
            </div>
        </Container>
    );
};

export default Header;
