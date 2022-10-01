import styled from "styled-components";

export const CardContainer = styled.div`
   width: 60rem;
   height: 40rem;
   position: absolute;
   top: 10%;
   left: 2rem;
   border-radius: .5rem;
   overflow: hidden;
   background-color: rgba(0,0,0);
`

export const CardImage = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;

   -webkit-mask-image: linear-gradient(black, rgba(0,0,0,.2));
   mask-image: linear-gradient(black, rgba(0,0,0,.2));
`
export const CardContentContainer = styled.div`
   text-align: center;
   display: inline-block;
   position: absolute;
   width: 100%;
   height: 100%;
   top: 0;
   left: 0;
   padding: 5rem;
`

export const CardContentHeading = styled.h3`
   width: 70%;
   text-align: left;
   color: #333;
   font-size: 3rem;
   border-bottom: 1px solid #222;
   margin: 10rem auto 0 auto;
   padding-bottom: 1rem;
`

export const CardButtonContainer = styled.div`
   width: 70%;
   display: inline-block;
   margin-top: 5rem;
`