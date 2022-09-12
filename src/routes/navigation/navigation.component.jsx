import { Fragment } from "react";
import { Outlet } from 'react-router-dom';

import { ReactComponent as Logo } from "../../assets/SVG/hoyeh_logo.svg";
import SearchBox from "../../components/search-box/search-box.component";

import { NavigationContainer, LogoContainer } from "./navigation.styles";

const Navigation = () => {
   return (
      <Fragment>
         <NavigationContainer>
            <LogoContainer>
               <Logo/>
            </LogoContainer>
            <SearchBox/>
            <h1>Navigation component</h1>
         </NavigationContainer>
         <Outlet/>
      </Fragment>
   )
}

export default Navigation