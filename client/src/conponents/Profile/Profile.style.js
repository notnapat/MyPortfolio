import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 2rem;
    padding-top: 3rem;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    z-index: 1;
    @media (max-width: 840px) {
        width: 90%;
    }

    @media (max-width: 640px) {
        flex-direction: column;
    }
`;
export const Texts = styled.div`
    flex: 1;
    h4 {
        padding: 1rem 0;
        font-weight: 500;
    }
    h1 {
        font-size: 2rem;
        font-family: "Secular One", sans-serif;
        letter-spacing: 2px;
    }
    h3 {
        font-weight: 500;
        font-size: 1.2rem;
        padding-bottom: 1.2rem;
        text-transform: capitalize;
    }
    p {
        font-weight: 300;
    }
`;

export const IconPro = styled.div`
   margin-top: 3rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 1rem;
    @media (max-width: 640px){
        align-items: start;
     }
   .social-icons {
     display: flex;
     /* flex-direction:row; */
     flex-wrap: wrap;
     align-items: center;
     gap: 1rem;
       .react-icons{
        width: 1.5rem;
        height: 1.5rem;
     }   
   }
 `;

export const ProfileImg = styled.div`
    .img-profile {
        object-fit: contain;
    }
    img {
      z-index: 1;
        width: 25rem;
        height: 25rem;
        filter:  grayscale(85%) drop-shadow(10px 10px 1px  rgba(255, 82, 82, 0.7) )    ;
        

        transition: transform 400ms ease-in-out, filter 400ms ;
        opacity: 0.;
        @media (max-width: 790px) {
            width: 20rem;
        }

        @media (max-width: 660px) {
            width: 18rem;
        }

        @media (max-width: 640px) {
            width: 100%;
            :hover{
                transform: none;
                filter: none;
            }
        }
    }

    :hover img {

        transform:  translate(-3%, -3%) ;
       filter: grayscale(85%) drop-shadow(35px 35px 2px  #ff5252)   ;

       @media (max-width: 640px) {
        transform: translate(0%,0%);
        filter: grayscale(85%) drop-shadow(10px 10px 1px rgba(255, 82, 82, 0.7));
       }
        
    }
`;
