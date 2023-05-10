import React from "react";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillGithub, AiOutlineArrowUp } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { TiSocialInstagram } from "react-icons/ti";
import { Slide, Zoom, Fade } from "react-awesome-reveal";


// import { Animated } from "react-animated-css";
// 
import { Container, Profile, ArrowUp, Form } from "./FooterContact.style";

const FooterContact = () => {
    const scrollUp = () => {
        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    };


    return (
        <Container id="contact">
            <Profile>
                <Slide  direction="left">
                    {/* <h1>Contact Me</h1> */}
                <div className="links">
                    <h1>Contact me</h1>
                    <div>
                        <span>
                            <FiPhoneCall />
                        </span>
                        {/* <a href="tel:+66647210557">0647210557</a> */}
                        <p>0647210557</p>
                    </div>
                    <div>
                        <span>
                            <HiOutlineMailOpen />
                        </span>
                        <a href="mailto:notnapat9001@gmail.com">
                            notnapat9001@gmail.com
                        </a>
                    </div>
                </div>

                <div className="profiles">
                    <h1>Check my profiles</h1>
                    <div className="icons">
                        <Zoom>
                        <span>
                            <a href="/">
                                <AiFillGithub />
                            </a>
                        </span>
                        </Zoom>
                        <Zoom>
                        <span>
                            <a href="https://www.facebook.com/not.napat.3/">
                                <BsFacebook />
                            </a>
                        </span>
                        </Zoom>
                        <Zoom>
                        <span>
                            <a href="https://www.instagram.com/nine.not/?igshid=ZGUzMzM3NWJiOQ%3D%3D&fbclid=IwAR3wuvYWLTk3Enz7EWpsXXqhpZJqpwpFm_KrjsEYq4HpxAGuT04_5Uxql-o">
                                <TiSocialInstagram />
                            </a>
                        </span>
                        </Zoom>
                    </div>
                </div>
                <Fade >
                <ArrowUp onClick={scrollUp}>
                    <AiOutlineArrowUp />
                </ArrowUp>
                </Fade>
                </Slide>
            </Profile>
            <Form>
                 <Slide direction="right"  >

                    <form>
                        <div className="name">
                            <span>
                                <CgProfile />
                            </span>
                            <input type="text" placeholder="Fullname..." />
                        </div>
                        <div className="email">
                            <span>
                                <MdAlternateEmail />
                            </span>
                            <input type="email" placeholder="Email..." />
                        </div>
                        <div className="message">
                            <span className="messageIcon">
                                <FiMail />
                            </span>
                            <textarea
                                cols="30"
                                rows="10"
                                placeholder="Message..."
                            ></textarea>
                        </div>
                        <button>Submit</button>
                    </form>
                
                </Slide>
            </Form>
        </Container>
    );
};

export default FooterContact;
