import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1280px;
    width: 80%;
    margin: 0 auto;
    padding: 1.5rem 0;
    position: relative;
    animation: header 500ms ease-in-out;
    /* border: 1px solid green; */
    @media (max-width: 840px) {
        width: 90%;
    }
    .bars {
        display: none;
    }
    @media (max-width: 640px) {
        padding: 0.5rem 0;
        .bars {
            width: 48px;
            height: 48px;
            position: relative;
            display: flex;
            align-items: start;
            justify-content: center;
            /* padding: 0.5rem; */
            z-index: 100;
            transition: 200ms;

            :hover {
                opacity: 0.7;
            }
        }
    }
`;
export const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    /* span{
        font-size: 1.8rem;
    } */

    h1 {
        font-weight: 600;
        font-size: 1.2rem;
        a {
            
            color: #fff;
            text-decoration: none;
            font-weight: 400;
            position: relative;
        }
    }
`;
export const Nav = styled.div`
    span {
        margin-left: 1rem;

        a {
            cursor: pointer;
            color: #fff;
            text-decoration: none;
            font-weight: 400;
            position: relative;
            transition: 200ms;
            :hover {
                opacity: 0.7;
            }
        }
    }
    @media (max-width: 640px) {
        position: fixed;

        display: flex;
        /* padding-top:2rem; */
        flex-direction: column;
        background-color: #ff7043;
        inset: 0;
        align-items: center;
        font-size: 2rem;
        gap: 2rem;
        font-weight: 700;
        height: ${(props) => (props.bar ? "100vh" : 0)};
        transition: height 400ms ease-in-out;
        overflow: hidden;
        z-index: 100;

        span {
            margin-left: 0px !important;
        }

        .span-home {
            padding-top: 6rem;
        }
    }
`;
