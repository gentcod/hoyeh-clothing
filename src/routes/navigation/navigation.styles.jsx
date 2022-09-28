import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
   background-color: #333;
   height: 5rem;
   border-radius: .5rem;
   padding: 1rem;
   display: flex;
`

export const LogoContainer = styled.div`
   heigh: 100%;
   width: 4rem;
   margin: auto;
   margin-top: .5rem;
`

export const NavigationLink = styled(Link)`
   color: #fff;
   margin-right: 5rem;
   margin-top: .5rem;
   font-size: 1.2rem;
`

