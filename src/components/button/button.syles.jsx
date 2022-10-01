import styled from "styled-components";

export const ButtonContainer = styled.div`
   display: inline-block;
   padding: 1rem 3rem;
   background-color: #222;
   border-radius: .5rem;
   z-index: 10;

   &:not(:last-child) {
      margin-right: 3rem;
   }
`
   
export const ButtonText = styled.span`
   color: #fff;
   font-size: 1.1rem;
   font-weight: 700;
`