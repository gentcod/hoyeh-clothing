import styled from "styled-components";

export const CardContainer = styled.div`
   width: 60rem;
   height: 40rem;
   position: absolute;
   top: 10%;
   left: 2rem;
   border-radius: .5rem;
   overflow: hidden;
`

export const CardImage = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
`
export const CardContentContainer = styled.div`
   display: inline-block;
   position: relative;
   width: 100%;
   height: 100%;
   top: 0;
   left: 0;
`

export const CardContentHeading = styled.h3`
   color: #222;
   font-size: 2.4rem;
   border-bottom: 1px solid #222;
`

export const CardButtonContainer = styled.div`
   display: inline-block;
`