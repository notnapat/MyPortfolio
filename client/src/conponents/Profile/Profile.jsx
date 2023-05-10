import React from "react";
import { Container, Texts, IconPro, ProfileImg } from "./Profile.style";
import { Slide } from "react-awesome-reveal";
import { DiHtml5, DiCss3, DiJavascript1 } from "react-icons/di";
import {
    FaReact,
    FaBootstrap,
    FaNodeJs,
    FaGitSquare,
    FaGithub,
} from "react-icons/fa";
import {
    SiTailwindcss,
    SiExpress,
    SiMysql,
    SiMongodb,
    SiWordpress,
    SiFigma,SiStyledcomponents,

} from "react-icons/si";
import { CgTemplate} from "react-icons/cg"
import { TbBrandVscode,TbBrandRedux } from "react-icons/tb";

const Profile = () => {
    return (
        <Container id="home">
            <Slide direction="left"  >
                <Texts>
                    <h4>
                        Hello <span className="red">My Name Is </span>
                    </h4>
                    <h1 className="red">Napat Khampao</h1>
                    <h3>Web Developer</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Suscipit, sint atque? Alias eos, excepturi cum qui
                        quo accusamus minus vel veritatis molestias magni. Magni
                        pariatur amet eius consequuntur sed, unde omnis nulla
                        atque perferendis. Labore vero blanditiis eveniet magni
                    </p>
                    <IconPro>
                        <h4>
                            My <span className="red">Skill</span>
                        </h4>
                        {/* <p>Check out my</p> */}
                        <div className="social-icons">
                            <DiHtml5 className="react-icons" />
                            <DiCss3 className="react-icons" />
                            <FaBootstrap className="react-icons" />
                            <SiTailwindcss className="react-icons" />
                            <DiJavascript1 className="react-icons" />
                            <FaReact className="react-icons" />
                            <TbBrandRedux className="react-icons" />

                            <FaNodeJs className="react-icons" />
                            <SiExpress className="react-icons" />
                            <SiMysql className="react-icons" />
                            <SiMongodb className="react-icons" />

                            <TbBrandVscode className="react-icons" />
                            <FaGitSquare className="react-icons" />
                            <FaGithub className="react-icons" />
                            <SiWordpress className="react-icons" />
                            <SiFigma className="react-icons" />
                            <SiStyledcomponents className="react-icons" />
                            <CgTemplate className="react-icons" />
                        </div>
                    </IconPro>
                </Texts>
            </Slide>
            <Slide direction="right"  >
                <ProfileImg>
                    <img
                        // src="https://res.cloudinary.com/ghazni/image/upload/v1659082282/Yt-portfolio/Untitled-1_drcspz.png"
                        src={require("../../images/profile/my-dark.jpg")}
                        className="img-profile"
                        alt="profile"
                    />
                </ProfileImg>
            </Slide>
        </Container>
    );
};

export default Profile;
